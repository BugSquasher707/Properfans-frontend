import { createCtx } from "contexts/Context"
import React, { createContext, useState } from "react"

type ChatContentContextType = {
  height: number
  loading: boolean
  page: number
  scrolling: boolean
  unread: number
  setHeight: any
  setLoading: any
  setPage: any
  setScrolling: any
  setUnread: any
}

export const [useChatContent, CtxProvider] = createCtx<ChatContentContextType>()

export const ChatContentContext = createContext<ChatContentContextType | undefined>(undefined)

export const ChatContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [height, setHeight] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [scrolling, setScrolling] = useState(false)
  const [unread, setUnread] = useState(0)

  return (
    <>
      <CtxProvider
        value={{
          height,
          loading,
          page,
          scrolling,
          unread,
          setHeight,
          setLoading,
          setPage,
          setScrolling,
          setUnread
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default ChatContentProvider
