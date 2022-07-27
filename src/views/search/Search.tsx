import { parseError } from "api/integration/errors"
import { onSortUsername } from "api/integration/functions"
import axios from "axios"
import SearchClubs from "components/search/SearchClubs"
import SearchFriends from "components/search/SearchFriends"
import { useProps } from "contexts/PropsContext"
import { REQ } from "libs/constants"
import { OverlayType, SearchType } from "libs/enums"
import { ProfileInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdSearch, MdClose } from "react-icons/md"
import InputSearch from "utils/inputs/InputSearch"
import TabsBottom from "utils/tabs/TabsBottom"

const Search = () => {
  const { token, setOverlay } = useProps()

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
        const sortedUsers: any = onSortUsername(resultUsers)

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
    <>
      <div className="fixed top-0 left-0 bottom-0 w-full p-12 sm:p-20 lg:p-30">
        <div className="mb-12 flex h-36 w-full items-center justify-between sm:mb-20 sm:h-auto">
          <div className="flex items-center justify-center space-x-[14px]">
            <MdSearch className="text-22 text-grey-40" />
            <div className="text-22 font-bold text-black">Search</div>
          </div>
          <button
            className="group flex h-24 w-24 items-center justify-center"
            onClick={() => setOverlay(OverlayType.Default)}
          >
            <MdClose className="text-22 text-grey-40 group-hover:text-black" />
          </button>
        </div>
        <div className="mb-10 w-full">
          <InputSearch handler={setSearch} handlerSubmit={onSubmit} title="Search user..." value={search} />
        </div>
        <div className="mb-20 w-full">
          <TabsBottom tabs={tabs} type={type} />
        </div>
        <div className="h-[calc(100%-166px)] w-full">
          {
            {
              [SearchType.Clubs]: <SearchClubs clubs={clubs} />,
              [SearchType.Users]: <SearchFriends users={users} />
            }[type]
          }
        </div>
      </div>
    </>
  )
}

export default Search
