import MeetFilterCountries from "components/meet/filter/MeetFilterCountries"
import MeetFilterPrice from "components/meet/filter/MeetFilterPrice"
import MeetFilterType from "components/meet/filter/MeetFilterType"
import MeetSideMenu from "components/meet/MeetSideMenu"
import { CountriesInterface } from "libs/interfaces"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const MeetSide = ({
  countries,
  audioCalls,
  videoCalls,
  videoGreetings,
  priceFrom,
  priceTo,
  priceMax,
  handler,
  handlerClear,
  handlerCountries,
  handlerAudioCalls,
  handlerVideoCalls,
  handlerVideoGreetings,
  handlerPriceFrom,
  handlerPriceTo
}: {
  countries: CountriesInterface[]
  audioCalls: boolean
  videoCalls: boolean
  videoGreetings: boolean
  priceFrom: number
  priceTo: number
  priceMax: number
  handler: any
  handlerClear: any
  handlerCountries: any
  handlerAudioCalls: any
  handlerVideoCalls: any
  handlerVideoGreetings: any
  handlerPriceFrom: any
  handlerPriceTo: any
}) => {
  return (
    <>
      <div className="w-full rounded-t-4 bg-white px-12 py-20 sm:px-20 sm:py-30 lg:px-0 lg:py-0">
        <div className="hidden w-full grid-cols-1 lg:grid">
          <MeetSideMenu />
          <div className="my-30 w-full border-b-1 border-grey-6"></div>
        </div>
        <div className="w-full">
          <div className="mb-14 flex w-full text-18 font-bold text-black lg:hidden">Filters</div>
          <div className="mb-16 flex w-full items-center justify-between space-x-[12px]">
            <div className="text-12 font-bold text-grey-40">Country</div>
            <button className="text-12 font-bold text-grey-40 hover:text-black" onClick={() => handlerClear()}>
              Clear all filters
            </button>
          </div>
          <MeetFilterCountries countries={countries} handlerCountries={handlerCountries} />
          <div className="mb-16 w-full text-12 font-bold text-grey-40">Type</div>
          <MeetFilterType
            audioCalls={audioCalls}
            handlerAudioCalls={handlerAudioCalls}
            handlerVideoCalls={handlerVideoCalls}
            handlerVideoGreetings={handlerVideoGreetings}
            videoCalls={videoCalls}
            videoGreetings={videoGreetings}
          />
          <div className="mb-26 w-full text-12 font-bold text-grey-40">Price</div>
          <MeetFilterPrice
            handlerPriceFrom={handlerPriceFrom}
            handlerPriceTo={handlerPriceTo}
            priceFrom={priceFrom}
            priceMax={Math.ceil(priceMax)}
            priceTo={Math.ceil(priceTo)}
          />
          <div className="mt-20 grid w-full sm:mt-30 lg:hidden">
            <ButtonPurple action={() => handler(false)} title={"Apply"} full small />
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetSide
