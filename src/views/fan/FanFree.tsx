import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import FanFreeEarn from "components/fan/FanFreeEarn"
import FanFreeHistory from "components/fan/FanFreeHistory"
import { FanFreeType } from "libs/enums"
import { TabInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdHistory } from "react-icons/md"
import TabsTop from "utils/tabs/TabsTop"

const FanFree = ({ page }: { page: FanFreeType }) => {
  const [type, setType] = useState<FanFreeType>(page)

  const [tabs] = useState<TabInterface[]>([
    {
      icon: <ProperCoin className="h-16 w-16 fill-current" />,
      title: <>Earn Propercoins</>,
      type: FanFreeType.Earn,
      action: setType
    },
    {
      icon: <MdHistory />,
      title: <>Earning History</>,
      type: FanFreeType.History,
      action: setType
    }
  ])

  return (
    <>
      <div className="mb-12 w-full text-24 font-bold text-black">Earn free propercoins</div>
      <div className="text 14 mb-20 w-full text-grey-40 md:mb-30">
        It’s possible to earn propercoins completely for free, by downloading apps, completing surveys, and more
      </div>
      <div className="mb-20 w-full md:mb-40">
        <TabsTop tabs={tabs} type={type} />
      </div>
      <div className="w-full">
        {
          {
            [FanFreeType.Earn]: <FanFreeEarn />,
            [FanFreeType.History]: <FanFreeHistory />
          }[type]
        }
      </div>
    </>
  )
}

export default FanFree
