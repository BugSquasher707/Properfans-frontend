import { parseGain } from "api/integration/functions"
import CreatorStatisticsBottomFans from "components/creator/statistics/bottom/CreatorStatisticsBottomFans"
import CreatorStatisticsGeneralHeading from "components/creator/statistics/elements/CreatorStatisticsGeneralHeading"
import { PeriodType, StatisticsHeaderType } from "libs/enums"
import { GraphInterface, TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import { RiCalendarEventFill } from "react-icons/ri"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import DropdownGraph from "utils/dropdowns/DropdownGraph"

const CreatorStatisticsGeneralEarnings = ({
  graph,
  stats,
  type
}: {
  graph: GraphInterface[]
  stats: any
  type: StatisticsHeaderType
}) => {
  const [options] = useState<TitleInterface[]>([
    {
      title: "This Week",
      type: PeriodType.Weekly
    },
    {
      title: "This Month",
      type: PeriodType.Monthly
    },
    {
      title: "This Year",
      type: PeriodType.Yearly
    }
  ])

  const [option, setOption] = useState<TitleInterface>({
    title: "This Month",
    type: PeriodType.Monthly
  })

  return (
    <>
      <div className="grid w-full grid-cols-1 items-center justify-between gap-12 lg:grid-cols-[1fr,auto]">
        <CreatorStatisticsGeneralHeading earnings={stats.earnings / 100} growth={parseGain(stats.totalGain) ?? 0} />
        <div className="hidden w-[160px]">
          <DropdownGraph
            handler={setOption}
            iconLeft={<RiCalendarEventFill />}
            options={options}
            title={option.title}
          />
        </div>
      </div>
      <div className="mt-30 h-[205px]">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0
            }}
            data={graph}
            height={400}
            width={500}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" x2="0" y1="0" y2="1">
                <stop offset="37.12%" stopColor="rgb(137, 88, 225)" stopOpacity={0.85} />
                <stop offset="105.26%" stopColor="rgb(137, 88, 225)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(0, 0, 0, 0.06)" />
            <XAxis dataKey="name" stroke="rgba(0, 0, 0, 0.4)" tick={{ fontSize: 14 }} />
            <YAxis stroke="rgba(0, 0, 0, 0.4)" tick={{ fontSize: 14 }} />
            <Tooltip />
            <Area dataKey="total" fill="url(#colorUv)" stroke="#8958E1" strokeWidth="4px" type="linear" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <hr className="my-20 w-full border-b border-grey-6" />
      <div className="grid w-full grid-cols-1 items-center gap-20 md:grid-cols-2 xl:grid-cols-1 3xl:grid-cols-2">
        {
          {
            [StatisticsHeaderType.Fans]: <CreatorStatisticsBottomFans stats={stats} />,
            [StatisticsHeaderType.Orders]: "",
            [StatisticsHeaderType.Tiers]: ""
          }[type]
        }
      </div>
    </>
  )
}

export default CreatorStatisticsGeneralEarnings
