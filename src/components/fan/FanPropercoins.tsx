import { statusApi } from "api/endpoints/status"
import { parsePropercoinsIcon } from "api/integration/cart"
import { useProps } from "contexts/PropsContext"
import { PropercoinsInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import ProductsList from "utils/lists/ProductsList"

const FanPropercoins = () => {
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
      <div className="w-full">
        <div className="mb-12 hidden w-full select-none justify-start text-24 font-bold text-black lg:flex">
          Purchase propercoins
        </div>
        <div className="mb-20 w-full select-none text-14 text-grey-40 lg:mb-40">
          Purchase preferred amount of propercoins with real-world currency via credit card, debit card or PayPal
        </div>
        <div className="w-full">
          <ProductsList items={packages} />
        </div>
      </div>
    </>
  )
}

export default FanPropercoins
