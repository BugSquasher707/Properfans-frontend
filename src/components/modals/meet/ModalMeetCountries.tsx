import { onPlural } from "api/integration/functions"
import Wrapper from "components/wrappers/Wrapper"
import { CountriesInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { MdCheck, MdSearch } from "react-icons/md"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalMeetCountries = ({
  open,
  handler,
  countries,
  handlerCountries
}: {
  open: boolean
  handler: any
  countries: CountriesInterface[]
  handlerCountries: any
}) => {
  const [search, setSearch] = useState("")

  const onToggle = (key: number) => {
    const items = [...countries]
    const item = { ...items[key] }

    item.selected = !item.selected
    items[key] = item

    handlerCountries(items)
  }

  const onReset = () => {
    const items = [...countries]

    for (let i = 0; i < items.length; i++) {
      const item = { ...items[i] }

      item.selected = false
      items[i] = item
    }

    handlerCountries(items)
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pb-20 pt-24 shadow-sm dark:shadow-none lg:w-450">
          <div className="mb-30 grid w-full grid-cols-[1fr,auto] items-center gap-12 pl-42">
            <div className="w-full text-center text-16 font-bold text-black">Browse Countries</div>
            <ModalClose handler={handler} />
          </div>
          <div className="mb-30 grid h-42 w-full grid-cols-[auto,1fr] gap-6 rounded-4 bg-grey-6 p-4">
            <button className="group flex h-34 w-34 items-center justify-center rounded-4 hover:bg-grey-10">
              <MdSearch className="text-20 text-grey-40 group-hover:text-black" />
            </button>
            <input
              className="w-full px-6 text-14 font-semibold text-black"
              placeholder={"Search..."}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mb-30 grid max-h-[320px] w-full grid-cols-1 gap-2 overflow-y-scroll">
            {countries
              .filter((country: CountriesInterface) => country.title.includes(search))
              .map((country: CountriesInterface, key: number) => (
                <button
                  key={key}
                  className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 py-10 pl-12 pr-20 hover:bg-purple-10"
                  onClick={() => onToggle(key)}
                >
                  <div className="h-30 w-30 rounded-4 bg-grey-6"></div>
                  <div className="grid w-full grid-cols-1 gap-4">
                    <div className="w-full text-left text-14 font-bold text-black">{country.title}</div>
                    <div className="w-full text-left text-12 font-bold text-grey-40">
                      {country.amount} creator{onPlural(country.amount)}
                    </div>
                  </div>
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full ${
                      country.selected ? "bg-purple" : "border-1 border-grey-12"
                    }`}
                  >
                    <Wrapper open={country.selected}>
                      <MdCheck className="text-16 text-white" />
                    </Wrapper>
                  </div>
                </button>
              ))}
          </div>
          <div className="grid w-full grid-cols-2 items-center gap-12">
            <ButtonPurple action={() => handler(false)} title={"Apply Filter"} full />
            <button
              className="group flex h-42 w-full items-center justify-center space-x-[6px] text-14 font-bold text-grey-40 hover:text-black"
              onClick={onReset}
            >
              <IoMdTrash className="text-18 text-grey-40 group-hover:text-black" />
              Selected
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalMeetCountries
