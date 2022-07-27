import { statusApi } from "api/endpoints/status"
import { toastSuccess } from "api/integration/toaster"
import CreatorTitle from "components/creator/CreatorTitle"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import Toggle from "utils/toggles/Toggle"

const CreatorBrandSettings = ({ id }: { id: string }) => {
  const { token } = useProps()

  const [communityChats, setCommunityChats] = useState(false)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    if (mounted) {
      onSubmit("communityChatsToggle", communityChats)
    }
  }, [communityChats])

  const onLoad = async () => {
    console.log(id, token)

    const result = await statusApi()

    if (result) {
      setCommunityChats(result.communityChatsToggle)
      setMounted(true)
    }
  }

  const onSubmit = async (key: string, value: boolean) => {
    console.log(key, value, token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Settings updated")
    }
  }

  return (
    <>
      <CreatorTitle title={"Settings"} />
      <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">Choose which features are enabled on your club</div>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-20">
        <div className="grid w-full grid-cols-1 gap-12">
          <div className="w-full text-14 font-bold text-black">Enable / disable Community Chats</div>
          <div className="w-full text-14 text-grey-40">
            Choose whether fans and subscribers can chat together in community chats
          </div>
        </div>
        <Toggle handler={setCommunityChats} value={communityChats} />
      </div>
    </>
  )
}

export default CreatorBrandSettings
