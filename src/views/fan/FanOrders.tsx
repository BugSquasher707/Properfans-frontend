import { statusApi } from "api/endpoints/status"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FanOrders = () => {
  const { token } = useProps()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setOrders(result)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        <div className="w-full text-16 font-bold text-black">Orders</div>
        <div className="grid w-full grid-cols-1 gap-10">
          {orders.map((order: any, key: number) => (
            <Link
              key={key}
              className="w-full text-14 font-bold text-grey-40"
              to={URL.FAN.CART.ORDER.replace(":id", order.id)}
            >
              {order.id}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default FanOrders
