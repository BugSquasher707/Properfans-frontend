import { ReactComponent as StarBadge } from "assets/img/star_badge.svg"
import CreatorStatisticsGrowth from "components/creator/statistics/elements/CreatorStatisticsGrowth"
import { CreatorStatisticsOrderInterface } from "libs/interfaces"
import React from "react"
import { FaPhoneAlt, FaYoutube } from "react-icons/fa"

const MOCK_TIERS: CreatorStatisticsOrderInterface[] = [
  {
    name: "Calls",
    difference: 0,
    orders: 100,
    icon: <FaPhoneAlt />
  },
  {
    name: "Video Greetings",
    difference: 12,
    orders: 144,
    icon: <FaYoutube />
  }
]

const StatisticsOrdersOverview = ({
  orders = MOCK_TIERS,
  productName
}: {
  orders?: CreatorStatisticsOrderInterface[]
  productName: string
}) => {
  return (
    <div className="-mt-2">
      {orders.map((order) => (
        <div key={order.name} className="relative flex items-center border-b-1 border-grey-6 py-16">
          <div className="relative mr-12 h-26 w-26">
            <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
              <StarBadge />
            </div>
            <div className="relative z-10 flex h-26 w-full items-center justify-center text-10 text-white">
              {order.icon}
            </div>
          </div>
          <div className="mr-20 font-bold">
            <div className="mb-2 truncate overflow-ellipsis text-14 leading-4 text-black">{order.name}</div>
            <div className="text-12 leading-normal text-grey-40">{productName}</div>
          </div>
          <CreatorStatisticsGrowth growth={order.difference} />
          <div className="ml-auto text-12 font-bold leading-normal text-grey-40">{order.orders} orders</div>
        </div>
      ))}
    </div>
  )
}

export default StatisticsOrdersOverview
