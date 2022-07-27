import React, { useRef, useState } from "react"
import { MdSearch } from "react-icons/md"

const InputSearch = ({
  title,
  value,
  handler,
  handlerSubmit
}: {
  title: string
  value: string
  handler: any
  handlerSubmit: any
}) => {
  const input = useRef<HTMLInputElement>(null)

  const [focus, setFocus] = useState(false)

  const onEnter = (key: string) => {
    if (key === "Enter") {
      handlerSubmit()
    }
  }

  return (
    <div
      className={`group grid h-46 w-full grid-cols-[auto,1fr] items-center gap-6 rounded-10 border-2 pl-2 pr-16 ${
        focus ? "ring-6 border-purple ring ring-purple-10" : "border-grey-6"
      }`}
    >
      <button
        className="center h-38 w-38 cursor-pointer rounded-8 text-18 text-grey-30 hover:bg-grey-6 hover:text-black"
        onClick={() => handlerSubmit()}
      >
        <MdSearch />
      </button>
      <input
        ref={input}
        className="w-full text-16 font-semibold text-black placeholder-grey-40"
        placeholder={title}
        value={value}
        onBlur={() => setFocus(false)}
        onChange={(e) => handler(e.target.value)}
        onFocus={() => setFocus(true)}
        onKeyUp={(e) => onEnter(e.key)}
      />
    </div>
  )
}

export default InputSearch
