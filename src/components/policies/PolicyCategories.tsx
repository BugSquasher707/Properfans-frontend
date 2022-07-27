import TermsNavItem from "components/terms/TermsNavItem"
import { LinkInterface } from "libs/interfaces"
import React from "react"
import { Link as LinkScroll } from "react-scroll"

const PolicyCategories = ({
  categories,
  section,
  handler
}: {
  categories: LinkInterface[]
  section: number
  handler: any
}) => {
  return (
    <>
      <div className="stick hidden w-[260px] flex-wrap items-start lg:flex">
        <div className="flex w-full flex-wrap items-start">
          <div className="mb-20 w-full text-12 text-grey-40 lg:mb-32">Browse Contents</div>
          <div className="w-full">
            {categories.map((element: any, key: number) => (
              <LinkScroll
                key={key}
                className="w-full cursor-pointer"
                offset={-110}
                to={element.link}
                onClick={() => handler(key + 1)}
              >
                <TermsNavItem
                  data={{
                    link: element.link,
                    title: `${key + 1}. ${element.title}`,
                    active: section === key + 1 ? true : false
                  }}
                />
              </LinkScroll>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PolicyCategories
