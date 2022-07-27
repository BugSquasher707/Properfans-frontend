import { getClubActivites, getUserClubActivites } from "api/endpoints/club"
import { getLatestPost } from "api/endpoints/fanPost"
import { parseNumber } from "api/integration/functions"
import { mapPost } from "api/integration/posts"
import FanFeedPost from "components/fan/feed/FanFeedPost"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { ActivitySideType } from "libs/enums"
import { ActivitySideInterface, FeedInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdTrendingDown, MdTrendingUp } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"

const CreatorSideActivity = () => {
  const { brand, token, brandActive, user } = useProps()

  const [stats] = useState(false)

  const [mine, setMine] = useState(false)
  const [activity, setActivity] = useState<ActivitySideInterface[]>([])
  const [activityAll, setActivityAll] = useState<ActivitySideInterface[]>([])
  const [visible, setVisible] = useState<ActivitySideInterface[]>([])

  const [following] = useState(36710)
  const [followingPercentage] = useState(-12)

  const [post, setPost] = useState<FeedInterface>()
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()
    onActivity()

    return () => {
      setMounted(false)
    }
  }, [brand])

  useEffect(() => {
    setVisible(mine ? activity : activityAll)
  }, [mine, activity, activityAll])

  const onLoad = async () => {
    if (!brand) {
      return
    }

    const result = await getLatestPost(token, brandActive.id)

    if (result.status) {
      if (result && result.data) {
        onPost(result.data)
      } else {
        setPost(undefined)
      }
    }
  }

  const onPost = async (res: any) => {
    const newPost = await mapPost(res)

    if (mounted) {
      setPost(newPost)
    }
  }

  const onActivity = async () => {
    if (!brand) {
      return
    }

    const resultActivity = await getUserClubActivites(token, brandActive.id, user.id)

    if (resultActivity.data && resultActivity.data.length > 0) {
      setActivity(
        resultActivity.data.map((entry: any) => ({
          ...entry,
          profile: entry.user,
          type: onActivityType(entry.type)
        }))
      )
    }

    const resultActivities = await getClubActivites(token, brandActive.id)

    if (resultActivities.data && resultActivities.data.length > 0) {
      setActivityAll(
        resultActivities.data.map((entry: any) => ({
          ...entry,
          profile: entry.brand,
          type: onActivityType(entry.type)
        }))
      )
    }
  }

  const onActivityType = (type: string) => {
    let newType = ActivitySideType.Donation

    switch (type) {
      case "donation":
        newType = ActivitySideType.Donation
        break
      case "subscription":
        newType = ActivitySideType.Subscription
        break
    }

    return newType
  }

  return (
    <>
      <div className="xl:rounded-t-0 relative grid max-h-[calc(100vh-60px)] w-full max-w-full grid-cols-1 items-start overflow-x-scroll rounded-t-4 bg-white py-12 shadow-md dark:shadow-none xs:py-20 lg:py-40 xl:h-screen xl:max-h-[100vh] xl:bg-transparent xl:shadow-none">
        <div className="absolute top-40 bottom-40 left-0 hidden border-l-1 border-grey-6 lg:flex"></div>
        <div className="grid w-full grid-cols-1 items-start px-12 xs:px-20 2xl:px-40">
          <div className="mb-20 flex w-full items-center justify-between gap-12 sm:mb-30">
            <div className="text-14 font-bold text-black">Activity</div>
            <button
              className={`text-14 font-bold ${mine ? "text-purple" : "text-grey-40"}`}
              onClick={() => setMine(!mine)}
            >
              Just mine
            </button>
          </div>
          <div className="mb-40 w-full">
            {visible && visible.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-10">
                {visible
                  .filter((entry: ActivitySideInterface, key: number) => key <= 3)
                  .map((entry: ActivitySideInterface, key: number) => (
                    <div
                      key={key}
                      className="grid w-full grid-cols-[auto,1fr] gap-12 rounded-4 bg-white p-16 shadow-sm dark:shadow-none"
                    >
                      {entry.profile && entry.profile.avatar ? (
                        <img alt="" className="h-32 w-32 rounded-full" src={entry.profile.avatar} />
                      ) : (
                        <Avatar size={32} />
                      )}
                      <div className="flex w-full items-center">
                        <div className="grid w-full grid-cols-1 gap-2">
                          <div className="w-full truncate overflow-ellipsis text-14 font-bold text-black">
                            {entry.profile.userName}
                          </div>
                          <div className="w-full text-12 font-bold text-grey-40">
                            {
                              {
                                [ActivitySideType.Donation]: mine ? "donated" : "received a donation",
                                [ActivitySideType.Subscription]: mine ? "subscribed" : "got a new subscription"
                              }[entry.type]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex h-100 w-full items-center justify-center rounded-4 bg-white p-20 text-14 font-bold text-black shadow-md dark:shadow-none">
                No activity on this club
              </div>
            )}
          </div>
          <div className="mb-30 w-full text-14 font-bold text-black">Latest post</div>
          <div className="w-full">
            {post ? (
              <FanFeedPost
                fullscreen={false}
                handlerComments={() => null}
                handlerLike={() => null}
                index={0}
                post={post}
                small
              />
            ) : (
              <div className="flex h-100 w-full items-center justify-center rounded-4 border-1 border-grey-12 bg-white p-20 text-14 font-bold text-black shadow-md dark:shadow-none">
                No posts on this club
              </div>
            )}
          </div>
          <Wrapper open={stats}>
            <div className="mb-30 flex w-full items-center justify-between space-x-[12px]">
              <div className="text-14 font-bold text-black">Club following</div>
              <div className="flex items-center space-x-[6px]">
                {followingPercentage >= 0 ? (
                  <MdTrendingUp className="text-green" />
                ) : (
                  <MdTrendingDown className="text-red" />
                )}
                <div className={`text-12 font-bold text-black ${followingPercentage >= 0 ? "text-green" : "text-red"}`}>
                  {Math.round(followingPercentage * 100) / 100}%
                </div>
              </div>
            </div>
            <div className="mb-40 flex w-full items-center space-x-[12px]">
              <div className="grid grid-cols-1">
                <div className="text-24 font-bold text-black">{parseNumber(following)}</div>
                <div className="text-12 text-grey-40">Active fans</div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default CreatorSideActivity
