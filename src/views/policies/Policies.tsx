import CookieBar from "components/cookie/CookieBar"
import NavPolicies from "components/nav/NavPolicies"
import PolicyCategories from "components/policies/PolicyCategories"
import PolicyCookies from "components/policies/PolicyCookies"
import PolicyDisclaimer from "components/policies/PolicyDisclaimer"
import PolicyPrivacy from "components/policies/PolicyPrivacy"
import PolicyTerms from "components/policies/PolicyTerms"
import { PoliciesType } from "libs/enums"
import React, { useEffect, useState } from "react"

const Policies = ({ type }: { type: PoliciesType }) => {
  const [section, setSection] = useState(1)

  useEffect(() => {
    setSection(1)
    window.scrollTo(0, 0)
  }, [type])

  const CategoriesCookies = [{ link: "document", title: "Document" }]

  const CategoriesDisclaimer = [
    { link: "website", title: "Website" },
    { link: "links", title: "External Links" },
    { link: "affiliates", title: "Affiliates" }
  ]

  const CategoriesPrivacy = [
    { link: "collecting", title: "Collecting" },
    { link: "using", title: "Using" },
    { link: "sharing", title: "Sharing" },
    { link: "cookies", title: "Cookies" },
    { link: "logins", title: "Social Logins" },
    { link: "third-party", title: "Third-Party Websites" },
    { link: "storing", title: "Storing" },
    { link: "safety", title: "Safety" },
    { link: "rights", title: "Privacy Rights" },
    { link: "do-not-track", title: "Do-Not-Track" },
    { link: "california", title: "California" },
    { link: "updates", title: "Updates" },
    { link: "contact", title: "Contact" },
    { link: "management", title: "Data Management" }
  ]

  const CategoriesTerms = [
    { link: "agreement", title: "Agreement" },
    { link: "property", title: "Intellectual Property" },
    { link: "representation", title: "User Representation" },
    { link: "registration", title: "User Registration" },
    { link: "activities", title: "Prohibited Activities" },
    { link: "contributions", title: "Contributions" },
    { link: "license", title: "License" },
    { link: "reviews", title: "Reviews" },
    { link: "media", title: "Social Media" },
    { link: "submissions", title: "Submissions" },
    { link: "content", title: "Content" },
    { link: "advertisers", title: "Advertisers" },
    { link: "management", title: "Management" },
    { link: "privacy", title: "Privacy" },
    { link: "copyright", title: "Copyright Infringements" },
    { link: "termination", title: "Termination" },
    { link: "modifications", title: "Modifications" },
    { link: "law", title: "Governing Law" },
    { link: "dispute", title: "Dispute Resolution" },
    { link: "corrections", title: "Corrections" },
    { link: "disclaimer", title: "Disclaimer" },
    { link: "liability", title: "Liability" },
    { link: "indemnification", title: "Indemnification" },
    { link: "user", title: "User Data" },
    { link: "electronic", title: "Electronic Actions" },
    { link: "california", title: "California" },
    { link: "miscellaneous", title: "Miscellaneous" },
    { link: "contact", title: "Contact" }
  ]

  return (
    <>
      <NavPolicies />
      <div className="w-full">
        <div className="pag flex w-full justify-center">
          <div className="w-full max-w-screen-xl">
            <div className="relative flex w-full items-start lg:space-x-[60px]">
              {
                {
                  [PoliciesType.Cookies]: (
                    <>
                      <PolicyCategories categories={CategoriesCookies} handler={setSection} section={section} />
                      <PolicyCookies />
                    </>
                  ),
                  [PoliciesType.Disclaimer]: (
                    <>
                      <PolicyCategories categories={CategoriesDisclaimer} handler={setSection} section={section} />
                      <PolicyDisclaimer />
                    </>
                  ),
                  [PoliciesType.Privacy]: (
                    <>
                      <PolicyCategories categories={CategoriesPrivacy} handler={setSection} section={section} />
                      <PolicyPrivacy handler={setSection} />
                    </>
                  ),
                  [PoliciesType.Terms]: (
                    <>
                      <PolicyCategories categories={CategoriesTerms} handler={setSection} section={section} />
                      <PolicyTerms />
                    </>
                  )
                }[type]
              }
            </div>
          </div>
        </div>
      </div>
      <CookieBar />
    </>
  )
}

export default Policies
