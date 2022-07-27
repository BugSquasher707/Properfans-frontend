import { useProps } from "contexts/PropsContext"
import React from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import { useHistory } from "react-router"

const BackLogout = () => {
  const { onReset } = useProps()

  const history = useHistory()

  return (
    <button
      className="center text-14 text-white-40 hover:text-white"
      onClick={() => {
        onReset()
        history.push("/")
      }}
    >
      <AiOutlineCaretLeft className="mr-8" /> Sign out
    </button>
  )
}

export default BackLogout
