import React, { useState } from "react"
import EarningsList from "utils/lists/EarningsList"

const LiveEarnings = () => {
  const [type, setType] = useState(true)

  const Earnings = [
    {
      icon: "",
      name: "Maestro",
      text: "got donated",
      number: 5.99,
      options: [{ title: "Option1" }, { title: "Option2" }, { title: "Option3" }]
    },
    {
      icon: "",
      name: "Maestro",
      text: "got donated",
      number: 5.99,
      options: [{ title: "Option1" }, { title: "Option2" }, { title: "Option3" }]
    }
  ]

  return (
    <>
      <div className="grid w-full grid-cols-[80px,1fr] gap-20">
        <div className="center w-80 flex-wrap gap-6">
          <div className="grid w-full grid-cols-1 gap-6">
            <button
              className={`h-24 w-full rounded-4 text-12 font-bold ${
                type ? "bg-grey-6 text-black" : "bg white text-grey-40"
              }`}
              onClick={() => setType(true)}
            >
              Everyone
            </button>
            <button
              className={`h-24 w-full rounded-4 text-12 font-bold ${
                !type ? "bg-grey-6 text-black" : "bg white text-grey-40"
              }`}
              onClick={() => setType(false)}
            >
              You
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-scroll">
          <EarningsList data={Earnings} />
        </div>
      </div>
    </>
  )
}

export default LiveEarnings
