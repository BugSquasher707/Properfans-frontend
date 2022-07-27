import GuidelinesContent from "components/guidelines/categories/GuidelinesContent"
import GuidelinesDoxing from "components/guidelines/categories/GuidelinesDoxing"
import GuidelinesSponsor from "components/guidelines/categories/GuidelinesSponsor"
import { GuidelinesCategoryType } from "libs/enums"
import React from "react"
import { FaDollarSign } from "react-icons/fa"
import { IoShield } from "react-icons/io5"
import { MdVideoLibrary } from "react-icons/md"

const GuidelinesCategoryContent = ({ type }: { type: GuidelinesCategoryType }) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-20 grid w-full grid-cols-1 gap-20 sm:grid-cols-[1fr,auto] md:mb-30">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-14 font-bold text-purple">Community Guidelines</div>
            <div className="w-full text-32 font-black text-black">
              {
                {
                  [GuidelinesCategoryType.Content]: "Content Guidelines",
                  [GuidelinesCategoryType.Doxing]: "Doxing Guidelines",
                  [GuidelinesCategoryType.Sponsor]: "Sponsorship and Partnership Guidelines"
                }[type]
              }
            </div>
          </div>
          <div className="center h-64 w-64 rounded-full bg-purple-10">
            {
              {
                [GuidelinesCategoryType.Content]: <MdVideoLibrary className="text-32 text-purple" />,
                [GuidelinesCategoryType.Doxing]: <IoShield className="text-32 text-purple" />,
                [GuidelinesCategoryType.Sponsor]: <FaDollarSign className="text-32 text-purple" />
              }[type]
            }
          </div>
        </div>
        <div className="w-full">
          {
            {
              [GuidelinesCategoryType.Content]: <GuidelinesContent />,
              [GuidelinesCategoryType.Doxing]: <GuidelinesDoxing />,
              [GuidelinesCategoryType.Sponsor]: <GuidelinesSponsor />
            }[type]
          }
        </div>
      </div>
    </>
  )
}

export default GuidelinesCategoryContent
