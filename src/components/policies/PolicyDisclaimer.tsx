import PolicyDownload from "components/policies/PolicyDownload"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"

const PolicyDisclaimer = () => {
  return (
    <>
      <div className="w-full">
        <PolicyDownload
          data={{
            link: "/documents/ProperfansDisclaimer.pdf",
            title: "Disclaimer"
          }}
        />
        <div className="mb-16 w-full text-14 font-bold text-black" id="website">
          1. WEBSITE DISCLAIMER
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          The information provided by Ellingsen Group AS (“we,” “us” or “our”) on{" "}
          <Link className="font-bold text-purple" to={URL.HOME}>
            https://properfans.com
          </Link>{" "}
          (the “Site”) is for general informational purposes only. All information on the Site is provided in good
          faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy,
          adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO
          CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE
          USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON
          ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black" id="links">
          2. EXTERNAL LINKS DISCLAIMER
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or
          originating from third parties or links to websites and features in banners or other advertising. Such
          external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
          availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE
          ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY
          WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
          RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black" id="affiliates">
          3. AFFILIATES DISCLAIMER
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases
          made by you on the affiliate website using such links. Our affiliates include the following:
        </div>
        <div className="w-full text-14 text-grey-40">
          <ul className=" list-inside list-disc">
            <li>OGAds</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PolicyDisclaimer
