import React from "react"
import { IoMdSearch, IoMdCloseCircle } from "react-icons/io"

const ChatPopupTop = ({
  title,
  frequent,
  handlerFrequent,
  search,
  handlerSearch,
  handlerInput,
  handlerEnter,
  handlerClear
}: {
  title: string
  frequent: boolean
  handlerFrequent: any
  search: string
  handlerSearch: any
  handlerInput: any
  handlerEnter: any
  handlerClear: any
}) => {
  return (
    <>
      <div className="mb-10 flex w-full items-center justify-between">
        <div className="text-12 font-bold text-black">{title}</div>
        <button
          className={`text-12 hover:font-bold hover:text-purple ${frequent ? "font-bold text-purple" : "text-grey-40"}`}
          onClick={() => handlerFrequent(!frequent)}
        >
          Frequently used
        </button>
      </div>
      <div className="mb-14 grid h-32 w-full grid-cols-[auto,1fr,auto] gap-4 rounded-4 bg-grey-3 p-4">
        <button className="center group h-24 w-24 flex-none rounded-4 hover:bg-grey-3" onClick={() => handlerSearch()}>
          <IoMdSearch className="text-14 text-black opacity-20 group-hover:opacity-100" />
        </button>
        <input
          className="placeholder-grey-40::placeholder w-full text-12 font-semibold text-black"
          placeholder="Search..."
          type="text"
          value={search}
          onKeyPress={(e) => {
            handlerEnter(e)
          }}
          onChange={(e) => handlerInput(e.target.value)}
        />
        <button className="center group h-24 w-24 flex-none rounded-4 hover:bg-grey-3" onClick={() => handlerClear()}>
          <IoMdCloseCircle className="text-14 text-black opacity-20 group-hover:opacity-100" />
        </button>
      </div>
    </>
  )
}

export default ChatPopupTop
