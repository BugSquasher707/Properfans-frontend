import { statusApi } from "api/endpoints/status"
import { openLink } from "api/integration/functions"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import FanFreeFilterBar from "components/fan/free/FanFreeFilterBar"
import { useProps } from "contexts/PropsContext"
import { BooleanInterface, OfferInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaApple } from "react-icons/fa"
import { IoMdDesktop } from "react-icons/io"
import { MdAndroid, MdFileDownload, MdKeyboardArrowRight, MdMouse } from "react-icons/md"

const FanFreeEarn = () => {
  const { token } = useProps()

  const [rate] = useState(10)
  const [shown, setShown] = useState(rate)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [sort, setSort] = useState("")
  const [payout, setPayout] = useState(0)

  const [offers, setOffers] = useState<OfferInterface[]>([])
  const [loadedOffers, setLoadedOffers] = useState<OfferInterface[]>([])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setOffers(result.offers)
    }
  }

  useEffect(() => {
    onLoad()
  }, [])

  const [devices, setDevices] = useState<BooleanInterface[]>([
    { active: false, title: "iOS", icon: <FaApple /> },
    { active: false, title: "Android", icon: <MdAndroid /> },
    { active: false, title: "Desktop", icon: <IoMdDesktop /> }
  ])

  useEffect(() => {
    const newLoadedOffers = offers.filter(
      (offer: OfferInterface, key: number) =>
        key < shown &&
        offer.name_short.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
        offer.payout >= payout &&
        (!devices[0].active ||
          (devices[0].active && (offer.device.includes("iPhone") || offer.device.includes("iPad")))) &&
        (!devices[1].active || (devices[1].active && devices[1].title && offer.device.includes(devices[1].title))) &&
        (!devices[2].active || (devices[2].active && devices[2].title && offer.device.includes(devices[2].title)))
    )

    if (sort === "Lowest Payout") {
      newLoadedOffers.sort((a, b) => a.payout - b.payout)
    } else {
      newLoadedOffers.sort((a, b) => b.payout - a.payout)
    }

    setLoadedOffers(newLoadedOffers)
  }, [offers, search, shown, sort, devices, payout])

  return (
    <>
      <div className="h-[calc(100vh-375px)] min-h-[500px] w-full rounded-4 border-1 border-grey-12 shadow-md dark:shadow-none">
        <div className="w-full p-20">
          <div className="mb-20 flex w-full items-center gap-12">
            <div className="text-16 font-bold text-black">Download Apps</div>
            <div className="h-6 w-6 rounded-full bg-grey-20"></div>
            <div className="text-14 text-grey-40">{offers.length} results</div>
          </div>
          <FanFreeFilterBar
            category={category}
            devices={devices}
            handlerCategory={setCategory}
            handlerDevices={setDevices}
            handlerPayout={setPayout}
            handlerSearch={setSearch}
            handlerSort={setSort}
            payout={payout}
            search={search}
            sort={sort}
          />
        </div>
        <div className="h-[calc(100%-180px)] w-full max-w-full overflow-scroll p-8">
          <div className="w-max min-w-full">
            <div className="mb-12 flex min-w-full items-center justify-between space-x-[20px] px-12">
              <div className="w-[212px] text-12 text-grey-40">App</div>
              <div className="w-[80px] text-12 text-grey-40">Payout</div>
              <div className="w-[60px] text-12 text-grey-40">Device</div>
              <div className="w-[344px] text-12 text-grey-40">Task</div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {loadedOffers.map((offer: OfferInterface, key: number) => (
                <button
                  key={key}
                  className="group flex min-w-full items-center justify-between space-x-[20px] rounded-4 border-b-1 border-grey-3 p-12 hover:bg-grey-3"
                  onClick={(e) => openLink(e, offer.link)}
                >
                  <div className="grid w-[212px] grid-cols-[40px,1fr] items-center gap-12">
                    <div className="w-40">
                      <img alt="" className="h-40 w-40 rounded-4" src={offer.picture} />
                    </div>
                    <div className="w-full truncate overflow-ellipsis text-left text-14 font-bold text-black">
                      {offer.name_short}
                    </div>
                  </div>
                  <div className="grid w-[80px] grid-cols-[auto,1fr] items-center gap-8 text-14 font-bold text-black">
                    <Propercoin className="h-16 w-16 fill-current text-purple" />
                    {offer.payout}
                  </div>
                  <div className="flex w-[60px] items-center space-x-[6px]">
                    {offer.device.toLocaleLowerCase().includes("iphone") ||
                    offer.device.toLocaleLowerCase().includes("ipad") ? (
                      <FaApple className="cursor-pointer text-grey-20 hover:text-black" />
                    ) : (
                      ""
                    )}
                    {offer.device.toLocaleLowerCase().includes("android") ? (
                      <MdAndroid className="cursor-pointer text-grey-20 hover:text-black" />
                    ) : (
                      ""
                    )}
                    {offer.device.toLocaleLowerCase().includes("desktop") ? (
                      <IoMdDesktop className="cursor-pointer text-grey-20 hover:text-black" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-[344px] truncate overflow-ellipsis text-14 text-grey-40 group-hover:w-[164px]">
                    {offer.description}
                  </div>
                  <div className="hidden h-36 w-[160px] items-center justify-center gap-8 rounded-4 border-1 border-grey-12 bg-white text-14 font-bold text-black shadow-md group-hover:flex">
                    <MdFileDownload className="text-black" />
                    Download
                    <MdKeyboardArrowRight className="text-grey-20" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          className="flex w-full items-center justify-center space-x-[8px] p-20 text-12 text-grey-40 hover:font-bold hover:text-black"
          onClick={() => setShown(shown + rate)}
        >
          <MdMouse className="" />
          Click to see more
        </button>
      </div>
    </>
  )
}

export default FanFreeEarn
