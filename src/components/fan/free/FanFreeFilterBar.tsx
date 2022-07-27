import FanFreeDropdownCategory from "components/fan/free/FanFreeDropdownCategory"
import FanFreeDropdownFilter from "components/fan/free/FanFreeDropdownFilter"
import Wrapper from "components/wrappers/Wrapper"
import { BooleanInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaFilter } from "react-icons/fa"
import { IoMdCloseCircle, IoMdSearch } from "react-icons/io"
import { MdFilterList, MdKeyboardArrowDown } from "react-icons/md"

const FanFreeFilterBar = ({
  search,
  handlerSearch,
  category,
  handlerCategory,
  sort,
  handlerSort,
  payout,
  handlerPayout,
  devices,
  handlerDevices
}: {
  search: string
  handlerSearch: any
  category: string
  handlerCategory: any
  sort: string
  handlerSort: any
  payout: number
  handlerPayout: any
  devices: BooleanInterface[]
  handlerDevices: any
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <>
      <div className="grid h-42 w-full grid-cols-[1fr,auto] gap-8">
        <div className="grid h-42 w-full grid-cols-[1fr,1px,auto] items-center rounded-4 bg-grey-3">
          <div className="grid w-full grid-cols-[auto,1fr,auto] items-center p-4">
            <button className="group flex h-34 w-34 items-center justify-center rounded-4 hover:bg-grey-3">
              <IoMdSearch className="text-18 text-grey-40 group-hover:text-black" />
            </button>
            <input
              className="w-full px-10 text-14 font-semibold text-black"
              placeholder="Search task..."
              type="text"
              value={search}
              onChange={(e) => handlerSearch(e.target.value)}
            />
            <button
              className="group flex h-34 w-34 items-center justify-center rounded-4 hover:bg-grey-3"
              onClick={() => handlerSearch("")}
            >
              <IoMdCloseCircle className="text-18 text-grey-40 group-hover:text-black" />
            </button>
          </div>
          <div className="h-24 border-r-1 border-grey-10"></div>
          <div className="relative flex h-42 w-[232px] items-center">
            <button
              className="group grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 px-20"
              onClick={() => setCategoryOpen(true)}
            >
              <MdFilterList className={`text-16 ${categoryOpen ? "text-black" : "text-grey-20"}`} />
              <div className={`text-left text-14 ${categoryOpen ? "font-bold text-black" : "text-grey-40"}`}>
                <Wrapper open={categoryOpen}>Select category</Wrapper>
                <Wrapper open={!categoryOpen}>
                  Category <span className="font-bold text-black">{category ? category : "All tasks"}</span>
                </Wrapper>
              </div>
              <MdKeyboardArrowDown
                className={`text-16  ${categoryOpen ? "rotate-180 transform text-black" : "text-grey-20"}`}
              />
            </button>
            <FanFreeDropdownCategory
              category={category}
              handler={setCategoryOpen}
              handlerCategory={handlerCategory}
              open={categoryOpen}
            />
          </div>
        </div>
        <div className="relative flex h-42 w-[232px] items-center rounded-4 bg-grey-3">
          <button
            className="group grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 px-20"
            onClick={() => setFilterOpen(true)}
          >
            <FaFilter className={`text-16 ${filterOpen ? "text-black" : "text-grey-20"}`} />
            <div className={`text-left text-14 ${filterOpen ? "text-black" : "text-grey-40"}`}>Filters</div>
            <MdKeyboardArrowDown
              className={`text-16  ${filterOpen ? "rotate-180 transform text-black" : "text-grey-20"}`}
            />
          </button>
          <FanFreeDropdownFilter
            devices={devices}
            handler={setFilterOpen}
            handlerDevices={handlerDevices}
            handlerPayout={handlerPayout}
            handlerSort={handlerSort}
            open={filterOpen}
            payout={payout}
            sort={sort}
          />
        </div>
      </div>
    </>
  )
}

export default FanFreeFilterBar
