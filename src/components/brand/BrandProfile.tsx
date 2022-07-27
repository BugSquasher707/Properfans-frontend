import BrandSocials from "components/brand/BrandSocials"
import BrandProfileButtons from "components/brand/elements/BrandProfileButtons"
import ModalFollowers from "components/modals/fan/ModalFollowers"
import ModalFriends from "components/modals/fan/ModalFriends"
import ModalSubscribers from "components/modals/fan/ModalSubscribers"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProfileBrandInterface, BrandSocialInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { AiFillCaretLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ButtonFollow from "utils/buttons/ButtonFollow"
import ButtonSubscribeManage from "utils/buttons/ButtonSubscribeManage"
import PopupFollowers from "utils/buttons/PopupFollowers"
import PopupSubscribers from "utils/buttons/PopupSubscribers"
import ProfileUser from "utils/profile/ProfileUser"
import ProfileUserSmall from "utils/profile/ProfileUserSmall"

const BrandProfile = ({
  profile,
  small,
  closed,
  handlerFollow,
  full,
  isFollow
}: {
  profile: ProfileBrandInterface | any
  small?: boolean
  closed?: boolean
  handlerFollow: any
  full?: boolean
  isFollow: boolean
}) => {
  const { authenticated, user } = useProps()

  const [socials, setSocials] = useState<BrandSocialInterface[]>([])

  const [openFollowers, setOpenFollowers] = useState(false)
  const [openFriends, setOpenFriends] = useState(false)
  const [openSubscribers, setOpenSubscribers] = useState(false)

  useEffect(() => {
    if (profile.socials) {
      setSocials(profile.socials.filter((social: BrandSocialInterface) => social.link))
    }
  }, [profile])

  return (
    <>
      <div className="relative grid w-full grid-cols-1 rounded-t-4">
        {profile.banner ? <BannerFilled banner={profile.banner} full={full} /> : <Banner full={full} />}
        <div
          className={`relative w-full sm:rounded-4 ${
            small
              ? "border-1 border-grey-12 p-20 hover:border-transparent hover:shadow-lg"
              : "mb-0 px-12 pt-12 sm:mb-30 sm:px-40 sm:pt-40"
          }`}
        >
          <Link className="mb-10 flex h-24 w-full items-center justify-start lg:hidden" to={URL.FAN.FEED}>
            <AiFillCaretLeft className="text-20 text-grey-40 group-hover:text-black" />
          </Link>
          {small ? (
            <ProfileUserSmall
              avatar={profile.avatar}
              tag={profile.handle}
              username={profile.userName}
              verified={profile.verified}
            />
          ) : (
            <ProfileUser
              avatar={profile.avatar}
              tag={profile.handle}
              username={profile.userName}
              verified={profile.verified}
            />
          )}
          <div className={`w-full ${closed ? "hidden" : ""}`}>
            <div className="mb-20 flex w-full items-center justify-center space-x-[20px] sm:space-x-[24px]">
              <div className="flex space-x-[20px] sm:space-x-[24px]">
                <PopupFollowers brand={profile} title={"Fan"} value={profile.stats ? profile.stats.followers : 0} />
                <PopupSubscribers
                  brand={profile}
                  title={"Properfan"}
                  value={profile.stats ? profile.stats.subscribers : 0}
                />
              </div>
              {socials && socials.length > 0 ? <BrandSocials socials={socials} /> : ""}
            </div>
            <div className="mb-20 w-full text-center text-12 text-grey-40 sm:mb-30 sm:text-14">
              {profile.biography ? profile.biography : "Biography"}
            </div>
            {profile.owner.id !== user.id ? (
              <BrandProfileButtons handlerFollow={handlerFollow} isFollow={isFollow} profile={profile} />
            ) : (
              ""
            )}
            <Wrapper open={!authenticated}>
              <div className="mb-20 flex w-full items-center justify-center">
                <div className="grid w-[320px] grid-cols-2 gap-12">
                  <Link className="w-full" to={URL.HOME}>
                    <ButtonFollow active={false} />
                  </Link>
                  <Link className="w-full" to={URL.HOME}>
                    <ButtonSubscribeManage active={false} />
                  </Link>
                </div>
              </div>
            </Wrapper>
            <Wrapper open={authenticated}>
              {profile.friends &&
              profile.friends.count > 0 &&
              profile.friends.avatars.length > 0 &&
              profile.friends.avatars ? (
                <button
                  className="item-center flex w-full justify-center space-x-[12px]"
                  onClick={() => setOpenFriends(true)}
                >
                  <div className="mr-12 flex items-center">
                    {profile.friends.avatars.map((avatar: string, key: number) => (
                      <div
                        key={key}
                        className="-mr-12 flex h-30 w-30 items-center justify-center rounded-full bg-white"
                      >
                        {avatar ? <img alt="" className="h-24 w-24 rounded-full" src={avatar} /> : <Avatar size={24} />}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-14 leading-[30px] text-grey-40">
                    {profile.friends.name} and {profile.friends.count - 1} other friends
                  </div>
                </button>
              ) : (
                ""
              )}
            </Wrapper>
          </div>
        </div>
      </div>
      <Wrapper open={openFollowers}>
        <ModalFollowers brand={profile} handler={setOpenFollowers} open={openFollowers} />
      </Wrapper>
      <ModalFriends handler={setOpenFriends} open={openFriends} />
      <Wrapper open={openSubscribers}>
        <ModalSubscribers brand={profile} handler={setOpenSubscribers} open={openSubscribers} />
      </Wrapper>
    </>
  )
}

export default BrandProfile
