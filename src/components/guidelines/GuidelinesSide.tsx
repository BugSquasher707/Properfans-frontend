import TermsNavItem from "components/terms/TermsNavItem"
import { URL } from "libs/constants"
import { GuidelinesCategoryType } from "libs/enums"
import React from "react"
import { Link } from "react-router-dom"
import ButtonBack from "utils/buttons/back/ButtonBack"

const GuidelinesSide = ({ type }: { type: GuidelinesCategoryType }) => {
  const Categories = [
    {
      link: URL.GUIDELINES.CONTENT,
      title: "Content Guidelines",
      type: GuidelinesCategoryType.Content
    },
    {
      link: URL.GUIDELINES.DOXING,
      title: "Doxing Guidelines",
      type: GuidelinesCategoryType.Doxing
    },
    {
      link: URL.GUIDELINES.SPONSOR,
      title: "Sponsorship Guidelines",
      type: GuidelinesCategoryType.Sponsor
    }
  ]

  return (
    <>
      <div className="w-full">
        <div className="mb-20 flex md:mb-40">
          <ButtonBack link={URL.GUIDELINES.BASE} title={"Back to Community Guidelines"} />
        </div>
        <div className="mb-20 w-full text-12 text-grey-40 lg:mb-32">Browse Contents</div>
        <div className="flex w-full cursor-pointer flex-wrap lg:mb-32">
          {Categories.map((element: any, key: number) => (
            <Link key={key} className="w-full" to={element.link}>
              <TermsNavItem
                data={{
                  title: element.title,
                  active: type === element.type
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default GuidelinesSide
