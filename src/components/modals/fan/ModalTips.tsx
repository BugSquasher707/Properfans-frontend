import { getTip } from "api/endpoints/tip"
import { parseTier, parseTrophy } from "api/integration/functions"
import { mapPostTips } from "api/integration/posts"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { ReactComponent as Sub } from "assets/img/subs.svg"
import Wrapper from "components/wrappers/Wrapper"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperPagination from "components/wrappers/WrapperPagination"
import { useProps } from "contexts/PropsContext"
import { TippingType } from "libs/enums"
import { FeedInterface, TippingUserInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdChatBubble } from "react-icons/md"
import NumberFormat from "react-number-format"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalTips = ({
  // eslint-disable-next-line
  total,
  totalMoney,
  totalPropercoins,
  post,
  open,
  handler,
  showTip
}: {
  total: number
  totalMoney: number
  totalPropercoins: number
  post: FeedInterface
  open: boolean
  handler: any
  showTip: any
}) => {
  const { token } = useProps()

  const [done, setDone] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState<TippingUserInterface[]>([])

  const onPage = async (page: number) => {
    console.log(page, token)

    const result = await getTip(token, post.id)

    if (result.data) {
      onAppend(result.data)
    }
  }

  const onAppend = async (res: any) => {
    setLoaded(true)

    if (res && res.length === 0) {
      setDone(true)
    } else {
      const newEntries = await mapPostTips(res)

      setVisible((old) => old.concat(newEntries))
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap overflow-hidden rounded-4 bg-white px-20 pb-20 pt-15 shadow-sm lg:w-450">
          {post.brand.banner ? <BannerFilled banner={post.brand.banner} /> : <Banner />}
          <div className="relative w-full">
            <div className="relative mb-30 flex h-30 w-full items-center justify-center text-center text-12 font-bold text-black">
              All Tips
            </div>
            <div className="absolute top-0 right-0">
              <ModalClose handler={handler} />
            </div>
            <div className="mb-14 flex w-full justify-center">
              <div className="grid max-w-full grid-cols-[auto,auto] items-center gap-10 rounded-4 bg-white py-15 px-22 shadow-md dark:shadow-none">
                <div className="flex h-26 w-26 items-center justify-center rounded-full bg-purple-30">
                  <Propercoin className="h-16 w-16 fill-current text-purple" />
                </div>
                <div className="text-16 font-bold text-black">
                  <NumberFormat displayType={"text"} value={Math.round(post.tips)} thousandSeparator />
                </div>
              </div>
            </div>
            <div className="hidden w-full">
              <div className="grid w-full grid-cols-[auto,auto,auto] items-center justify-center gap-10">
                <div className="grid w-full grid-cols-[auto,auto] items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center">
                    <Propercoin className="h-16 w-16 fill-current text-grey-40" />
                  </div>
                  <div className="text-12 font-bold text-grey-40">
                    <NumberFormat displayType={"text"} value={totalPropercoins * 100} thousandSeparator />
                  </div>
                </div>
                <div className="text-14 text-grey-40">/</div>
                <div className="text-12 font-bold text-grey-40">
                  <NumberFormat displayType={"text"} prefix={"$"} value={totalMoney} thousandSeparator />
                </div>
              </div>
            </div>
            <div className="scroll relative -mx-14 mt-40 grid max-h-[350px] w-[calc(100%+28px)] grid-cols-1 gap-2 overflow-y-auto px-14">
              <div className="relative grid w-full grid-cols-1 gap-2">
                <WrapperPagination
                  count={visible.length}
                  done={done}
                  handlerPage={onPage}
                  items={"tips"}
                  loaded={loaded}
                  top={false}
                >
                  {visible && visible.length > 0 ? (
                    <>
                      {visible.map((tip: TippingUserInterface, key: number) => (
                        <button
                          key={key}
                          className={`group grid w-full items-center gap-14 rounded-4 px-12 py-10 hover:bg-purple-10 ${
                            tip.message ? "grid-cols-[auto,1fr,auto]" : "grid-cols-[auto,1fr]"
                          }`}
                          onClick={() => showTip(tip.id)}
                        >
                          <div className="relative h-42 w-42">
                            {tip.user.avatar ? (
                              <img alt="" className="h-42 w-42 rounded-full" src={tip.user.avatar} />
                            ) : (
                              <Avatar size={42} />
                            )}
                            <Wrapper open={key < 3}>
                              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white">
                                <div className="flex h-24 w-24 items-center justify-center rounded-full group-hover:bg-purple-10">
                                  {parseTrophy(key)}
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
                              {
                                {
                                  [TippingType.Money]: (
                                    <div className="text-12 font-bold text-grey-40">
                                      <NumberFormat
                                        displayType={"text"}
                                        prefix={"$"}
                                        value={Math.round(tip.amount)}
                                        thousandSeparator
                                      />
                                    </div>
                                  ),
                                  [TippingType.Propercoins]: (
                                    <div className="grid grid-cols-[auto,1fr] items-center gap-4">
                                      <div className="flex h-14 w-14 items-center justify-center">
                                        <Propercoin className="h-16 w-16 fill-current text-purple" />
                                      </div>
                                      <div className="text-12 font-bold text-grey-40">
                                        <NumberFormat
                                          displayType={"text"}
                                          value={Math.round(tip.amount * 100)}
                                          thousandSeparator
                                        />
                                      </div>
                                    </div>
                                  )
                                }[tip.type]
                              }
                              <div className="h-4 w-4 rounded-full bg-grey-20"></div>
                              <div className="flex items-center justify-start space-x-[6px]">
                                <Sub className="fill-current text-grey-20" />
                                <span className=" text-12 font-bold text-grey-40">Tier {parseTier(tip.tier)}</span>
                              </div>
                            </div>
                          </div>
                          <Wrapper open={tip.message}>
                            <div className="group relative flex px-6">
                              <MdChatBubble className="text-18 text-grey-20 group-hover:text-purple" />
                              <div className="absolute top-[50%] right-30 hidden translate-y-[-50%] transform pr-8 group-hover:flex">
                                <div className="absolute right-10 top-[50%] h-14 w-14 translate-x-[50%] translate-y-[-50%] rotate-[45deg] transform rounded-2 bg-black-14 dark:bg-black"></div>
                                <div className="flex h-36 w-max items-center  rounded-4 bg-black-14 px-12 text-12 font-bold text-white dark:bg-black">
                                  View Comment
                                </div>
                              </div>
                            </div>
                          </Wrapper>
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="flex h-[350px] w-full items-center justify-center text-center text-14 text-grey-40">
                      No tips loaded
                    </div>
                  )}
                </WrapperPagination>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalTips
