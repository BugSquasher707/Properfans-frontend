import React from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import { useHistory } from "react-router-dom"

const BackReturn = () => {
  const history = useHistory()

  const onBack = () => {
    history.goBack()
  }

  return (
    <button className="center text-14 text-grey-40" onClick={() => onBack()}>
      <AiOutlineCaretLeft className="mr-8" /> Go Back
    </button>
  )
}

export default BackReturn
