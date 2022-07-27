import { openLink } from "api/integration/functions"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { OfferHistoryInterface, TitleIconInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdDownload } from "react-icons/io"
import { RiStackFill } from "react-icons/ri"

const FanFreeHistory = () => {
  const [stats] = useState([
    { title: "810", text: "Apps Downloaded", icon: <IoMdDownload /> },
    { title: "10", text: "Surveys Completed", icon: <RiStackFill /> },
    {
      title: "810810",
      text: "Total Earnings",
      icon: <Propercoin className="h-24 w-24 fill-current" />
    }
  ])

  const [offers, setOffers] = useState<OfferHistoryInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    const off = {
      link: "",
      picture: "",
      name_short: "Download this app!",
      type: "Survey",
      payout: 940,
      date: "Jan 28 2021"
    }

    setOffers([off, off, off, off])
  }

  return (
    <>
      <div className="grid w-full grid-cols-[auto,1fr] gap-40">
        <div className="grid w-[200px] grid-cols-1 gap-6">
          {stats.map((stat: TitleIconInterface, key: number) => (
            <div key={key} className="w-full rounded-4 bg-grey-3 p-20">
              <div className="mb-12 flex w-full items-center justify-center p-4 first:text-32 first:text-purple">
                {stat.icon}
              </div>
              <div className="mb-4 w-full text-center text-16 font-bold text-black">{stat.title}</div>
              <div className="w-full text-center text-12 text-grey-40">{stat.text}</div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-full p-8">
          <div className="w-max min-w-full">
            <div className="mb-12 flex min-w-full items-center justify-between space-x-[20px] px-12">
              <div className="w-[180px] text-12 text-grey-40">App / Survey</div>
              <div className="w-[80px] text-12 text-grey-40">Payout</div>
              <div className="w-[80px] text-12 text-grey-40">Type</div>
              <div className="w-[120px] text-12 text-grey-40">Date</div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {offers
                .filter((offer: OfferHistoryInterface, key: number) => key < 10)
                .map((offer: OfferHistoryInterface, key: number) => (
                  <button
                    key={key}
                    className="group flex min-w-full items-center justify-between space-x-[20px] rounded-4 border-b-1 border-grey-3 p-12 hover:bg-grey-3"
                    onClick={(e) => openLink(e, offer.link)}
                  >
                    <div className="grid w-[180px] grid-cols-[40px,1fr] items-center gap-12">
                      <div className="h-40 w-40 rounded-4 bg-grey-3">
                        {offer.picture ? <img alt="" className="h-40 w-40 rounded-4" src={offer.picture} /> : ""}
                      </div>
                      <div className="w-full truncate overflow-ellipsis text-left text-14 font-bold text-black">
                        {offer.name_short}
                      </div>
                    </div>
                    <div className="grid w-[80px] grid-cols-[auto,1fr] items-center gap-8 text-14 font-bold text-black">
                      <Propercoin className="h-16 w-16 fill-current text-purple" />
                      {offer.payout}
                    </div>
                    <div className="flex w-[80px] items-center space-x-[6px]">{offer.type}</div>
                    <div className="w-[120px] truncate overflow-ellipsis text-left text-14 text-grey-40">
                      {offer.date}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FanFreeHistory
