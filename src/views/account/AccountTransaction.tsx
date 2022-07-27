import { openLinkExtern } from "api/integration/functions"
import { DATE, URL } from "libs/constants"
import { TransactionBillingInterface } from "libs/interfaces"
import moment from "moment"
import React from "react"
import { FaShoppingBag } from "react-icons/fa"
import { MdPictureAsPdf } from "react-icons/md"
import NumberFormat from "react-number-format"
import { useHistory } from "react-router"

const AccountTransaction = ({ transaction }: { transaction: TransactionBillingInterface }) => {
  const history = useHistory()

  const onLink = () => {
    if (transaction.type === "propercoins") {
      history.push(URL.FAN.CART.ORDER.replace(":id", transaction.sessionid))
    } else {
      if (transaction.invoices && transaction.invoices.length > 0) {
        openLinkExtern(transaction.invoices[0].invoice_pdf)
      }
    }
  }

  return (
    <>
      <button
        className="grid w-full grid-cols-[1fr,auto] items-center gap-16 rounded-4 p-12 hover:bg-grey-3"
        onClick={() => onLink()}
      >
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-16">
          <div className="flex h-40 w-40 items-center justify-center rounded-4 bg-purple-10">
            <FaShoppingBag className="text-20 text-purple" />
          </div>
          <div className="flex w-full items-center">
            <div className="grid w-full grid-cols-1 gap-2">
              <div className="w-full text-left text-14 font-bold capitalize text-black">
                {transaction.type} purchase
              </div>
              <div className="grid w-full grid-cols-[auto,1fr] items-center gap-6">
                <MdPictureAsPdf className="text-grey-20" />
                <div className="w-full text-left text-12 text-grey-40">download invoice</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[auto,auto] items-center gap-16">
          <div className="w-[140px] text-left text-14 text-grey-40">
            {moment(transaction.created).format(DATE.DATETIME)}
          </div>
          <div className="w-[60px] text-right text-14 font-bold text-black">
            <NumberFormat
              className="text-14 font-bold text-black"
              displayType={"text"}
              prefix={"$"}
              value={Math.round(transaction.amount * 100) / 100}
              thousandSeparator
            />
          </div>
        </div>
      </button>
    </>
  )
}

export default AccountTransaction
