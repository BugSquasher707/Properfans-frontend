import { getClubByHandle } from "api/endpoints/club"
import { checkClubFollower } from "api/endpoints/clubFollow"
import { getAllClubPosts } from "api/endpoints/fanPost"
import { mapPosts } from "api/integration/posts"
import BrandProfile from "components/brand/BrandProfile"
import BrandProfileSlim from "components/brand/BrandProfileSlim"
import FanFeedContentPosts from "components/fan/content/FanFeedContentPosts"
import { useProps } from "contexts/PropsContext"
import { FanTabsType, OverlayType } from "libs/enums"
import { FeedInterface, ProfileBrandInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdMessage } from "react-icons/md"
import { useInView } from "react-intersection-observer"
import { useParams } from "react-router"
import LoadingData from "utils/elements/LoadingData"
import TabsTop from "utils/tabs/TabsTop"

interface Params {
  param: string
}

const BrandContent = () => {
  const { path, token, setOverlay, user } = useProps()

  const { param } = useParams<Params>()

  const [ref, inView] = useInView({
    threshold: 0
  })

  const [type, setType] = useState<FanTabsType>(FanTabsType.Posts)

  const [tabs] = useState<TabInterface[]>([
    {
      icon: <MdMessage />,
      title: <>Posts</>,
      type: FanTabsType.Posts,
      action: setType
    }
  ])

  const [profile, setProfile] = useState<ProfileBrandInterface>()
  const [posts, setPosts] = useState<FeedInterface[]>([])

  const [isFollow, setIsFollow] = useState<boolean>(false)

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
      setTimeout(() => {
        setLoaded(true)
      }, 600)
    }
  }, [profile])

  const onLoad = async () => {
    if (param) {
      const result = await getClubByHandle(token, param)

      if (mounted && result && result.data) {
        setProfile(result.data)
        onPosts(result.data.id)
        isClubFollow(result.data.id)
      } else {
        setOverlay(OverlayType.Search)
      }
    }
  }

  const isClubFollow = async (clubId: any) => {
    if (clubId) {
      const result = await checkClubFollower(token, clubId, user.id)

      if (result) {
        setIsFollow(result.follower)
      }
    }
  }

  const onPosts = async (brandId: any) => {
    if (brandId) {
      const result = await getAllClubPosts(token, brandId)

      if (result.data.length > 0 && mounted) {
        setPosts(result.data && result.data.length > 0 ? mapPosts(result.data) : [])
      }
    }
  }

  const onUpdateFollow = (state: boolean) => {
    setIsFollow(state)
  }

  const onPlaceBanner = (visible: boolean) => {
    return visible ? "translate-y-[-100%]" : "translate-y-[0%]"
  }

  const onLoading = () => {
    return loaded ? "duration-400" : "opacity-0"
  }

  return (
    <>
      <div className="relative w-full">
        {profile ? (
          <>
            <div
              className={`fixed top-0 left-0 z-40 w-full transform bg-white transition lg:hidden ${onLoading()} ${onPlaceBanner(
                inView
              )}`}
            >
              <BrandProfileSlim profile={profile} />
              <div className="w-full">
                <TabsTop tabs={tabs} type={type} />
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <div ref={ref} className={`w-full bg-white`}>
                  <BrandProfile handlerFollow={onUpdateFollow} isFollow={isFollow} profile={profile} full />
                  <div className="w-full lg:mb-20">
                    <TabsTop tabs={tabs} type={type} />
                  </div>
                </div>
                <div className="w-full px-12 sm:px-20 lg:px-0">
                  {
                    {
                      [FanTabsType.Posts]: <FanFeedContentPosts handlerPage={""} posts={posts} />,
                      [FanTabsType.Shop]: "",
                      [FanTabsType.Missions]: "",
                      [FanTabsType.Likes]: ""
                    }[type]
                  }
                </div>
              </div>
            </div>
          </>
        ) : (
          <LoadingData title={"Loading brand"} />
        )}
      </div>
    </>
  )
}

export default BrandContent
