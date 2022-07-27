import { getAllProperMeetProfiles } from "api/endpoints/properMeetProfile"
import SignInBar from "components/auth/SignInBar"
import MeetCategories from "components/meet/MeetCategories"
import MeetCreators from "components/meet/MeetCreators"
import MeetSide from "components/meet/MeetSide"
import { useProps } from "contexts/PropsContext"
import { MeetCreatorType } from "libs/enums"
import { CountriesInterface, MeetCreatorInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdFilterList } from "react-icons/md"

const MeetDiscover = () => {
  const { token } = useProps()

  const [type, setType] = useState<MeetCreatorType>(MeetCreatorType.All)

  const [openFilters, setOpenFilters] = useState(false)

  const [countries, setCountries] = useState<CountriesInterface[]>([])
  const [countriesList, setCountriesList] = useState<string[]>([])

  const [audioCalls, setAudioCalls] = useState(false)
  const [videoCalls, setVideoCalls] = useState(false)
  const [videoGreetings, setVideoGreetings] = useState(false)

  const [priceFrom, setPriceFrom] = useState(0)
  const [priceTo, setPriceTo] = useState(0)
  const [priceMax, setPriceMax] = useState(0)

  const [creators, setCreators] = useState<MeetCreatorInterface[]>([])
  const [creatorsLoaded, setCreatorsLoaded] = useState<MeetCreatorInterface[]>([])
  const [creatorsShown, setCreatorsShown] = useState<MeetCreatorInterface[]>([])

  useEffect(() => {
    onLoad()
    onCountries()
  }, [])

  const onLoad = async () => {
    const getAllProfiles = await getAllProperMeetProfiles(token)

    if(getAllProfiles.status) {
        setCreators(getAllProfiles.data)
    }
  }

  const onCountries = () => {
    setCountries([
      {
        country: "USA",
        title: "United States",
        amount: 129,
        selected: false
      },
      {
        country: "SP",
        title: "Spain",
        amount: 32,
        selected: false
      }
    ])
  }

  useEffect(() => {
    if (creators && creators.length > 0) {
      const filtered = creators
        .filter((creator: MeetCreatorInterface) => type !== 0 ? creator.type === type : creator.type)
        // .filter(
        //   (creator: MeetCreatorInterface) =>
        //     countriesList.length === 0 ||
        //     (countriesList.length > 0 && countriesList.includes(creator.country.toLowerCase()))
        // )
        .filter(
          (creator: MeetCreatorInterface) =>
            (!audioCalls || (audioCalls && creator.audioCalls)) &&
            (!videoCalls || (videoCalls && creator.videoCalls)) &&
            (!videoGreetings || (videoGreetings && creator.videoGreetings))
        )

      setCreatorsLoaded(filtered)
    }
  }, [creators, type, audioCalls, videoCalls, videoGreetings, countriesList])

  useEffect(() => {
    if (creatorsLoaded && creatorsLoaded.length > 0) {
      const filtered = creatorsLoaded.filter(
        (creator: MeetCreatorInterface) => priceFrom <= creator.priceFrom && creator.priceTo <= priceTo
      )

      setCreatorsShown(filtered)
    } else {
      setCreatorsShown([])
    }
  }, [creatorsLoaded, priceFrom, priceTo])

  useEffect(() => {
    const max = creatorsLoaded.map((creator: MeetCreatorInterface) => creator.priceTo).sort((a, b) => b - a)[0]
    setPriceMax(max && max >= 1 ? max : 1)
  }, [creatorsLoaded])

  useEffect(() => {
    setPriceFrom(0)
    setPriceTo(priceMax)
  }, [priceMax])

  useEffect(() => {
    setCountriesList(
      countries
        .filter((country: CountriesInterface) => country.selected)
        .map((country: CountriesInterface) => country.title.toLowerCase())
    )
  }, [countries])

  const clearFilters = () => {
    onResetCountries()

    setAudioCalls(false)
    setVideoCalls(false)
    setVideoGreetings(false)

    setPriceFrom(0)
    setPriceTo(priceMax)
  }

  const onResetCountries = () => {
    const items = [...countries]

    for (let i = 0; i < items.length; i++) {
      const item = { ...items[i] }

      item.selected = false
      items[i] = item
    }

    setCountries(items)
  }

  return (
    <>
      <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
        <div
          className={`light-r fixed top-0 left-0 z-40 h-full w-full cursor-pointer bg-black opacity-50 dark:opacity-80 lg:hidden ${
            openFilters ? "flex" : "hidden"
          }`}
          onClick={() => setOpenFilters(false)}
        ></div>
        <div
          className={`lg:flex lg:w-[240px] ${
            openFilters ? "fixed bottom-0 left-0 z-50 flex w-full lg:relative lg:z-auto" : "hidden lg:flex "
          }`}
        >
          <MeetSide
            audioCalls={audioCalls}
            countries={countries}
            handler={setOpenFilters}
            handlerAudioCalls={setAudioCalls}
            handlerClear={clearFilters}
            handlerCountries={setCountries}
            handlerPriceFrom={setPriceFrom}
            handlerPriceTo={setPriceTo}
            handlerVideoCalls={setVideoCalls}
            handlerVideoGreetings={setVideoGreetings}
            priceFrom={priceFrom}
            priceMax={priceMax}
            priceTo={priceTo}
            videoCalls={videoCalls}
            videoGreetings={videoGreetings}
          />
        </div>
        <div className="w-full">
          <div className="mb-20 w-full sm:mb-30 md:mb-40">
            <MeetCategories handler={setType} value={type} />
          </div>
          <div className="mb-20 flex w-full items-center justify-between space-x-[12px] sm:mb-30">
            <div className="flex items-center space-x-[10px]">
              <div className="text-14 font-bold text-black sm:text-24">{MeetCreatorType[type]}</div>
              <div className="text-16 font-bold text-purple">{creatorsLoaded.length}</div>
            </div>
            <button
              className="flow grid items-center gap-10 text-14 font-bold text-grey-40 hover:text-black lg:hidden"
              onClick={() => setOpenFilters(!openFilters)}
            >
              Filter <MdFilterList className="text-16 text-purple" />
            </button>
          </div>
          <div className="w-full">
            <MeetCreators creators={creatorsShown} />
          </div>
        </div>
      </div>
      <SignInBar />
    </>
  )
}

export default MeetDiscover
