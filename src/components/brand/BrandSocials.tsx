import { openLink } from "api/integration/functions"
import { BrandSocialType } from "libs/enums"
import { BrandSocialInterface } from "libs/interfaces"
import React from "react"
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"
import { SiSpotify, SiTiktok } from "react-icons/si"

const BrandSocials = ({ socials }: { socials: BrandSocialInterface[] }) => {
  return (
    <>
      <div className="flex items-center space-x-[12px]">
        {socials.map((social: BrandSocialInterface, key: number) => (
          <button key={key} className="first:text-16 first:text-black" onClick={(e) => openLink(e, social.link)}>
            {
              {
                [BrandSocialType.Instagram]: <FaInstagram />,
                [BrandSocialType.Spotify]: <SiSpotify />,
                [BrandSocialType.TikTok]: <SiTiktok />,
                [BrandSocialType.Twitch]: <FaTwitch />,
                [BrandSocialType.Twitter]: <FaTwitter />,
                [BrandSocialType.YouTube]: <FaYoutube />
              }[social.type]
            }
          </button>
        ))}
      </div>
    </>
  )
}

export default BrandSocials
