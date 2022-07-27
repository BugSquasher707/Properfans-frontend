import { parseTrophy } from "api/integration/functions"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import Wrapper from "components/wrappers/Wrapper"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import { URL } from "libs/constants"
import { TippingTotalInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"
import { useHistory } from "react-router"
import Avatar from "utils/avatars/Avatar"

const ModalTopDonor = ({ tip, index, trophy }: { tip: TippingTotalInterface; index: number; trophy: boolean }) => {
  const history = useHistory()

  const onProfile = (tag: string) => {
    if (tag) {
      history.push(URL.USERS.BASE.replace(":param", tag))
    }
  }

  return (
    <>
      <div
        className="group grid w-full cursor-pointer grid-cols-[auto,1fr,auto] items-center gap-14 rounded-4 px-12 py-10 hover:bg-purple-10"
        onClick={() => onProfile(tip.user.handle)}
      >
        <div className="relative h-42 w-42">
          {tip.user.avatar ? (
            <img alt="" className="h-42 w-42 rounded-full" src={tip.user.avatar} />
          ) : (
            <Avatar size={42} />
          )}
          <Wrapper open={index < 3 && trophy}>
            <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white">
              <div className="flex h-24 w-24 items-center justify-center rounded-full group-hover:bg-purple-10">
                {parseTrophy(index)}
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="w-full">
          <div className="relative mb-4 h-16 w-full">
            <WrapperAbsolute>
              <div className="mb-4 w-full truncate overflow-ellipsis text-left text-14 font-bold text-black">
                {tip.user.userName}
              </div>
            </WrapperAbsolute>
          </div>
          <div className="flex w-full items-center justify-start space-x-[10px]">
            <Wrapper open={tip.money > 0}>
              <div className="text-12 font-bold text-grey-40">
                <NumberFormat displayType={"text"} prefix={"$"} value={tip.money} thousandSeparator />
              </div>
            </Wrapper>
            <Wrapper open={tip.money > 0 && tip.coins > 0}>
              <div className="h-4 w-4 rounded-full bg-grey-20"></div>
            </Wrapper>
            <Wrapper open={tip.coins > 0}>
              <div className="grid w-full grid-cols-[auto,1fr] items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center">
                  <Propercoin className="h-16 w-16 fill-current text-purple" />
                </div>
                <div className="text-12 font-bold text-grey-40">
                  <NumberFormat displayType={"text"} value={tip.coins} thousandSeparator />
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
        <div className="text-14 font-bold text-black">
          <span className="text-12">#</span>
          {index + 1}
        </div>
      </div>
    </>
  )
}

export default ModalTopDonor
