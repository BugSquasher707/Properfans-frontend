import React from "react"

const InputFieldCreatorPrice = ({ title, value, handler }: { title: string; value: number; handler: any }) => {
  return (
    <>
      <div className="min-h-44 relative grid w-full grid-cols-[auto,1fr] items-center justify-start gap-10 rounded-4 border-1 border-grey-10 bg-grey-1 px-16 py-10 sm:grid-cols-[auto,1fr,auto] sm:py-0">
        <div className="text-12 text-grey-40">$ USD</div>
        <input
          className="placeholder-grey-40::placeholder h-auto w-full pr-16 text-14 font-bold text-black sm:h-42"
          placeholder={title}
          value={value ? value : ""}
          onChange={(e) => handler(e.target.value)}
        />
        <div className="hidden text-12 font-bold text-grey-40 sm:flex">(inc. VAT)</div>
      </div>
    </>
  )
}

export default InputFieldCreatorPrice
