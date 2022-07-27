import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalCreatorTierSale = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 grid w-full max-w-full grid-cols-1 gap-20 rounded-4 bg-white px-20 pb-20 pt-24 shadow-sm dark:shadow-none lg:w-450">
          <div className="grid w-full grid-cols-1 gap-14">
            <div className="w-full text-16 font-bold text-black">Subscription sale</div>
            <div className="w-full text-14 font-bold text-grey-40">Will be added soon</div>
          </div>
          <div className="grid w-full grid-cols-2 gap-12">
            <ButtonPurple action={() => handler(false)} title={"Confirm"} full />
            <button
              className="h-42 w-full text-14 font-bold text-grey-40 hover:text-black"
              onClick={() => handler(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalCreatorTierSale
