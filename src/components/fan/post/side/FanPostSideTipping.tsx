import { parseTrophy } from "api/integration/functions"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import FanPostSideTooltip from "components/fan/post/side/FanPostSideTooltip"
import ModalTip from "components/modals/fan/ModalTip"
import ModalTipping from "components/modals/fan/ModalTipping"
import ModalTips from "components/modals/fan/ModalTips"
import ModalTopDonors from "components/modals/fan/ModalTopDonors"
import Wrapper from "components/wrappers/Wrapper"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import { TippingType } from "libs/enums"
import { ChartInterface, FeedInterface, TippingUserInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import NumberFormat from "react-number-format"
import { useParams } from "react-router-dom"
import { PieChart, Pie, Cell } from "recharts"
import Avatar from "utils/avatars/Avatar"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

interface ParamInterface {
  param: string
}

const FanPostSideTipping = ({ donations, post }: { donations: TippingUserInterface[]; post: FeedInterface }) => {
  const { param } = useParams<ParamInterface>()

  const [doughnut, setDoughnut] = useState<ChartInterface[]>([])

  const [colors] = useState(["#00ECD2", "rgba(137, 88, 225, 1)"])

  const [active, setActive] = useState("")

  const [openTip, setOpenTip] = useState(false)
  const [openTips, setOpenTips] = useState(false)
  const [openTipping, setOpenTipping] = useState(false)
  const [openTopDonors, setOpenTopDonors] = useState(false)

  const [total, setTotal] = useState(0)
  const [totalMoney, setTotalMoney] = useState(0)
  const [totalPropercoins, setTotalPropercoins] = useState(0)

  useEffect(() => {
    const list = donations.map((tip: TippingUserInterface) => tip.amount)

    const listMoney = donations
      .filter((tip: TippingUserInterface) => tip.type === TippingType.Money)
      .map((tip: TippingUserInterface) => tip.amount)

    const listPropercoins = donations
      .filter((tip: TippingUserInterface) => tip.type === TippingType.Propercoins)
      .map((tip: TippingUserInterface) => tip.amount)

    setTotal(list.reduce((a, b) => a + b, 0))
    setTotalMoney(listMoney.reduce((a, b) => a + b, 0))
    setTotalPropercoins(listPropercoins.reduce((a, b) => a + b, 0))
  }, [donations])

  useEffect(() => {
    if (param) {
      setActive(param)
      setOpenTip(true)
    }
  }, [param])

  useEffect(() => {
    const data = [
      { name: "Money", value: totalMoney },
      { name: "Propercoins", value: totalPropercoins }
    ]

    setDoughnut(data)
  }, [totalMoney, totalPropercoins])

  const showTip = (id: string) => {
    setActive(id)
    setOpenTip(true)
    setOpenTips(false)
  }

  const showTips = () => {
    setOpenTip(false)
    setOpenTips(true)
  }

  const showTipping = () => {
    setOpenTopDonors(false)
    setOpenTipping(true)
  }

  const showTopDonors = () => {
    setOpenTip(false)
    setOpenTopDonors(true)
  }

  return (
    <>
      <div className="mb-20 w-full select-none text-12 font-bold text-grey-40">Tipping</div>
      <div className="mb-16 grid w-full grid-cols-[auto,1fr,auto] items-center gap-12">
        <div className="flex h-26 w-26 items-center justify-center rounded-full bg-purple-20">
          <Propercoin className="h-16 w-16 fill-current text-purple" />
        </div>
        <div className="w-full">
          <div className="mb-2 w-full text-14 font-bold text-black">
            <NumberFormat displayType={"text"} value={post.tips} thousandSeparator />
          </div>
          <div className="w-full text-12 font-bold text-grey-40">Collected</div>
        </div>
        <div className="group relative flex h-28 w-28 cursor-pointer items-center justify-center">
          <div className="-rotate-90 transform">
            <PieChart height={28} width={28}>
              <Pie
                cx={9}
                cy={9}
                data={doughnut}
                dataKey="value"
                innerRadius={6}
                isAnimationActive={false}
                outerRadius={14}
                paddingAngle={10}
                stroke="none"
              >
                {doughnut.map((entry: ChartInterface, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <FanPostSideTooltip totalMoney={totalMoney} totalPropercoins={totalPropercoins} />
        </div>
      </div>
      <div className="mb-16 grid w-full grid-cols-1">
        {donations
          .filter((tip: TippingUserInterface, key: number) => key < 3)
          .map((tip: TippingUserInterface, key: number) => (
            <button
              key={key}
              className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-14 rounded-4 p-10 hover:bg-purple-10"
              onClick={() => showTip(tip.id)}
            >
              <div className="h-32 w-32 overflow-hidden rounded-full">
                {tip.user.avatar ? <img alt="" className="h-32 w-32" src={tip.user.avatar} /> : <Avatar />}
              </div>
              <div className="w-full">
                <div className="relative mb-4 h-16 w-full">
                  <WrapperAbsolute>
                    <div className="w-full truncate overflow-ellipsis text-left text-14 font-bold text-black">
                      {tip.user.userName}
                    </div>
                  </WrapperAbsolute>
                </div>
                <div className="w-full">
                  {
                    {
                      [TippingType.Money]: (
                        <div className="text-12 font-bold text-grey-40">
                          <NumberFormat displayType={"text"} prefix={"$"} value={tip.amount} thousandSeparator />
                        </div>
                      ),
                      [TippingType.Propercoins]: (
                        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center">
                            <Propercoin className="h-16 w-16 fill-current text-purple" />
                          </div>
                          <div className="text-left text-12 font-bold text-grey-40">
                            <NumberFormat displayType={"text"} value={tip.coins} thousandSeparator />
                          </div>
                        </div>
                      )
                    }[tip.type]
                  }
                </div>
              </div>
              <div className="w-full">{parseTrophy(key)}</div>
            </button>
          ))}
      </div>
      <div className="mb-10 w-full">
        <ButtonPurple action={() => setOpenTipping(true)} title={"Send Tip"} full small />
      </div>
      <button
        className="flex h-36 w-full items-center justify-center text-14 font-bold text-grey-40 hover:text-black"
        onClick={() => setOpenTips(true)}
      >
        View All Tips
      </button>
      <Wrapper open={openTip}>
        <ModalTip
          active={active}
          handler={setOpenTip}
          open={openTip}
          post={post}
          showTips={showTips}
          showTopDonors={showTopDonors}
          tips={donations}
        />
      </Wrapper>
      <Wrapper open={openTips}>
        <ModalTips
          handler={setOpenTips}
          open={openTips}
          post={post}
          showTip={showTip}
          total={total}
          totalMoney={totalMoney}
          totalPropercoins={totalPropercoins}
        />
      </Wrapper>
      <Wrapper open={openTipping}>
        <ModalTipping handler={setOpenTipping} open={openTipping} post={post} showTopDonors={setOpenTopDonors} />
      </Wrapper>
      <Wrapper open={openTopDonors}>
        <ModalTopDonors handler={setOpenTopDonors} open={openTopDonors} post={post} showTipping={showTipping} />
      </Wrapper>
    </>
  )
}

export default FanPostSideTipping
