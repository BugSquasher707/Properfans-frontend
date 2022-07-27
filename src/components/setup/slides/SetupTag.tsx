import React from "react"
import InputFieldModernCheck from "utils/inputs/InputFieldModernCheck"

const SetupTag = ({ tag, available, handler }: { tag: string; available?: boolean; handler: any }) => {
  const changeTag = (value: any) => {
    handler.setTag(value.replace(" ", "").toLowerCase())
  }

  const stepUp = (key: string) => {
    if (key === "Enter") {
      handler.stepUp()
    }
  }

  return (
    <>
      <InputFieldModernCheck
        enter={stepUp}
        handler={changeTag}
        message={available !== undefined ? (available ? "Handle is available" : "Handle is not available") : ""}
        placeholder={"Handle"}
        pre="properfans.com/u/"
        success={available}
        value={tag}
      />
    </>
  )
}

export default SetupTag
