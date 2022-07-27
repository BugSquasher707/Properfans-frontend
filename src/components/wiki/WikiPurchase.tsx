import { statusApi } from "api/endpoints/status"
import { parsePropercoinsIcon } from "api/integration/cart"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { PropercoinsInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-router-dom"
import ProductsItem from "utils/lists/ProductsItem"

const WikiPurchase = () => {
  const { token } = useProps()

  const [packages, setPackages] = useState<PropercoinsInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result && mounted) {
      loadPackages(result)
    }
  }

  const loadPackages = (res: any) => {
    const data = res.data

    if (data && data.length > 0) {
      const newPackages = data
        .filter((item: any) => parseInt(item.metadata.coins) > 0)
        .map((item: any) => ({
          id: item.id,
          amount: parseInt(item.metadata.coins),
          price: item.unit_amount / 100,
          sale: false,
          sale_price: item.unit_amount / 100,
          icon: parsePropercoinsIcon(parseInt(item.metadata.coins))
        }))
        .sort((a: PropercoinsInterface, b: PropercoinsInterface) => (a.amount > b.amount ? 1 : -1))

      setPackages(newPackages)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 items-center justify-start gap-30 lg:grid-cols-2 lg:gap-50 xl:gap-100">
        <div className="grid w-full grid-cols-1 gap-30">
          <div className="grid w-full gap-10">
            <div className="w-full text-14 font-bold text-purple">Propercoins</div>
            <div className="w-full text-32 font-black text-black">Purchase propercoins</div>
          </div>
          <div className="w-full text-16 text-grey-40">
            The propercoin is a currency that gets you access to exclusive corners of the creator economy.
          </div>
          <Link className="flex w-full" to={URL.FAN.SHOP}>
            <div className="mr-12 font-bold text-purple">Get Free Propercoins</div>
            <HiOutlineArrowNarrowRight className="text-purple" size="1.2em" />
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-20 sm:grid-cols-2">
          {packages
            .filter((i, key) => key < 2)
            .map((item: any, key: number) => (
              <ProductsItem key={key} handler={() => null} item={item} />
            ))}
        </div>
      </div>
    </>
  )
}

export default WikiPurchase
