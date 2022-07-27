import { statusApi } from "api/endpoints/status"
import { onSortNumbers } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import CreatorStatisticsEarnings from "components/creator/statistics/CreatorStatisticsEarnings"
import CreatorStatisticsFollowers from "components/creator/statistics/CreatorStatisticsFollowers"
import CreatorStatisticsGeneralEarnings from "components/creator/statistics/CreatorStatisticsGeneralEarnings"
import CreatorStatisticsOrdersOverview from "components/creator/statistics/CreatorStatisticsOrdersOverview"
import CreatorStatisticsTiersOverview from "components/creator/statistics/CreatorStatisticsTiersOverview"
import CreatorStatisticsTitleDropdown from "components/creator/statistics/dropdown/CreatorStatisticsDropdown"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { DATE } from "libs/constants"
import { StatisticsHeaderType } from "libs/enums"
import { GraphInterface, ProfileInterface, TierInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

type ParamType = {
  param: string
}

const CreatorStatistics = () => {
  const { brandActive, token, setBrand } = useProps()

  const { param } = useParams<ParamType>()
  const [tag] = useState(param)

  const [loading, setLoading] = useState(true)
  const [orders] = useState(false)

  const [graph, setGraph] = useState<GraphInterface[]>([])

  const [stats, setStats] = useState()
  const [followers, setFollowers] = useState<ProfileInterface[]>([])

  const [tiers, setTiers] = useState<TierInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setLoading(true)
    setMounted(true)

    if (tag) {
      setBrand(tag)
    }

    if (tag === brandActive._handle) {
      onLoad()
      onTiers()
    }

    return () => {
      setMounted(false)
    }
  }, [tag, brandActive])

  const onLoad = async () => {
    console.log(token)

    const resultStats = await statusApi()
    const resultFollowers = await statusApi()

    if (mounted && resultStats && resultFollowers) {
      setStats(resultStats)

      const lastThirtyDays = [...new Array(30)].map((i, idx) => moment().startOf("day").subtract(idx, "days").unix())
      const sortedGraph = onSortNumbers(lastThirtyDays)

      const newGraph: GraphInterface[] = sortedGraph.map((date: number) => {
        const day = moment(date * 1000).format(DATE.GRAPH)
        const value = resultStats.graph.filter((entry: any) => entry.date === day)

        return {
          name: day,
          total: value && value.length > 0 ? value[0].total / 100 : 0
        }
      })

      setGraph(newGraph)

      const mappedFollowers = resultFollowers
        .filter((newFollower: any, key: number) => key < 4)
        .map((newFollower: any) => newFollower.user)

      setFollowers(mappedFollowers)

      setLoading(false)
    }
  }

  const onTiers = async () => {
    if (!brandActive.id) {
      toastError("You have to select or create a club before you can post stories")
      return
    }

    const result = await statusApi()

    if (mounted) {
      setTiers(result && result.length > 0 ? result : [])
    }
  }

  return (
    <>
      {loading ? (
        <CreatorSection>
          <CreatorTitle right={<CreatorStatisticsTitleDropdown />} title={"General overview"} />
          <div className="w-full text-14 text-grey-40">Loading...</div>
        </CreatorSection>
      ) : (
        <>
          <CreatorSection>
            <CreatorTitle right={<CreatorStatisticsTitleDropdown />} title={"General overview"} />
            <CreatorStatisticsGeneralEarnings graph={graph} stats={stats} type={StatisticsHeaderType.Fans} />
          </CreatorSection>
          <Wrapper open={orders}>
            <CreatorSection>
              <CreatorTitle title={"General overview"} />
              <CreatorStatisticsGeneralEarnings graph={graph} stats={stats} type={StatisticsHeaderType.Orders} />
            </CreatorSection>
          </Wrapper>
          <div className="grid w-full grid-cols-1 items-start gap-12 sm:gap-20 xl:grid-cols-2 xl:gap-30">
            <CreatorSection>
              <CreatorTitle title={"Latest followers"} />
              <CreatorStatisticsFollowers followers={followers} />
            </CreatorSection>
            <CreatorSection>
              <CreatorTitle title={"Split earnings"} />
              <CreatorStatisticsEarnings stats={stats} tiers={tiers} />
            </CreatorSection>
          </div>
          <CreatorSection>
            <CreatorTitle title={"Tiers overview"} />
            <CreatorStatisticsTiersOverview stats={stats} tiers={tiers} />
          </CreatorSection>
          <Wrapper open={orders}>
            <CreatorSection>
              <CreatorTitle title={"Orders overview"} />
              <CreatorStatisticsOrdersOverview productName={"Properfans meet"} />
            </CreatorSection>
          </Wrapper>
        </>
      )}
    </>
  )
}

export default CreatorStatistics
