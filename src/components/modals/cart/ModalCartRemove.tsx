import { removeFromCart } from "api/integration/cart"
import { useProps } from "contexts/PropsContext"
import { ProductType } from "libs/enums"
import { PropercoinsCartInterface } from "libs/interfaces"
import React from "react"
import { RiAlertFill } from "react-icons/ri"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalCartRemove = ({ open, handler, item }: { open: boolean; handler: any; item: PropercoinsCartInterface }) => {
  const { cart, setCart } = useProps()

  const remove = () => {
    setCart(removeFromCart(cart, item.id))
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 py-30 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <RiAlertFill className="text-48 text-purple" />
          </div>
          {
            {
              [ProductType.Propercoins]: (
                <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-30">
                  Are you sure you want to remove the <b className="text-black">{parseInt(item.product)} bundle</b> from
                  your cart?
                </div>
              )
            }[item.type]
          }
          <div className="mb-20 w-full md:mb-24">
            <ButtonPurple
              action={() => {
                remove()
                handler()
              }}
              title={"Remove Item"}
              full
            />
          </div>
          <button
            className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
            onClick={() => handler()}
          >
            Cancel
          </button>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalCartRemove
