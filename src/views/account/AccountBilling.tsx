import { statusApi } from "api/endpoints/status"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import WrapperPagination from "components/wrappers/WrapperPagination"
import { useProps } from "contexts/PropsContext"
import { TransactionBillingInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import NumberFormat from "react-number-format"
import AccountTransaction from "views/account/AccountTransaction"

const AccountBilling = () => {
  const { token } = useProps()

  const [done, setDone] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const [visible, setVisible] = useState<TransactionBillingInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, [])

  const onPage = async (page: number) => {
    console.log(page, token)

    const result = await statusApi()

    if (result) {
      onAppend(result)
    }
  }

  const onAppend = async (res: any) => {
    setLoaded(true)

    if (res && res.length === 0) {
      setDone(true)
    } else if (mounted) {
      const newTransactions = res.map((entry: any) => ({
        ...entry,
        amount: entry.unit_amount ? entry.unit_amount / 100 : entry.amount / 100
      }))

      setVisible((old) => old.concat(newTransactions))
    }
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"Billing"} />
        <div className="hidden w-full">
          <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-20 py-30 sm:gap-30 sm:py-40">
            <div className="grid w-full grid-cols-1 gap-6">
              <div className="w-full text-right text-12 font-bold text-grey-40">Spent this month</div>
              <div className="w-full text-right text-18 font-bold text-black">
                <NumberFormat className="text-18" displayType={"text"} prefix={"$"} value={100} thousandSeparator />
              </div>
            </div>
            <div className="h-40 border-r-1 border-grey-6"></div>
            <div className="grid w-full grid-cols-1 gap-6">
              <div className="w-full text-left text-12 font-bold text-grey-40">Spent totally</div>
              <div className="w-full text-left text-18 font-bold text-black">
                <NumberFormat className="text-18" displayType={"text"} prefix={"$"} value={100} thousandSeparator />
              </div>
            </div>
          </div>
          <div className="my-20 w-full border-b-1 border-grey-6"></div>
        </div>
        <div className="mb-14 grid w-full grid-cols-[1fr,auto] items-center gap-16 px-12">
          <div className="w-full text-12 text-grey-40">Transaction</div>
          <div className="grid grid-cols-[auto,auto] items-center gap-16">
            <div className="w-[140px] text-left text-12 text-grey-40">Date</div>
            <div className="w-[60px] text-right text-12 text-grey-40">Amount</div>
          </div>
        </div>
        <div className="w-full flex-1 overflow-y-auto rounded-4">
          <div className="relative grid w-full grid-cols-1 gap-8">
            <WrapperPagination
              count={visible.length}
              done={done}
              handlerPage={onPage}
              items={"transactions"}
              loaded={loaded}
              top={false}
            >
              {visible && visible.length > 0 ? (
                <>
                  {visible.map((transaction: TransactionBillingInterface, key: number) => (
                    <AccountTransaction key={key} transaction={transaction} />
                  ))}
                </>
              ) : (
                <div className="flex h-[200px] w-full items-center justify-center rounded-4 bg-grey-3 text-14 font-semibold text-grey-40">
                  No transactions found
                </div>
              )}
            </WrapperPagination>
          </div>
        </div>
      </CreatorSection>
    </>
  )
}

export default AccountBilling
