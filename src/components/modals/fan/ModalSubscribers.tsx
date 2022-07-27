import { statusApi } from "api/endpoints/status"
import { parseTimeAgo } from "api/integration/functions"
import ModalSubscribersTop from "components/modals/fan/subscribers/ModalSubscribersTop"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { ProfileInterface, SubscribeInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdCalendar, IoMdTrophy } from "react-icons/io"
import Avatar from "utils/avatars/Avatar"
import DropdownTiers from "utils/dropdowns/DropdownTiers"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalSubscribers = ({ brand, open, handler }: { brand: ProfileInterface; open: boolean; handler: any }) => {
  const { token } = useProps()

  const [tiers, setTiers] = useState<TierInterface[]>([])
  const [tier, setTier] = useState<TierInterface>()
  const [tierIndex, setTierIndex] = useState(0)

  const [users, setUsers] = useState<SubscribeInterface[][]>([])
  const [visible, setVisible] = useState<SubscribeInterface[]>([])

  const [users1, setUsers1] = useState<SubscribeInterface>()
  const [users2, setUsers2] = useState<SubscribeInterface>()
  const [users3, setUsers3] = useState<SubscribeInterface>()
  const [usersList, setUsersList] = useState<SubscribeInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    onUsers()
  }, [])

  useEffect(() => {
    onVisible()
  }, [tiers, users, tierIndex])

  useEffect(() => {
    onSelect()
  }, [visible])

  const onLoad = async () => {
    console.log(brand, token)

    const result = await statusApi()

    if (mounted && result && result.length > 0) {
      setTier(result[0])
      setTiers(result)
    }
  }

  const onVisible = () => {
    if (users && users.length > 0) {
      setVisible(users[tierIndex])
    }
  }

  const onUsers = async () => {
    const result = await statusApi()

    if (mounted && result) {
      setUsers([
        [...result.tier1.sort((a: any, b: any) => b.created - a.created)],
        [...result.tier2.sort((a: any, b: any) => b.created - a.created)],
        [...result.tier3.sort((a: any, b: any) => b.created - a.created)],
        [...result.tier4.sort((a: any, b: any) => b.created - a.created)]
      ])
    }
  }

  const onSelect = () => {
    if (visible && visible.length > 0) {
      setUsers1(visible[0])
    } else {
      setUsers1(undefined)
    }

    if (visible && visible.length > 1) {
      setUsers2(visible[1])
    } else {
      setUsers2(undefined)
    }

    if (visible && visible.length > 2) {
      setUsers3(visible[2])
    } else {
      setUsers3(undefined)
    }

    if (visible && visible.length > 3) {
      setUsersList(visible.slice(3, visible.length))
    } else {
      setUsersList([])
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pb-20 pt-24 shadow-sm dark:shadow-none lg:w-450">
          <div className="mb-30 grid w-full grid-cols-[1fr,auto] items-center gap-12 pl-42">
            <div className="w-full text-center text-16 font-bold text-black">Subscribers List</div>
            <ModalClose handler={handler} />
          </div>

          {tier ? (
            <>
              <div className="mb-20 w-full">
                <DropdownTiers
                  handler={setTier}
                  handlerIndex={setTierIndex}
                  index={tierIndex}
                  options={tiers}
                  tier={tier}
                />
              </div>
              <div className="min-h-[200px] w-full">
                {visible.length >= 3 ? (
                  <>
                    <Wrapper open={users1 && users2 && users3}>
                      <div className="flex w-full items-center justify-center space-x-[20px]">
                        <Wrapper open={users2}>
                          <ModalSubscribersTop index={0} profile={users2} />
                        </Wrapper>
                        <Wrapper open={users1}>
                          <ModalSubscribersTop index={1} profile={users1} />
                        </Wrapper>
                        <Wrapper open={users3}>
                          <ModalSubscribersTop index={2} profile={users3} />
                        </Wrapper>
                      </div>
                    </Wrapper>
                    <Wrapper open={usersList.length > 0}>
                      <div className="mt-40 grid max-h-[254px] w-full grid-cols-1 gap-2 overflow-y-scroll">
                        {usersList.map((profile: SubscribeInterface, key: number) => (
                          <div
                            key={key}
                            className="grid w-full cursor-pointer grid-cols-[auto,1fr] items-center gap-14 rounded-4 py-10 px-12 hover:bg-purple-10"
                          >
                            <div className="flex h-42 w-42 items-center justify-center rounded-full">
                              {profile.user.avatar ? (
                                <img alt="" className="h-42 w-42 rounded-full" src={profile.user.avatar} />
                              ) : (
                                <Avatar size={42} />
                              )}
                            </div>
                            <div className="grid w-full grid-cols-1 gap-2">
                              <div className="relative grid w-full grid-cols-[auto,1fr] items-center justify-start gap-4">
                                <div className="absolute top-[50%] left-0 h-14 w-14 translate-y-[-50%] transform">
                                  <img alt="" className="w-14" src={"/general/subs_big.png"} />
                                  <div
                                    className={`absolute left-14 top-[50%] hidden w-[239px] translate-y-[-50%] transform pl-14 group-hover:flex ${
                                      key === 0 ? "!top-[-10px] !translate-y-[0px]" : ""
                                    } ${
                                      key === usersList.length - 1 ? "!top-auto bottom-[-10px] !translate-y-[0px]" : ""
                                    }`}
                                  >
                                    <div className="relative w-full rounded-4 bg-black-14 p-14">
                                      <div
                                        className={`absolute left-0 top-[50%] h-12 w-12 translate-x-[-50%] translate-y-[-50%] rotate-45 transform bg-black-14 ${
                                          key === 0 ? "!top-10 !translate-y-[0px]" : ""
                                        } ${
                                          key === usersList.length - 1 ? "!top-auto bottom-10 !translate-y-[0px]" : ""
                                        }`}
                                      ></div>
                                      <div className="mb-8 grid w-full grid-cols-[auto,1fr] items-center gap-8">
                                        <img alt="" className="w-14" src={"/general/subs_big.png"} />
                                        <div className="text-semibold w-full text-14 text-white">Tier 1</div>
                                      </div>
                                      <div className="mb-2 grid w-full grid-cols-[auto,1fr] items-center gap-8">
                                        <IoMdTrophy className="text-white opacity-25" />
                                        <div className="text-12 font-bold text-white-40">Nth User&apos;s Properfan</div>
                                      </div>
                                      <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
                                        <IoMdCalendar className="text-white opacity-25" />
                                        <div className="text-12 font-bold text-white-40">Jan 1 2020</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full select-none truncate overflow-ellipsis pl-18 font-bold text-black group-hover:text-purple">
                                  {profile.user.userName}
                                </div>
                              </div>
                              <div className="flex w-full items-center justify-start space-x-[10px]">
                                <div className="text-12 font-bold text-grey-40">@{profile.user.handle}</div>
                                <div className="h-4 w-4 rounded-full bg-grey-20"></div>
                                <div className="text-12 font-bold text-grey-40">{parseTimeAgo(profile.created)}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Wrapper>
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-14 font-bold text-grey-40">
                    Not enough subscription data found
                  </div>
                )}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalSubscribers
