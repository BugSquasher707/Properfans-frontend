import { statusApi } from "api/endpoints/status"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { PageInterface, SubscriptionInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdAdd } from "react-icons/md"
import { Link } from "react-router-dom"
import ButtonGreyDimm from "utils/buttons/grey/ButtonGreyDimm"
import PageItem from "utils/lists/PageItem"
import SubscriptionList from "utils/lists/SubscriptionList"

const FanSideSubscriptions = () => {
  const { token } = useProps()

  const [all] = useState<PageInterface>({
    title: "Subscriptions",
    icon: <MdAdd className="text-18" />,
    link: URL.ACCOUNT.SUBSCRIPTIONS
  })

  const [subscriptions, setSubscriptions] = useState<SubscriptionInterface[]>([])
  const [count, setCount] = useState(0)

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

    if (mounted && result && result.length > 0) {
      setSubscriptions(result)
      setCount(result.length)
    }
  }

  return (
    <>
      <div className="mb-20 hidden w-full justify-between gap-20 xl:flex">
        <div className="select-none text-14 font-bold text-grey-40">My subscriptions</div>
        <div className="select-none text-14 font-bold text-purple">{count}</div>
      </div>
      {subscriptions && subscriptions.length > 0 ? (
        <>
          <div className="mb-6 w-full xl:mb-20">
            <SubscriptionList subscriptions={subscriptions} />
          </div>
          <Link className="hidden xl:block" to={URL.ACCOUNT.SUBSCRIPTIONS}>
            <ButtonGreyDimm title={"View all subscriptions"} />
          </Link>
          <div className="block xl:hidden">
            <PageItem minimized={true} page={all} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default FanSideSubscriptions
