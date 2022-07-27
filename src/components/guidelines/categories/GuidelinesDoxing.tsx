import GuidelinesRequest from "components/guidelines/elements/GuidelinesRequest"
import GuidelinesText from "components/guidelines/elements/GuidelinesText"
import GuidelinesWarning from "components/guidelines/elements/GuidelinesWarning"
import React from "react"

const GuidelinesDoxing = () => {
  return (
    <>
      <GuidelinesText
        text={
          <>
            We take a strong and clear stance on Doxing. Doxing is the act of sharing the private information of others
            or aggregating their public information, usually out of malicious intent. The private information of our
            users is very important to us, and we are firmly committed to keeping our user&apos;s private information
            confidential. We will always fight to uphold our users right to remain anonymous.
          </>
        }
      />
      <GuidelinesWarning
        text={
          <>
            In all cases, we evaluate the context in which user information is shared. If it is shared for malicious
            purposes, we are likely to consider it doxing and temporarily or permanently suspend the users accountable.
          </>
        }
      />
      <GuidelinesText
        text={
          <>
            We take the doxing cases seriously because we see it as a weapon to suppress the speech of others and to
            intimidate others through harassment. Doxing usually takes place in discussions between people with opposing
            viewpoints. Doxing can also cause extensive emotional trauma and put the personal safety of the victim at
            risk. Doxing is a serious threat to freedom of speech, and we must ensure that it is not conducted on the
            platform.
            <br />
            <br />
            Any content or messages on the platform, including other users&apos; private information will be evaluated
            when reported. Such private information includes, but is not limited to; real names, phone numbers, private
            email addresses, and private social media accounts.
          </>
        }
      />
      <GuidelinesRequest />
    </>
  )
}

export default GuidelinesDoxing
