import Cart from "components/cart/Cart"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { PropercoinsCartInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdShoppingBag } from "react-icons/md"
import { useHistory } from "react-router"
import NavCartDropdown from "utils/nav/NavCartDropdown"

const NavCart = () => {
  const { cart, path } = useProps()

  const history = useHistory()

  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const [items, setItems] = useState(0)

  const maximizeCart = () => {
    setOpen(false)
    setOpenCart(true)
  }

  useEffect(() => {
    if (cart) {
      setItems(cart.map((item: PropercoinsCartInterface) => item.count).reduce((a: number, b: number) => a + b, 0))
    } else {
      setItems(0)
    }
  }, [cart])

  const onCart = () => {
    if (items === 0) {
      history.push(URL.FAN.SHOP)
    } else {
      setOpen(true)
    }
  }

  return (
    <div className="center relative h-28 items-start">
      <div className="w-full">
        <button className="center flex h-28 w-full cursor-pointer lg:hidden" onClick={() => history.push(URL.FAN.SHOP)}>
          <div className="group flex w-full items-center justify-center gap-6 text-14 text-grey-40 hover:text-black">
            <MdShoppingBag
              className={`text-24 group-hover:text-black lg:text-20 ${
                path === URL.FAN.SHOP ? "text-purple lg:text-grey-20" : "text-grey-20"
              }`}
            />
          </div>
        </button>
        <button className="center hidden h-28 w-full cursor-pointer lg:flex" onClick={() => onCart()}>
          <div className="group flex w-full items-center justify-center gap-6 text-14 text-grey-40 hover:text-black">
            <MdShoppingBag className="text-20 text-grey-20 group-hover:text-black" />
          </div>
          <Wrapper open={items > 0}>
            <div className="center absolute -top-2 right-2 h-16 w-16 translate-x-[50%] transform select-none rounded-full border-2 border-white bg-purple text-8 font-bold text-white">
              {Math.min(9, items)}
            </div>
          </Wrapper>
        </button>
        {open ? <NavCartDropdown handler={setOpen} maximize={maximizeCart} /> : ""}
        {openCart ? <Cart handler={setOpenCart} /> : ""}
      </div>
    </div>
  )
}

export default NavCart
