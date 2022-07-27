import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { ProfileInterface } from "libs/interfaces"
import React from "react"
import { MdEdit } from "react-icons/md"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"

const UserProfileInfo = ({ profile }: { profile: ProfileInterface }) => {
  const { user } = useProps()

  return (
    <>
      <div className="flex w-full justify-center">
        <Wrapper open={profile.id === user.id}>
          <ButtonWhite action={() => null} icon={<MdEdit className="text-14 text-black" />} title={""} full small />
        </Wrapper>
      </div>
    </>
  )
}

export default UserProfileInfo
