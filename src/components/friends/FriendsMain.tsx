import { parseError } from "api/integration/errors"
import axios from "axios"
import ChatTabFriends from "components/chat/modals/ChatTabFriends"
import { useProps } from "contexts/PropsContext"
import { REQ } from "libs/constants"
import { FriendTabType, FriendCallType, FriendType, OverlayType } from "libs/enums"
import { TabInterface, FriendInterface, FriendCallInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import TabsRound from "utils/tabs/TabsRound"

const FriendsMain = ({ tab }: { tab: FriendTabType }) => {
  const { token, setOverlay, user } = useProps()
  const [type, setType] = useState(tab)

  const [tabs] = useState<TabInterface[]>([
    { type: FriendTabType.All, title: <>All</>, action: setType },
    { type: FriendTabType.Blocked, title: <>Blocked</>, action: setType }
  ])

  const [friends, setFriends] = useState<FriendInterface[]>([])
  const [blocked, setBlocked] = useState<FriendInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    setType(tab)
    onSubmit()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    setFriends([])
    setBlocked([])

    onSubmit()
  }, [type])

  const onSubmit = () => {
    const calls = onCallUrl()

    calls.forEach((call: FriendCallInterface) => onCall(call))
  }

  const onCall = (call: FriendCallInterface) => {
    axios({
      url: call.url,
      method: "get",
      data: {},
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res: any) => res.data)
      .then((res) => {
        if (mounted) {
          onSetRes(res, call)
        }
      })
      .catch((error) => {
        parseError(error)
      })
  }

  const onSetRes = (res: any, call: FriendCallInterface) => {
    switch (call.type) {
      case FriendCallType.Blocked:
        setBlocked(res.data.blockUser)
        break
      case FriendCallType.Friends:
        setFriends(res.data)
        break
    }
  }

  const onCallUrl = () => {
    switch (type) {
      case FriendTabType.All:
        return [{ url: `${REQ.FRIEND_REQUEST.MY_FRIENDS}/${user.id}`, type: FriendCallType.Friends }]
      case FriendTabType.Blocked:
        return [{ url: `${REQ.FRIEND_REQUEST.BLOCKED_USERS}/${user.id}`, type: FriendCallType.Blocked }]
      default:
        return []
    }
  }

  const onDataType = (newType: FriendCallType) => {
    let result

    switch (newType) {
      case FriendCallType.Friends:
        result = friends
        break
      case FriendCallType.Blocked:
        result = blocked
        break
    }

    return result
  }

  const onSetType = (newType: FriendCallType, data: any) => {
    switch (newType) {
      case FriendCallType.Friends:
        setFriends(data)
        break
      case FriendCallType.Blocked:
        setBlocked(data)
        break
    }
  }

  const onAction = (key: number, newType: FriendType, newCallType: FriendCallType) => {
    const data = onDataType(newCallType)

    const newEntries = [...data]
    const newEntry = { ...newEntries[key] }

    newEntry.type = newType
    newEntries[key] = newEntry

    onSetType(newCallType, newEntries)
  }

  return (
    <>
      <div className="mb-20 flex w-full items-center justify-between space-y-[12px] md:space-y-[0px] md:space-x-[12px]">
        <div className="flex w-full sm:w-auto">
          <TabsRound tabs={tabs} type={type} />
        </div>
        <div className="hidden lg:flex">
          <ButtonPurple action={() => setOverlay(OverlayType.Search)} title={"Search users"} small />
        </div>
      </div>
      <div className="scroller h-[calc(100%-56px)] w-full overflow-scroll pr-12">
        {
          {
            [FriendTabType.All]: <ChatTabFriends handlerAction={onAction} users={friends} all />,
            [FriendTabType.Blocked]: <ChatTabFriends all={false} handlerAction={onAction} users={blocked} />
          }[type]
        }
      </div>
    </>
  )
}

export default FriendsMain
