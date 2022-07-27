import NavBack from "components/nav/NavBack"
import React from "react"
import Footer from "utils/footer/Footer"

const WrapperFooter = ({ children }: { children: any }) => {
  return (
    <>
      <NavBack />
      <div className="w-full">
        <div className="pag footer flex w-full justify-center">{children}</div>
      </div>
      <div className="fixed left-0 bottom-0 w-full">
        <Footer />
      </div>
    </>
  )
}

export default WrapperFooter
