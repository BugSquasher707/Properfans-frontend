import { openLink } from "api/integration/functions"
import { SOCIALS } from "libs/constants"
import React from "react"
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa"

const FooterSocials = () => {
  return (
    <>
      <div className="sm:auto flex justify-center space-x-[20px]">
        <button className="center" onClick={(e) => openLink(e, SOCIALS.TWITTER)}>
          <FaTwitter className="text-black" />
        </button>
        <button className="center" onClick={(e) => openLink(e, SOCIALS.INSTAGRAM)}>
          <FaInstagram className="text-black" />
        </button>
        <button className="center" onClick={(e) => openLink(e, SOCIALS.DISCORD)}>
          <FaDiscord className="text-black" />
        </button>
      </div>
    </>
  )
}

export default FooterSocials
