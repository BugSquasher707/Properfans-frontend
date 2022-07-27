import { createCtx } from "contexts/Context"
import { ChatType } from "libs/enums"
import React, { createContext, useEffect, useState } from "react"

type ChatContextType = {
  chatId: string
  communityId: string
  dmId: string
  type: ChatType
  setChatId: any
  setCommunityId: any
  setDmId: any
  setType: any
}

export const [useChat, CtxProvider] = createCtx<ChatContextType>()

export const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatId, setChatId] = useState("")
  const [communityId, setCommunityId] = useState("")
  const [dmId, setDmId] = useState("")
  const [type, setType] = useState<ChatType>(ChatType.Dm)

  useEffect(() => {
    if (!chatId && (communityId || dmId)) {
      setCommunityId("")
      setDmId("")
    }
  }, [chatId])

  useEffect(() => {
    if (dmId) {
      setType(ChatType.Dm)

      setChatId(dmId)
      setCommunityId("")
    }
  }, [dmId])

  useEffect(() => {
    if (communityId) {
      setType(ChatType.Community)

      setChatId(communityId)
      setDmId("")
    }
  }, [communityId])

  return (
    <>
      <CtxProvider
        value={{
          chatId,
          communityId,
          dmId,
          type,
          setChatId,
          setCommunityId,
          setDmId,
          setType
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default ChatProvider
