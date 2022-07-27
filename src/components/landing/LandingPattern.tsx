import LandingCoreValue from "components/landing/LandingCoreValue"
import LandingStatistic from "components/landing/LandingStatistic"
import { LandingPatternType } from "libs/enums"
import { LandingCoreInterface, StatisticInterface, TitleInterface } from "libs/interfaces"
import React from "react"
import { MdBrush, MdPeopleOutline } from "react-icons/md"
import { RiHeartLine } from "react-icons/ri"

const LandingPattern = ({ data, type }: { data: TitleInterface; type: LandingPatternType }) => {
  const CoreValues = [
    {
      title: "Community",
      text: "The community and users of our platform are our no.1 priorities, we value the people",
      icon: <MdPeopleOutline className="text-40 text-purple" />
    },
    {
      title: "Freedom",
      text: "You're free to express your creativity, in consideration of our guidelines",
      icon: <MdBrush className="text-40 text-purple" />
    },
    {
      title: "Passion",
      text: "We're passionate about offering you the opportunity to express yourself and interact with your community",
      icon: <RiHeartLine className="text-40 text-purple" />
    }
  ]

  const Statistics = [
    {
      title: "Total Fans",
      text: "~500 Daily",
      statistic: "75.000+"
    },
    {
      title: "Total Clubs",
      text: "~20 Daily",
      statistic: "2.500+"
    },
    {
      title: "Total Earnings",
      text: "Monthly",
      statistic: "$100k"
    }
  ]

  return (
    <>
      <div className="relative w-full rounded-4 bg-purple p-20 md:p-30 lg:p-50 xl:p-100">
        <div className="pattern absolute top-0 left-0 h-full w-full bg-repeat opacity-5"></div>
        <div className="relative w-full">
          <div className="mb-10 w-full text-center text-14 font-bold text-black">{data.title}</div>
          <div className="mb-30 w-full text-center text-32 font-black text-white lg:mb-50 xl:mb-80">{data.text}</div>
          <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-40">
            {
              {
                [LandingPatternType.Core]: (
                  <>
                    {CoreValues.map((element: LandingCoreInterface, key: number) => (
                      <LandingCoreValue key={key} data={element} />
                    ))}
                  </>
                ),
                [LandingPatternType.Statistics]: (
                  <>
                    {Statistics.map((element: StatisticInterface, key: number) => (
                      <LandingStatistic key={key} data={element} />
                    ))}
                  </>
                )
              }[type]
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPattern
