import React, { useState } from "react"

const SliderPercentage = ({ value, handler }: { value: number; handler: any }) => {
  const [steps] = useState(10)

  return (
    <div className="relative h-4 w-full px-10">
      <div className="absolute top-0 left-0 z-10 h-4 w-20 rounded-4 bg-purple"></div>
      <input
        className="slider absolute top-0 left-0 w-full"
        max={steps}
        min="0"
        type="range"
        value={(value / 100) * steps}
        onChange={(e) => handler((parseInt(e.target.value) * 100) / steps)}
      />
      <div className="relative h-4 w-full">
        <div className="absolute top-0 left-0 z-10 h-4 rounded-4 bg-purple" style={{ width: `${value}%` }}>
          <div className={`absolute top-20 -right-40 w-80 text-center text-12 font-bold text-black`}>{value}%</div>
        </div>
      </div>
    </div>
  )
}

export default SliderPercentage
