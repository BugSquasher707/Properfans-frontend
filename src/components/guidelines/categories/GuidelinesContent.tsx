import GuidelinesRequest from "components/guidelines/elements/GuidelinesRequest"
import GuidelinesSubTitle from "components/guidelines/elements/GuidelinesSubTitle"
import GuidelinesText from "components/guidelines/elements/GuidelinesText"
import GuidelinesWarning from "components/guidelines/elements/GuidelinesWarning"
import React from "react"

const GuidelinesContent = () => {
  return (
    <>
      <GuidelinesText
        text={
          <>
            Properfans was founded on the belief in a proper platform. We gave it the name Proper for a reason. For
            something to be proper, it has to be genuine, clean and real. For any social media platform, content is the
            fundamental building block. The content on a platform can either improve it or worsen it. For the overall
            platform to remain proper, the content published must be subject to high standards. The lucky creators who
            have been given the opportunity to have a properfans page, must abide by these standards and our content
            guidelines. If you experience a violation of our content guidelines, we implore you to report it to our
            content moderation team. Every creator and every properfan has a universal responsibility to keep the
            platform proper and report any content that exceeds our community guidelines. Together we will make as a
            great reality, the clean platform of which creators and fans have dreamed.
          </>
        }
      />
      <GuidelinesWarning
        text={<>Violating our content guidelines will result in temporary or permanent suspensions.</>}
      />
      <GuidelinesSubTitle text={<>Pornographic content</>} />
      <GuidelinesText
        text={
          <>
            Properfans was founded on the belief in a proper platform. We gave it the name Proper for a reason. For
            something to be proper, it has to be genuine, clean and real. For any social media platform, content is the
            fundamental building block. The content on a platform can either improve it or worsen it. For the overall
            platform to remain proper, the content published must be subject to high standards. The lucky creators who
            have been given the opportunity to have a properfans page, must abide by these standards and our content
            guidelines. Violating our content guidelines will result in temporary or permanent suspensions. If you
            experience a violation of our content guidelines, we implore you to report it to our content moderation
            team. Every creator and every properfan has a universal responsibility to keep the platform proper and
            report any content that exceeds our community guidelines. Together we will make as a great reality, the
            clean platform of which creators and fans have dreamed.
          </>
        }
      />
      <GuidelinesSubTitle text={<>Gambling content</>} />
      <GuidelinesText
        text={
          <>
            We have a zero-tolerence policy that applies to all content involving real-money gambling. You may not
            livestream nor upload any content that can encourage your audience to take part in real-money gambling. This
            includes any content posted on behalf of companies in the casino and gambling industry. If you want to read
            more about our zero-tolerance policy of gambling content, you can click here.
          </>
        }
      />
      <GuidelinesSubTitle text={<>Authentic content</>} />
      <GuidelinesText
        text={
          <>
            Properfans is a platform made for the originals, for the unikums. Properfans will never be a platform for
            the unoriginals; those who steals the work of others and leverages it for personal gains. The most common
            situation is that the work of one creator is republished by another creator.
            <br />
            <br />
            We glorify the unqiue creations of our talent, and we are proud that its published on the surface of
            Properfans. We understand our responsibilities, and we will always uphold the creator&apos;s right to
            receive full credit for their unique creation.
            <br />
            <br />
            Creators cannot publish the creations or content of other creators and declare them as their own creations.
            Reposting another creator&apos;s work can result in a temporary or permanent suspension.
            <br />
            <br /> Our team will not accept creations that infringe on other&apos;s intellectual property rights. If you
            want to read more about our copyright infringement policies, you can find more information here.
          </>
        }
      />
      <GuidelinesRequest />
    </>
  )
}

export default GuidelinesContent
