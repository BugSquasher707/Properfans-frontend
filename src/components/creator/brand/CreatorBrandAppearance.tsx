import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useState } from "react"
import { FiCheck } from "react-icons/fi"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Verified from "utils/icons/Verified"
import InputFieldCreator from "utils/inputs/InputFieldCreator"
import InputFieldTag from "utils/inputs/InputFieldTag"
import TextAreaCreator from "utils/inputs/TextAreaCreator"

const CreatorBrandAppearance = ({
  name,
  tag,
  biography,
  availableTag,
  handlers,
  user
}: {
  name: string
  tag: string
  biography: string
  availableTag: boolean
  handlers: any
  user: boolean
}) => {
  const [count, setCount] = useState(0)
  const [max] = useState(280)

  useEffect(() => {
    setCount(biography ? biography.length : 0)
  }, [biography])

  return (
    <>
      <div className="mb-10 w-full text-12 font-bold text-grey-40">{user ? "Username" : "Club name"}</div>
      <div className="mb-10 w-full">
        <InputFieldCreator handler={handlers.setName} title={"Enter name"} value={name} />
      </div>
      <Wrapper open={!user}>
        <div className="mb-20 flex w-full items-center justify-start space-x-[4px] text-14 text-grey-40">
          <span className="text-14 text-grey-40">Clubs are</span>{" "}
          <span className="flex items-center space-x-[4px] text-14 font-bold text-purple">
            <Verified size={16} /> <span className="text-14 text-purple">verified</span>
          </span>{" "}
          <span className="text-14 text-grey-40">by default</span>
        </div>
      </Wrapper>
      <div className="mb-10 w-full text-12 font-bold text-grey-40">Handle</div>
      <div className="mb-10 w-full">
        <InputFieldTag handler={handlers.setTag} user={user} value={tag} />
      </div>
      <div className={`mb-20 w-full text-14 ${availableTag ? "text-purple" : "text-red"}`}>
        {availableTag ? "The selected handle is available" : "The selected handle isn't available anymore"}
      </div>
      <div className="mb-10 w-full text-12 font-bold text-grey-40">Biography</div>
      <div className="mb-10 w-full">
        <TextAreaCreator handler={handlers.setBiography} max={max} title={"Enter biography"} value={biography} />
      </div>
      <div className="mb-20 w-full">
        <div className={`text-12 font-bold ${count > max ? "text-red" : "text-grey-40"}`}>
          {count} / {max}
        </div>
      </div>
      <div className="flex w-full">
        <ButtonPurple action={handlers.onSubmit} icon={<FiCheck className="text-16 text-white" />} title={"Save"} />
      </div>
    </>
  )
}

export default CreatorBrandAppearance
