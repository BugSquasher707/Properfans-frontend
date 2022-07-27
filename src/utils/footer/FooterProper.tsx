import React from "react"
import FooterRights from "utils/footer/FooterRights"
import FooterSocials from "utils/footer/FooterSocials"

const FooterProper = () => {
  return (
    <>
      <div className="flex w-full justify-center bg-grey-6 px-20 lg:px-30">
        <div className="between flex w-full max-w-screen-xl flex-wrap">
          <div className="grid w-full grid-cols-1 justify-between gap-20 py-30 md:grid-cols-[1fr,auto]">
            <div className="grid w-full grid-cols-1 items-center justify-center gap-20 sm:grid-flow-col-dense sm:grid-cols-none md:w-auto md:justify-start">
              <FooterRights />
            </div>
            <div className="sm:between flex w-full flex-wrap items-center justify-center gap-20 md:w-auto md:justify-end">
              <FooterSocials />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterProper
