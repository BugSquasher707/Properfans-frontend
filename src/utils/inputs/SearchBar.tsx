import { parseError } from "api/integration/errors"
import { onSortUsername } from "api/integration/functions"
import axios from "axios"
import SearchClubs from "components/search/SearchClubs"
import SearchFriends from "components/search/SearchFriends"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { REQ } from "libs/constants"
import { SearchType } from "libs/enums"
import { ProfileInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { MdSearch } from "react-icons/md"
import PopupWrapper from "utils/elements/PopupWrapper"
import TabsBottom from "utils/tabs/TabsBottom"

const SearchBar = () => {
  const { token } = useProps()

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const [type, setType] = useState(SearchType.Clubs)

  const [clubs, setClubs] = useState<ProfileInterface[]>([])
  const [users, setUsers] = useState<ProfileInterface[]>([])

  const [tabs] = useState<TabInterface[]>([
    { type: SearchType.Clubs, title: <>Clubs</>, action: setType },
    { type: SearchType.Users, title: <>Users</>, action: setType }
  ])

  useEffect(() => {
    onSubmit()
    setOpen(search ? true : false)
  }, [search, type])

  const onSubmit = () => {
    if (!search) {
      onClear()
      return
    }

    axios({
      url: onUrl(),
      method: "get",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res: any) => res.data)
      .then((res) => onResult(res))
      .catch((error) => {
        parseError(error)
      })
  }

  const onResult = (res: any) => {
    switch (type) {
      case SearchType.Clubs:
        setClubs(res.data)
        break
      case SearchType.Users:
        const resultUsers = res.data

        const sortedUsers: ProfileInterface[] = onSortUsername(resultUsers)

        setUsers(sortedUsers)
        break
    }
  }

  const onUrl = () => {
    let newUrl

    switch (type) {
      case SearchType.Clubs:
        newUrl = `${REQ.SEARCH.CLUB}/${search}`
        break
      case SearchType.Users:
        newUrl = `${REQ.SEARCH.USER}/${search}`
        break
    }

    return newUrl
  }

  const onClear = () => {
    switch (type) {
      case SearchType.Clubs:
        setClubs([])
        break
      case SearchType.Users:
        setUsers([])
        break
    }
  }

  return (
    <div className="relative h-42 w-full">
      <PopupWrapper handler={setOpen} open={open} />
      <div
        className={`absolute top-0 left-0 z-40 w-full  items-center rounded-4 border-1 ${
          search.length > 0 ? "border-grey-12 bg-white shadow-md dark:shadow-none" : "border-transparent bg-grey-6"
        }`}
      >
        <div className="group relative grid h-42 w-full grid-cols-[auto,1fr,auto] items-center p-4">
          <button
            className="center h-34 w-34 cursor-pointer rounded-4 text-18 text-grey-30 hover:bg-grey-6 hover:text-black"
            onClick={() => onSubmit()}
          >
            <MdSearch />
          </button>
          <input
            className="h-30 w-full px-12 text-14 font-bold text-black placeholder-grey-40"
            placeholder={"Search..."}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <Wrapper open={search}>
            <button
              className="center h-34 w-34 cursor-pointer rounded-4 text-18 text-grey-30 hover:bg-grey-6 hover:text-black"
              onClick={() => {
                setOpen(false)
                setClubs([])
                setUsers([])
                setSearch("")
              }}
            >
              <IoMdCloseCircle />
            </button>
          </Wrapper>
        </div>
        <Wrapper open={open}>
          <div className="w-full">
            <TabsBottom tabs={tabs} type={type} />
          </div>
          <div className="w-full p-12">
            <div className="scroll max-h-[200px] min-h-[120px] w-full overflow-scroll">
              {
                {
                  [SearchType.Clubs]: <SearchClubs clubs={clubs} full />,
                  [SearchType.Users]: <SearchFriends users={users} full />
                }[type]
              }
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default SearchBar
