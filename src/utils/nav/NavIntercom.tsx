import React, { useState } from "react"
import { useIntercom } from "react-use-intercom"

const NavIntercom = ({ color }: { color?: string }) => {
  const { boot } = useIntercom()

  const [text] = useState(color ? `text-${color}` : "text-purple")

  return (
    <button className={`flex text-14 font-bold ${text}`} onClick={() => boot()}>
      Need help? <span className={`ml-4 hidden text-14 font-bold text-purple sm:flex ${text}`}>Message us</span>
    </button>
  )
}

export default NavIntercom
