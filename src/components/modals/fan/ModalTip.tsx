import ModalTipTop from "components/fan/tipping/ModalTipTop"
import { FeedInterface, TippingUserInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalTip = ({
  post,
  active,
  tips,
  open,
  handler,
  showTips,
  showTopDonors
}: {
  post: FeedInterface
  active: string
  tips: TippingUserInterface[]
  open: boolean
  handler: any
  showTips: any
  showTopDonors: any
}) => {
  const [tip, setTip] = useState<TippingUserInterface>()

  useEffect(() => {
    if (tips && tips.length > 0) {
      const newTip = tips.filter((item: TippingUserInterface) => item.id === active)[0]

      if (newTip) {
        setTip(newTip)
      } else {
        handler(false)
      }
    }
  }, [tips, active])

  useEffect(() => {
    // TODO - Tip!
  }, [tip])

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap overflow-hidden rounded-4 bg-white px-20 pb-20 pt-15 shadow-sm lg:w-450">
          {post.brand.banner ? <BannerFilled banner={post.brand.banner} /> : <Banner />}
          <div className="relative w-full">
            <div className="relative mb-30 flex h-30 w-full items-center justify-center px-40 text-center">
              <div className="w-full truncate overflow-ellipsis text-center text-12 font-bold text-black">
                {tip ? `Tip of ${tip.user.userName}` : "Loading"}
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <ModalClose handler={handler} />
            </div>
            {tip ? (
              <ModalTipTop post={post} showTips={showTips} showTopDonors={showTopDonors} tip={tip} />
            ) : (
              <div className="w-full text-center text-14 font-bold text-grey-40">No tip loaded</div>
            )}
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalTip
