import React from "react"

const InputNumberFieldCreator = ({ title, value, handler }: { title: string; value: number; handler: any }) => {
  return (
    <>
      <div className="relative grid w-full grid-cols-1 items-center rounded-4 border-1 border-grey-10 bg-grey-1 px-16">
        <input
          className="placeholder-grey-40::placeholder h-42 pr-16 text-14 font-bold text-black"
          placeholder={title}
          type={"number"}
          value={value}
          onChange={(e) => handler(e.target.value)}
        />
      </div>
    </>
  )
}

export default InputNumberFieldCreator
