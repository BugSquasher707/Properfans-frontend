import CookieBar from "components/cookie/CookieBar"
import Footer from "components/footer/Footer"
import GuidelinesCategoryContent from "components/guidelines/GuidelinesCategoryContent"
import GuidelinesSide from "components/guidelines/GuidelinesSide"
import NavDefault from "components/nav/NavDefault"
import { GuidelinesCategoryType } from "libs/enums"
import React from "react"

const GuidelinesCategory = ({ type }: { type: GuidelinesCategoryType }) => {
  return (
    <>
      <NavDefault />
      <div className="pag flex w-full justify-center">
        <div className="relative flex w-full max-w-screen-xl flex-wrap items-start">
          <div className="grid w-full grid-cols-1 items-start gap-20 md:gap-20 lg:gap-20 xl:grid-cols-[auto,1fr] xl:gap-100">
            <div className="w-[250px]">
              <GuidelinesSide type={type} />
            </div>
            <div className="flex-start flex w-full">
              <GuidelinesCategoryContent type={type} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBar />
    </>
  )
}

export default GuidelinesCategory
