import { createCtx } from "contexts/Context"
import { ModalType } from "libs/enums"
import React, { createContext, useState } from "react"

type PopupContextType = {
  modal: ModalType
  setModal: any
}

export const [usePopup, CtxProvider] = createCtx<PopupContextType>()

export const PopupContext = createContext<PopupContextType | undefined>(undefined)

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(ModalType.None)

  return (
    <>
      <CtxProvider
        value={{
          modal,
          setModal
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default PopupProvider
