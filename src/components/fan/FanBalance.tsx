import { statusApi } from "api/endpoints/status"
import { useProps } from "contexts/PropsContext"
import { DATE, URL } from "libs/constants"
import { NumberInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import ButtonGreyDimm from "utils/buttons/grey/ButtonGreyDimm"
import TransactionList from "utils/lists/TransactionList"

const FanBalance = () => {
  const { token } = useProps()

  const history = useHistory()

  const [orders, setOrders] = useState<NumberInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result && mounted) {
      setOrders(
        result.map((entry: any) => ({
          title: onType(entry.type),
          text: moment(entry.created).format(DATE.SHORT),
          number: entry.coins
        }))
      )
    }
  }

  const onType = (type: string) => {
    switch (type) {
      case "propercoins":
        return "Purchased"
      case "free":
        return "Earned"
      default:
        return "Purchased"
    }
  }

  return (
    <>
      <div className="stick w-full">
        <div className="mb-20 w-full select-none text-14 font-bold text-grey-40">Balance History</div>
        <div className="w-full">
          {orders && orders.length > 0 ? (
            <>
              <div className="mb-20 w-full">
                <TransactionList data={orders} open={false} />
              </div>
              <div onClick={() => history.push(URL.ACCOUNT.BILLING)}>
                <ButtonGreyDimm title={"Show older transactions"} />
              </div>
            </>
          ) : (
            <div className="text-14 text-grey-40">No balance history found</div>
          )}
        </div>
      </div>
    </>
  )
}

export default FanBalance
