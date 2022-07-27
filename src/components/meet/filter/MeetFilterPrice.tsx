import React, { useEffect, useRef, useState } from "react"
import NumberFormat from "react-number-format"

const MeetFilterPrice = ({
  priceFrom,
  priceTo,
  priceMax,
  handlerPriceFrom,
  handlerPriceTo
}: {
  priceFrom: number
  priceTo: number
  priceMax: number
  handlerPriceFrom: any
  handlerPriceTo: any
}) => {
  const [minVal, setMinVal] = useState(priceFrom)
  const [maxVal, setMaxVal] = useState(priceTo)

  const minValRef = useRef(priceFrom)
  const maxValRef = useRef(priceTo)
  const range = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMinVal(priceFrom)
  }, [priceFrom])

  useEffect(() => {
    setMaxVal(priceTo)
  }, [priceTo])

  useEffect(() => {
    minValRef.current = minVal

    if (minVal >= 0 && minVal < maxValRef.current) {
      updateRange(minVal, maxValRef.current)
      handlerPriceFrom(minVal)
    }
  }, [minVal])

  useEffect(() => {
    maxValRef.current = maxVal

    if (maxVal <= priceMax && minValRef.current < maxVal) {
      updateRange(minValRef.current, maxVal)
      handlerPriceTo(maxVal)
    }
  }, [maxVal])

  const updateRange = async (min: number, max: number) => {
    const left = min / priceMax
    const width = (max - min) / priceMax

    if (range.current) {
      range.current.style.left = `${left * 100}%`
      range.current.style.width = `${width * 100}%`
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-30">
        <div className="relative w-full">
          <input
            className="thumb thumb--left"
            max={priceMax ? priceMax : 0}
            min="0"
            style={{ zIndex: minVal > priceTo - 100 ? 5 : undefined }}
            type="range"
            value={priceFrom}
            onChange={(e) => setMinVal(e.target.value ? parseInt(e.target.value) : 0)}
          />
          <input
            className="thumb thumb--right"
            max={priceMax ? priceMax : 0}
            min="0"
            type="range"
            value={priceTo}
            onChange={(e) => setMaxVal(e.target.value ? parseInt(e.target.value) : priceMax)}
          />
          <div className="range">
            <div className="range__track"></div>
            <div ref={range} className="range__range"></div>
          </div>
        </div>
        <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-10">
          <div className="flex h-36 w-full items-center justify-center rounded-4 bg-grey-3 text-12 font-bold text-black">
            <NumberFormat displayType={"text"} prefix={"$"} value={priceFrom} thousandSeparator />
          </div>
          <div className="text-12 font-bold text-grey-40">To</div>
          <div className="flex h-36 w-full items-center justify-center rounded-4 bg-grey-3 text-12 font-bold text-black">
            <NumberFormat displayType={"text"} prefix={"$"} value={priceTo} thousandSeparator />
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetFilterPrice
