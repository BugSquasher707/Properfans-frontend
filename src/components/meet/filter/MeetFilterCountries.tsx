import ModalMeetCountries from "components/modals/meet/ModalMeetCountries"
import Wrapper from "components/wrappers/Wrapper"
import { CountriesInterface } from "libs/interfaces"
import React, { useState } from "react"
import { BiWorld } from "react-icons/bi"

const MeetFilterCountries = ({
  countries,
  handlerCountries
}: {
  countries: CountriesInterface[]
  handlerCountries: any
}) => {
  const [openCountries, setOpenCountries] = useState(false)

  return (
    <>
      <div className="mb-40 grid w-full grid-cols-1 gap-8">
        <Wrapper open={countries.length > 0}>
          <div className="grid w-full grid-cols-1 gap-8"></div>
        </Wrapper>

        <button
          className="group grid h-44 w-full cursor-pointer grid-cols-[auto,1fr] items-center gap-12 rounded-4 bg-grey-6 px-12"
          onClick={() => setOpenCountries(true)}
        >
          <BiWorld className="text-18 text-grey-20 group-hover:text-black" />
          <div className="w-full text-left text-14 font-bold text-black">Browse Countries</div>
        </button>
      </div>
      <ModalMeetCountries
        countries={countries}
        handler={setOpenCountries}
        handlerCountries={handlerCountries}
        open={openCountries}
      />
    </>
  )
}

export default MeetFilterCountries
