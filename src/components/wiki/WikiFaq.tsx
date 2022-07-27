import WikiFaqQuestion from "components/wiki/WikiFaqQuestion"
import { URL } from "libs/constants"
import { DropdownFaqInterface } from "libs/interfaces"
import React, { useState } from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const WikiFaq = () => {
  const [questions] = useState<DropdownFaqInterface[]>([
    {
      title: "What are Propercoins?",
      content:
        "Propercoins is the currency that grants you access to exclusive opportunities throughout the proper-universe!"
    }
  ])

  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-60">
        <div className="grid w-full gap-20">
          <div className="w-full text-center text-14 font-bold text-grey-40">Propercoins</div>
          <div className="w-full text-center text-32 font-black text-black">Propercoins FAQ</div>
        </div>
        <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2">
          {questions.map((item, key: number) => (
            <WikiFaqQuestion key={key} data={item} />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <ButtonPurple action={URL.WIKI.BASE} title={"See all articles"} />
        </div>
      </div>
    </>
  )
}

export default WikiFaq
