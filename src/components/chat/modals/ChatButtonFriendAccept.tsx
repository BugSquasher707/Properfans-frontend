import { statusApi } from "api/endpoints/status"
import { toastSuccess } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import React from "react"
import ButtonGreyLightSmall from "utils/buttons/grey/ButtonGreyLightSmall"

const ChatButtonFriendAccept = ({
  index,
  id,
  brand,
  handlerSent
}: {
  index: number
  id: string
  brand: boolean
  handlerSent: any
}) => {
  const { token } = useProps()

  const onSubmit = async () => {
    console.log(id, brand, token)

    const result = await statusApi()

    if (result) {
      handlerSent(index)

      toastSuccess("Friend request sent")
    }
  }

  return (
    <>
      <div className="flex w-[180px]" onClick={() => onSubmit()}>
        <ButtonGreyLightSmall title={"Add Friend"} />
      </div>
    </>
  )
}

export default ChatButtonFriendAccept
