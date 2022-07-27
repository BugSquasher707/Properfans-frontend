import { addToCart } from "api/integration/cart"
import Cart from "components/cart/Cart"
import { useProps } from "contexts/PropsContext"
import { ProductType } from "libs/enums"
import { PropercoinsInterface } from "libs/interfaces"
import React, { useState } from "react"
import ProductsItem from "utils/lists/ProductsItem"

const ProductsList = ({ items }: { items: PropercoinsInterface[] }) => {
  const { cart, setCart } = useProps()

  const [open, setOpen] = useState(false)

  const addProduct = (item: PropercoinsInterface) => {
    const product = {
      type: ProductType.Propercoins,
      id: item.id,
      icon: item.icon,
      product: `${item.amount}`,
      price: item.price,
      sale: item.sale,
      sale_price: item.sale_price,
      count: 1,
      locked: false
    }

    const newCart = addToCart(cart, product)

    setCart([...newCart])
    setOpen(true)
  }

  return (
    <>
      <div className="w-full">
        {items && items.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-14 md:grid-cols-3 xl:grid-cols-2">
            {items
              .filter((item: PropercoinsInterface) => item.price < 110)
              .map((item: PropercoinsInterface, key: number) => (
                <ProductsItem key={key} handler={addProduct} item={item} />
              ))}
          </div>
        ) : (
          <div className="flex w-full justify-center text-14 font-bold text-grey-40">Shop is loading...</div>
        )}
      </div>
      {open ? <Cart handler={setOpen} /> : ""}
    </>
  )
}

export default ProductsList
