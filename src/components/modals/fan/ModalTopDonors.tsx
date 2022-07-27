import { statusApi } from "api/endpoints/status"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import ModalTopDonor from "components/fan/tipping/ModalTopDonor"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { FeedInterface, TippingTotalInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdTrophy } from "react-icons/io"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalTopDonors = ({
  post,
  open,
  handler,
  showTipping
}: {
  post: FeedInterface
  open: boolean
  handler: any
  showTipping: any
}) => {
  const { token } = useProps()

  const [tips, setTips] = useState<TippingTotalInterface[]>([])

  const [personal, setPersonal] = useState<TippingTotalInterface>()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setTips(result.periodDonations.map((entry: any) => ({ ...entry, money: 0 })))
      setPersonal({ ...result.myPlace, money: 0 })
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap overflow-hidden rounded-4 bg-white px-20 pb-20 pt-15 shadow-sm lg:w-450">
          {post.brand.banner ? <BannerFilled banner={post.brand.banner} /> : <Banner />}
          <div className="relative w-full">
            <div className="relative mb-6 flex h-30 w-full items-center justify-center text-center"></div>
            <div className="absolute top-0 right-0">
              <ModalClose handler={handler} />
            </div>
            <Wrapper open={post && post.brand}>
              <div className="mb-16 flex h-90 w-full justify-center">
                <div className="relative h-72 w-72">
                  {post.brand.avatar ? (
                    <img alt="" className="h-72 w-72 rounded-full" src={post.brand.avatar} />
                  ) : (
                    <Avatar size={72} />
                  )}
                </div>
              </div>
              <div className="mb-4 w-full truncate overflow-ellipsis text-center text-16 font-bold text-black">
                {post.brand.userName}
              </div>
              <div className="mb-40 flex w-full items-center justify-center space-x-[6px]">
                <IoMdTrophy className="text-purple" />
                <div className="text-14 font-bold text-grey-40">Top Donators Club</div>
              </div>
            </Wrapper>
            {tips.length > 0 ? (
              <div className="grid max-h-[400px] w-full grid-cols-1 gap-2 overflow-y-scroll">
                {tips.map((tip: TippingTotalInterface, key: number) => (
                  <ModalTopDonor key={key} index={key} tip={tip} trophy />
                ))}
              </div>
            ) : (
              <div className="flex h-[250px] w-full items-center justify-center text-center text-14 text-grey-40">
                No tips loaded
              </div>
            )}
            <div className="my-20 w-full border-b-1 border-grey-12"></div>
            {personal ? (
              <ModalTopDonor index={0} tip={personal} trophy={false} />
            ) : (
              <div className="flex h-62 w-full items-center justify-center text-center text-14 text-grey-40">
                You have not tipped yet.
              </div>
            )}
            <div className="mt-20 w-full">
              <ButtonPurple
                action={showTipping}
                icon={<Propercoin className="h-16 w-16 fill-current text-white" />}
                title={"Tip Creator"}
                full
              />
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalTopDonors
