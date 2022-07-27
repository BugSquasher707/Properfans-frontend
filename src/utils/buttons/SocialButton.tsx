import { openUrl } from "api/integration/functions"
import { SignupInterface } from "libs/interfaces"
import React from "react"

const SocialButton = ({ data }: { data: SignupInterface }) => {
  return (
    <button
      className="center h-42 w-42 rounded-full border-1 border-white-20 transition duration-300 hover:bg-white-10 lg:border-grey-12 lg:hover:bg-grey-10"
      onClick={(e) => openUrl(e, data.link)}
    >
      {data.icon}
    </button>
  )
}

export default SocialButton
