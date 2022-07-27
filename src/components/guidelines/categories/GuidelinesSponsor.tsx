import GuidelinesRequest from "components/guidelines/elements/GuidelinesRequest"
import GuidelinesSubTitle from "components/guidelines/elements/GuidelinesSubTitle"
import GuidelinesText from "components/guidelines/elements/GuidelinesText"
import GuidelinesWarning from "components/guidelines/elements/GuidelinesWarning"
import React from "react"

const GuidelinesSponsor = () => {
  return (
    <>
      <GuidelinesText
        text={
          <>
            In this article we go over our guidelines on sponsorships and partnerships between creators on our platform
            and third party brands. First and foremost, we want to make it crystal clear that properfans creators will
            have the right, and freedom, to promote the brands and products of their choice. We understand that paid
            endorsements play a vital role in the profitability of many creators and will continue to do so in the next
            few years. We will not seek to eliminate any existing sources of income and will always strive to defend the
            rights of our creators to make money from external sources.
          </>
        }
      />
      <GuidelinesWarning
        text={
          <>Violating our sponsorships and partnerships guidelines can result in temporary or permanent suspensions.</>
        }
      />
      <GuidelinesSubTitle text={<>Mark content as advertisements</>} />
      <GuidelinesText
        text={
          <>
            For us it is important that fans on the platform have a transparent experience by proper standards. Fans
            should never be misled to believe that a creator is promoting a product by their own initiative, if they are
            in fact being paid to promote the product. All creators must mark their paid content as advertisements.
          </>
        }
      />
      <GuidelinesSubTitle text={<>Mark adult-content as 18+</>} />
      <GuidelinesText
        text={
          <>
            Many young children uses Properfans to come closer to their idols. Young children are more susceptible to
            sponsored content. Therefore, creators with younger audiences should be careful when promoting products
            aimed at older audiences. Since creators cannot accurately measure the age of their audience, all fans
            should receive an &quot;18+&quot; warning on all paid content featuring adult-oriented products. All
            creators must mark such paid content as &quot;18+&quot; content. Examples of adult-oriented products are sex
            toys and medical products.
          </>
        }
      />
      <GuidelinesRequest />
    </>
  )
}

export default GuidelinesSponsor
