import { parseDate } from "api/integration/functions"
import ChatNew from "components/chat/elements/ChatNew"
import ChatPinned from "components/chat/elements/ChatPinned"
import ChatStart from "components/chat/elements/ChatStart"
import Message from "components/chat/messages/Message"
import MessageSystem from "components/chat/messages/MessageSystem"
import OverlayLoading from "components/overlays/OverlayLoading"
import Wrapper from "components/wrappers/Wrapper"
import WrapperPagination from "components/wrappers/WrapperPagination"
import { useChatContent } from "contexts/ChatContentContext"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import { DATE } from "libs/constants"
import { MessageBundleInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

const ChatContent = ({
  done,
  loaded,
  messages,
  count,
  handlerPage
}: {
  done: boolean
  loaded: boolean
  messages: MessageBundleInterface[]
  count: number
  handlerPage: any
}) => {
  const { chatId } = useChat()
  const { height, loading, page, scrolling, setHeight, setLoading, setPage } = useChatContent()
  const { user } = useProps()

  const content = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const ChatBottom = useRef<HTMLInputElement>(null)

  const [pinnedMessage] = useState("")
  const [unRead, setUnRead] = useState(0)

  const [refBottom, inViewBottom] = useInView({
    threshold: 0
  })

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [messages])

  useEffect(() => {
    if (done) {
      setLoading(false)
    }
  }, [done])

  const onLoad = () => {
    if (!mounted) {
      return
    }

    const pageCount = Math.ceil(count / 100)

    if (loading) {
      setTimeout(() => {
        if (pageCount === 1) {
          scrollToBottom()
          setLoading(false)
          setPage(pageCount)
          setUnRead(0)
        } else {
          scrollToHeight()
        }
      }, 600)
    } else if (scrolling) {
      scrollToBottom()
    }
  }

  const scrollToHeight = () => {
    if (loading && inner.current && wrapper.current) {
      wrapper.current.scrollTop = inner.current.clientHeight - height

      setHeight(inner.current ? inner.current.clientHeight : 0)
      setLoading(false)
      setPage(page + 1)
    }
  }

  const scrollToBottom = () => {
    if (ChatBottom.current) {
      ChatBottom.current.scrollIntoView({ behavior: "smooth" })

      setHeight(inner.current ? inner.current.clientHeight : 0)
    }
  }

  const onPinned = () => {
    console.log(pinnedMessage)
  }

  return (
    <>
      {pinnedMessage ? <ChatPinned handler={() => onPinned()} message={pinnedMessage} /> : ""}
      <div className="relative w-full">
        <div ref={wrapper} className="main-chat lg:scroll relative w-full flex-1 overflow-y-auto rounded-4">
          <div ref={inner} className="relative min-h-full w-full lg:px-12">
            <div ref={content} className="grid w-full grid-cols-1 gap-10">
              <WrapperPagination
                closed={count % 100 !== 0}
                count={count}
                done={done}
                handlerPage={handlerPage}
                id={chatId}
                items={"messages"}
                loaded={loaded}
                top
              >
                {messages && messages.length > 0 ? (
                  <>
                    {messages.map((message: MessageBundleInterface, key: number) => (
                      <div key={key} className="grid w-full grid-cols-1 gap-10">
                        {message.day ? (
                          <MessageSystem
                            message={
                              <>
                                {parseDate(message.created / 1000)} at{" "}
                                {moment(message.messages[0].created).format(DATE.TIME)}
                              </>
                            }
                          />
                        ) : (
                          ""
                        )}
                        <Message incoming={message.userid !== user.id} message={message} />
                      </div>
                    ))}
                    <div ref={ChatBottom} className="absolute left-0 bottom-[300px] h-1 w-1">
                      <div ref={refBottom}></div>
                    </div>
                  </>
                ) : (
                  <ChatStart />
                )}
              </WrapperPagination>
            </div>
          </div>
        </div>
        <Wrapper open={loading}>
          <OverlayLoading />
        </Wrapper>
      </div>
      <Wrapper
        open={
          !inViewBottom && inner.current && wrapper.current && inner.current.clientHeight > wrapper.current.clientHeight
        }
      >
        <ChatNew count={unRead} handler={scrollToBottom} />
      </Wrapper>
    </>
  )
}

export default ChatContent
