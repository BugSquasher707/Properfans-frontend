import { parseTier, parseTrophy } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { ReactComponent as Sub } from "assets/img/subs.svg"
import Wrapper from "components/wrappers/Wrapper"
import { URL } from "libs/constants"
import { TippingType } from "libs/enums"
import { FeedInterface, TippingUserInterface } from "libs/interfaces"
import React, { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { AiFillCaretLeft } from "react-icons/ai"
import { IoMdShare } from "react-icons/io"
import { MdFormatQuote, MdKeyboardArrowDown } from "react-icons/md"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const ModalTipTop = ({
  post,
  tip,
  showTips,
  showTopDonors
}: {
  post: FeedInterface
  tip: TippingUserInterface
  showTips: any
  showTopDonors: any
}) => {
  const [copied, setCopied] = useState(false)

  const copyEnabled = () => {
    setCopied(true)
    toastSuccess("Copied")
  }

  return (
    <>
      <Link className="w-full" to={URL.USERS.BASE.replace(":param", tip.user.handle)}>
        <div className="mb-16 flex h-90 w-full justify-center">
          <div className="relative h-90 w-90">
            {tip.user.avatar ? (
              <img alt="" className="h-90 w-90 rounded-full" src={tip.user.avatar} />
            ) : (
              <Avatar size={90} />
            )}
            <Wrapper open={tip.rank && tip.rank < 3}>
              <button
                className="group absolute -right-6 -bottom-6 flex h-32 w-32 items-center justify-center rounded-full bg-white"
                onClick={() => showTopDonors()}
              >
                {parseTrophy(tip.rank)}
                <div className="absolute top-50 right-[50%] hidden max-w-[200px] translate-x-[50%] transform group-hover:flex">
                  <div className="absolute top-[2px] left-[50%] h-14 w-14 translate-x-[-50%] translate-y-[-50%] rotate-45 transform rounded-2 bg-black-14 dark:bg-black"></div>
                  <div className="relative flex h-36 w-max items-center rounded-4 bg-black-14 px-12 text-12 font-bold text-white dark:bg-black">
                    Top Donor {tip.rank} of {tip.creator}
                  </div>
                </div>
              </button>
            </Wrapper>
          </div>
        </div>
        <div className="mb-4 w-full truncate overflow-ellipsis text-center text-16 font-bold text-black">
          {tip.user.userName}
        </div>
        <div className="mb-24 flex w-full items-center justify-center space-x-[6px]">
          <Sub className="fill-current text-grey-20" />
          <div className="text-14 font-bold text-grey-40">Tier {parseTier(tip.tier)}</div>
        </div>
      </Link>
      <div className="mb-20 flex w-full justify-center">
        <button className="group flex h-32 w-32 items-center justify-center rounded-full border-2 border-grey-12">
          <MdKeyboardArrowDown className="text-18 text-grey-40 group-hover:text-black" />
        </button>
      </div>
      <div className="mb-4 w-full">
        {
          {
            [TippingType.Money]: (
              <div className="text-center text-24 font-bold text-black">
                <NumberFormat displayType={"text"} prefix={"$"} value={Math.round(tip.amount)} thousandSeparator />
              </div>
            ),
            [TippingType.Propercoins]: (
              <div className="flex w-full items-center justify-center space-x-[6px]">
                <Propercoin className="-mt-12 h-16 w-16 fill-current text-purple" />
                <div className="text-24 font-bold text-black">
                  <NumberFormat displayType={"text"} value={Math.round(tip.amount * 100)} thousandSeparator />
                </div>
              </div>
            )
          }[tip.type]
        }
      </div>
      <div className="mb-20 w-full text-center text-12 text-grey-40 md:mb-30">tipped</div>
      <Wrapper open={tip.message}>
        <div className="relative mb-14 w-full rounded-4 bg-grey-3 p-34">
          <div className="absolute top-14 left-14">
            <MdFormatQuote className="rotate-180 transform text-18 text-grey-10" />
          </div>
          <div className="absolute bottom-14 right-14">
            <MdFormatQuote className="text-18 text-grey-10" />
          </div>
          <div className="w-full text-14 font-semibold text-black">{tip.message}</div>
        </div>
      </Wrapper>
      <div className="mb-10 w-full">
        <ButtonPurple
          action={showTips}
          icon={<AiFillCaretLeft className="text-white" />}
          title={"Back to All Tips"}
          full
        />
      </div>
      <CopyToClipboard
        text={`https://properfans.com${URL.FAN.TIP.replace(":id", post.id).replace(":param", tip.id)}`}
        onCopy={() => copyEnabled()}
      >
        <button className="group flex h-42 w-full items-center justify-center space-x-[10px] text-grey-40 hover:text-black">
          <IoMdShare className="text-16 text-grey-20 group-hover:text-black" />

          <span className="text-14 font-bold">{copied ? "Copied" : "Share Tip"}</span>
        </button>
      </CopyToClipboard>
    </>
  )
}

export default ModalTipTop
