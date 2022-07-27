import React, { useEffect, useState } from "react"
import { MdStar } from "react-icons/md"

const MeetStats = () => {
  const [deliveryTime, setDeliveryTime] = useState("")
  const [orders, setOrders] = useState(0)
  const [reviews, setReviews] = useState(0)
  const [stars, setStars] = useState(0)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    setDeliveryTime("48 hours")
    setOrders(241)
    setReviews(149)
    setStars(4.8)
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="grid w-full grid-cols-1 items-center justify-center gap-14 rounded-4 border-1 border-grey-6 px-16 py-14 xs:grid-cols-3 sm:w-auto sm:grid-cols-[1fr,auto,1fr,auto,1fr] sm:gap-30 sm:rounded-full sm:px-24 md:px-50">
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="w-full text-center text-14 font-bold text-black">{deliveryTime}</div>
            <div className="w-full text-center text-12 text-grey-40">Delivery Time</div>
          </div>
          <div className="hidden h-20 border-r-1 border-grey-6 sm:flex"></div>
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="w-full text-center text-14 font-bold text-black">{orders}</div>
            <div className="w-full text-center text-12 text-grey-40">Total Orders</div>
          </div>
          <div className="hidden h-20 border-r-1 border-grey-6 sm:flex"></div>
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="flex w-full items-center justify-center space-x-[6px] text-center text-14 font-bold text-black">
              <MdStar className="text-16 text-green" />
              {stars}
            </div>
            <div className="w-full text-center text-12 text-grey-40">Reviews ({reviews})</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetStats
