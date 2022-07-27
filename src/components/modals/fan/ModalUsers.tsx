import { parseError } from "api/integration/errors"
import axios from "axios"
import ModalUser from "components/modals/fan/ModalUser"
import WrapperPagination from "components/wrappers/WrapperPagination"
import { useProps } from "contexts/PropsContext"
import { ModalUsersType } from "libs/enums"
import { FollowInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import InputSearch from "utils/inputs/InputSearch"
import ModalClose from "utils/modals/ModalClose"

const ModalUsers = ({
  id,
  url,
  urlSearch,
  title,
  open,
  handler,
  type
}: {
  id: string
  url: string
  urlSearch: string
  title: string
  open: boolean
  handler: any
  type: ModalUsersType
}) => {
  const { token } = useProps()

  const [search, setSearch] = useState("")

  const [results, setResults] = useState<FollowInterface[]>([])
  const [users, setUsers] = useState<FollowInterface[]>([])

  const [done, setDone] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState<FollowInterface[]>([])

  useEffect(() => {
    setSearch("")
  }, [open])

  useEffect(() => {
    onSearch()
  }, [search])

  useEffect(() => {
    setVisible(search && results && results.length > 0 ? results : users)
  }, [results, users])

  const onPage = (page: number) => {
    let data = {}

    switch (type) {
      case ModalUsersType.Followers:
        data = { brandid: id, pageNumber: page }
        break
      case ModalUsersType.Friends:
        data = { brandid: id, pageNumber: page }
        break
      case ModalUsersType.Likes:
        data = { id: id, pageNumber: page }
        break
    }

    axios({
      url: url,
      method: "post",
      data: data,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res: any) => res.data)
      .then((res) => {
        setLoaded(true)

        if (res && res.length === 0) {
          setDone(true)
        } else {
          let newUsers = []

          switch (type) {
            case ModalUsersType.Followers:
              newUsers = res.map((entry: any) => ({
                ...entry.child_info
              }))
              break
            case ModalUsersType.Friends:
              newUsers = res.map((entry: any) => ({
                ...entry.child_info
              }))
              break
            case ModalUsersType.Likes:
              newUsers = res
              break
          }

          setUsers(newUsers)
        }
      })
      .catch((error) => {
        parseError(error)
      })
  }

  const onSearch = () => {
    if (!search) {
      setResults([])
      return
    }

    axios({
      url: urlSearch,
      method: "post",
      data: { search: search, brandid: id },
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res: any) => res.data)
      .then((res) => {
        setUsers(res.map((entry: any) => entry.child_info))
      })
      .catch((error) => {
        parseError(error)
      })
  }

  const onName = () => {
    let newName

    switch (type) {
      case ModalUsersType.Followers:
        newName = "followers"
        break
      case ModalUsersType.Friends:
        newName = "friends"
        break
      case ModalUsersType.Likes:
        newName = "likes"
        break
    }

    return newName
  }

  return (
    <>
      <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pb-20 pt-24 shadow-sm dark:shadow-none lg:w-450">
        <div className="mb-30 grid w-full grid-cols-[1fr,auto] items-center gap-12 pl-42">
          <div className="w-full text-center text-16 font-bold text-black">{title}</div>
          <ModalClose handler={handler} />
        </div>
        <div className="mb-20 w-full">
          <InputSearch handler={setSearch} handlerSubmit={onSearch} title="Search friend..." value={search} />
        </div>
        <div className="scroll -mx-14 grid h-[350px] w-[calc(100%+28px)] grid-cols-1 items-start overflow-y-auto px-14">
          <div className="grid w-full grid-cols-1 items-start gap-2">
            <WrapperPagination
              count={visible.length}
              done={done}
              handlerPage={onPage}
              items={onName()}
              loaded={loaded}
              top={false}
            >
              {visible && visible.length > 0 ? (
                <>
                  {visible.map((user: FollowInterface, key: number) => (
                    <ModalUser key={key} user={user} />
                  ))}
                </>
              ) : (
                <div className="flex h-[350px] w-full items-center justify-center text-center text-14 text-grey-40">
                  No {title.toLowerCase()} loaded
                </div>
              )}
            </WrapperPagination>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalUsers
