import { SetupCreatorInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FiCheck } from "react-icons/fi"
import Verified from "utils/icons/Verified"

const SetupCreators = ({
  creators,
  content,
  handler
}: {
  creators: SetupCreatorInterface[]
  content: boolean[]
  handler: any
}) => {
  const [active, setActive] = useState(content)

  const handleActive = (index: number) => {
    setActive((prevState) => prevState.map((item, key) => (key === index ? !item : item)))
  }

  useEffect(() => {
    handler(active)
  }, [active])

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="grid w-[500px] grid-cols-2 gap-10">
          {creators.map((creator: SetupCreatorInterface, key: number) => (
            <button
              key={key}
              className={`group grid grid-cols-[42px,1fr,16px] items-center gap-12 rounded-4 border-1 px-20 py-14 ${
                active[key] ? "border-white bg-white" : "border-white-10"
              }`}
              onClick={() => handleActive(key)}
            >
              <div className={`h-42 w-42 overflow-hidden rounded-full ${active[key] ? "bg-grey-20" : "bg-white-10"}`}>
                <img alt="" src={creator.avatar} />
              </div>
              <div className="flex max-w-[121px] items-center space-x-[4px]">
                <div
                  className={`max-w-[calc(100%-20px)] overflow-hidden truncate overflow-ellipsis text-14 font-bold ${
                    active[key] ? "text-black" : "text-white"
                  }`}
                >
                  {creator.name}
                </div>
                {creator.verified ? <Verified size={16} /> : ""}
              </div>
              <div className="w-16">{active[key] ? <FiCheck className="text-16 text-purple" /> : ""}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default SetupCreators
