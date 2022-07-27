import { openLink } from "api/integration/functions"
import { SOCIALS } from "libs/constants"
import React from "react"
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const OverlaySocials = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-20">
        <button
          className="group flex h-40 w-40 items-center justify-center rounded-4 hover:bg-white-40"
          onClick={(e) => openLink(e, SOCIALS.TWITTER)}
        >
          <FaTwitter className="text-24 text-white" />
        </button>
        <button
          className="group flex h-40 w-40 items-center justify-center rounded-4 hover:bg-white-40"
          onClick={(e) => openLink(e, SOCIALS.INSTAGRAM)}
        >
          <FaInstagram className="text-24 text-white" />
        </button>
        <button
          className="group flex h-40 w-40 items-center justify-center rounded-4 hover:bg-white-40"
          onClick={(e) => openLink(e, SOCIALS.DISCORD)}
        >
          <FaDiscord className="text-24 text-white" />
        </button>
        <button
          className="group flex h-40 w-40 items-center justify-center rounded-4 hover:bg-white-40"
          onClick={(e) => openLink(e, SOCIALS.LINKEDIN)}
        >
          <FaLinkedin className="text-24 text-white" />
        </button>
      </div>
    </>
  )
}

export default OverlaySocials
