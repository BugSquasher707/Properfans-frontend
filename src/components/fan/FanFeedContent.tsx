import { getFeed } from "api/endpoints/fanFeed"
import { mapPosts } from "api/integration/posts"
import FanFeedContentPosts from "components/fan/content/FanFeedContentPosts"
import FanStories from "components/fan/FanStories"
import FanFeedPosting from "components/fan/posting/FanFeedPosting"
import Wrapper from "components/wrappers/Wrapper"
import WrapperPagination from "components/wrappers/WrapperPagination"
import { useProps } from "contexts/PropsContext"
import { FeedInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const FanFeedContent = () => {
  const { token, user } = useProps()

  const [done, setDone] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [reset, setReset] = useState(false)
  const [feed, setFeed] = useState<FeedInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, [])

  const onPage = async (page: number) => {
    console.log(token)

    const result = await getFeed(token, user.id)

    if (result.status) {
      onAppend(result.data, page)
    }
  }

  const onAppend = async (res: any, page: number) => {
    setLoaded(true)
    setReset(false)

    if (res && res.length === 0) {
      if (feed.length === 0) {
        onProperfansPosts()
      }

      setDone(true)
    } else {
      const newEntries = await mapPosts(res)

      if (mounted) {
        if (page === 1) {
          setFeed(newEntries)
        } else {
          setFeed((old: any) => old.concat(newEntries))
        }
      }

      setDone(false)
    }
  }

  const onProperfansPosts = async () => {
    console.log(token)

    // const result = await statusApi()

    // setFeed(mounted && result && result.length > 0 ? mapPosts(result) : [])
  }

  return (
    <>
      <div className="flex w-full items-start bg-white">
        <div className="absolute top-[-8px] left-0 h-10 w-full bg-white">
          <div className="absolute top-[-18px] left-0 h-20 w-full bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-10 sm:gap-20">
          <FanStories />
          <div className="grid grid-cols-1 items-start lg:rounded-4">
            <div className="grid w-full grid-cols-1 gap-20">
              <Wrapper open={user.creator ? true : true}>
                <FanFeedPosting />
              </Wrapper>
              <div className="grid w-full grid-cols-1 lg:gap-14">
                <WrapperPagination
                  count={feed.length}
                  done={done}
                  handlerPage={onPage}
                  items={"content"}
                  loaded={loaded}
                  reset={reset}
                  top={false}
                >
                  <FanFeedContentPosts handlerPage={onPage} posts={feed} />
                </WrapperPagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FanFeedContent
