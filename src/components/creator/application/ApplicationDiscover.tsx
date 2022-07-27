import { toastError } from "api/integration/toaster"
import { ApplicationTabType } from "libs/enums"
import { BooleanInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdCameraEnhance } from "react-icons/md"
import ButtonGrey from "utils/buttons/colors/ButtonGrey"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import TextArea from "utils/inputs/TextArea"
import CheckListOpen from "utils/lists/CheckListOpen"

const ApplicationDiscover = ({ handler, value, setter }: { handler: any; value: string; setter: any }) => {
  const [discover, setDiscover] = useState<BooleanInterface[]>([
    {
      title: "Social media",
      text: "(Twitter, Instagram, etc.)",
      active: false
    },
    { title: "Television ad", text: "", active: false },
    { title: "From friends, colleagues, etc.", text: "", active: false },
    { title: "Other", text: "(250 characters left)", active: false }
  ])

  const [active, setActive] = useState(-1)
  const [answer, setAnswer] = useState("")

  const handleActive = (id: number) => {
    setActive(id)
  }

  const parseAnswer = (text: string) => {
    setAnswer(text.slice(0, 250))
  }

  useEffect(() => {
    const items = [...discover]
    const item = { ...items[3] }

    item.text = `(${250 - answer.length} characters left)`
    items[3] = item

    setDiscover(items)

    if (active === 3 && answer) {
      setter(answer)
    }
  }, [answer])

  useEffect(() => {
    if (active > -1 && active <= 3) {
      setter(discover[active].title)
    }
  }, [active])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    if (value) {
      setOptions()
    }
  }

  const setOptions = () => {
    const newActive = discover.map((item: BooleanInterface) => item.title).indexOf(value)

    if (newActive > -1) {
      setActive(newActive)
    } else {
      setActive(discover.length - 1)
      setAnswer(value)
    }
  }

  const nextTab = () => {
    if (value) {
      handler(ApplicationTabType.Usage)
    } else {
      toastError("Choose an option to continue")
    }
  }

  return (
    <>
      <div className="align-start flex w-520 max-w-full flex-wrap">
        <div className="center mb-20 h-40 w-full md:mb-30">
          <MdCameraEnhance className="text-48 text-purple" />
        </div>
        <div className="mb-12 w-full text-center text-24 font-bold text-black">How did your hear about Properfans</div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
          Let us know how you discovered Properfans in a small survey
        </div>
        <div className="mb-20 w-full rounded-4 border-1 border-grey-12 p-20 shadow-sm">
          <div className="mb-16 w-full text-16 font-bold text-black">Survey</div>
          <div className="mb-20 w-full text-12 text-grey-40">*It&apos;s possible to select only one option</div>
          <CheckListOpen active={active} data={discover} handler={handleActive} />
        </div>
        {active === 3 ? (
          <div className="mb-20 w-full md:mb-40">
            <TextArea data={{ title: "Your answer…" }} handler={parseAnswer} value={answer} />
          </div>
        ) : (
          ""
        )}
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
          <ButtonGrey action={() => handler(ApplicationTabType.Start)} title={"Previous Step"} full />
          <ButtonPurple action={nextTab} title={"Next Step"} full />
        </div>
      </div>
    </>
  )
}

export default ApplicationDiscover
