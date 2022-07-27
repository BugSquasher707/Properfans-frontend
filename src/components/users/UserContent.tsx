import { statusApi } from "api/endpoints/status"
import { getUser } from "api/endpoints/user"
import { toastError } from "api/integration/toaster"
import BrandProfileSlim from "components/brand/BrandProfileSlim"
import FanFeedContentLikes from "components/fan/content/FanFeedContentLikes"
import UserProfile from "components/users/UserProfile"
import UserProfileInfo from "components/users/UserProfileInfo"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ActivityType, FanTabsType } from "libs/enums"
import { ActivityInterface, ProfileInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdHeart } from "react-icons/io"
import { useInView } from "react-intersection-observer"
import { useHistory, useParams } from "react-router"
import LoadingData from "utils/elements/LoadingData"
import TabsTop from "utils/tabs/TabsTop"

interface Params {
  param: string
}

const UserContent = () => {
  const { path, token } = useProps()

  const history = useHistory()

  const { param } = useParams<Params>()

  const [ref, inView] = useInView({
    threshold: 0
  })

  const [type, setType] = useState<FanTabsType>(FanTabsType.Likes)

  const [tabs] = useState<TabInterface[]>([
    {
      icon: <IoMdHeart />,
      title: <>Activity</>,
      type: FanTabsType.Likes,
      action: setType
    }
  ])

  const [profile, setProfile] = useState<ProfileInterface>()
  const [likes, setLikes] = useState<ActivityInterface[]>([])

  const [loaded, setLoaded] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [path])

  useEffect(() => {
    if (profile) {
      onLikes()

      setTimeout(() => {
        setLoaded(true)
      }, 600)
    }
  }, [profile])

  const onLoad = async () => {
    if (param) {
      console.log(token)

      const result = await getUser(token, param)

      if (mounted) {
        if (result && result.data) {
          setProfile(result.data)
        } else {
          toastError("User not found")
          history.push(URL.FAN.FEED)
        }
      }
    }
  }

  const onLikes = async () => {
    const result = await statusApi()

    if (profile) {
      setLikes(
        mounted && result && result.length > 0
          ? result.map((like: any) => ({
              ...like,
              user: profile,
              type: onLikesType(like.type),
              created: like.created
            }))
          : []
      )
    }
  }

  const onLikesType = (newType: string) => {
    switch (newType) {
      case "comment":
        return ActivityType.Comment
      case "like":
        return ActivityType.Like
      default:
        return ActivityType.Like
    }
  }

  const onPlaceBanner = () => {
    return inView ? "translate-y-[-100%]" : "translate-y-[0%]"
  }

  const onLoading = () => {
    return loaded ? "duration-400" : "opacity-0"
  }

  return (
    <>
      <div className="feed brand relative overflow-hidden">
        {profile ? (
          <>
            <div
              className={`duration-400 absolute top-0 left-0 z-40 w-full transform bg-white transition ${onLoading()} ${onPlaceBanner()}`}
            >
              <BrandProfileSlim profile={profile} />
              <UserProfileInfo profile={profile} />
              <div className="w-full">
                <TabsTop tabs={tabs} type={type} />
              </div>
            </div>
            <div className="feed brand relative overflow-y-auto">
              <div ref={ref} className={`w-full bg-white`}>
                <UserProfile profile={profile} />
                <div className="w-full lg:mb-20">
                  <TabsTop tabs={tabs} type={type} />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  {
                    {
                      [FanTabsType.Posts]: "",
                      [FanTabsType.Shop]: "",
                      [FanTabsType.Missions]: "",
                      [FanTabsType.Likes]: <FanFeedContentLikes likes={likes} />
                    }[type]
                  }
                </div>
              </div>
            </div>
          </>
        ) : (
          <LoadingData title={"Loading user"} />
        )}
      </div>
    </>
  )
}

export default UserContent
