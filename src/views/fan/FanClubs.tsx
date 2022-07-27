import { statusApi } from "api/endpoints/status"
import FanCreatorProfile from "components/fan/FanCreatorProfile"
import { useProps } from "contexts/PropsContext"
import { CreatorDropdownType } from "libs/enums"
import { CreatorFanInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import Tabs from "utils/tabs/Tabs"

const FanClubs = ({ tab }: { tab: CreatorDropdownType }) => {
  const { token } = useProps()

  const [creators, setCreators] = useState<CreatorFanInterface[]>([])
  const [creatorsVisible, setCreatorsVisible] = useState<CreatorFanInterface[]>([])
  const [type, setType] = useState(tab)

  const [filters] = useState<TabInterface[]>([
    { title: <>All clubs</>, type: CreatorDropdownType.All, action: setType },
    {
      title: <>Following</>,
      type: CreatorDropdownType.Followed,
      action: setType
    },
    {
      title: <>Subscribed</>,
      type: CreatorDropdownType.Subscribed,
      action: setType
    }
  ])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    setCreatorsVisible(
      creators.filter(
        (creator: CreatorFanInterface) =>
          type === CreatorDropdownType.All ||
          (type === CreatorDropdownType.Followed && creator.follower) ||
          (type === CreatorDropdownType.Subscribed && creator.subscriber)
      )
    )
  }, [type, creators])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result && mounted) {
      setCreators(
        result.map((entry: any) => ({
          ...entry,
          creator: entry.brand,
          followers: entry.stats.followers,
          subscribers: entry.stats.subscribers,
          follower: entry.follower ? entry.follower : false,
          subscriber: entry.subscribed ? entry.subscribed : false
        }))
      )
    }
  }

  return (
    <>
      <div className="mb-20 flex w-full flex-wrap items-center justify-between gap-10 sm:gap-20 md:mb-30">
        <Tabs tabs={filters} type={type} />
      </div>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {creatorsVisible.map((creator: CreatorFanInterface, key: number) => (
          <FanCreatorProfile key={key} profile={creator} />
        ))}
      </div>
    </>
  )
}

export default FanClubs
