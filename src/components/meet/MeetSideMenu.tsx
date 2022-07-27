import { URL } from "libs/constants"
import React from "react"
import { IoMdCompass } from "react-icons/io"
import PageList from "utils/lists/PageList"

const MeetSideMenu = () => {
  const MeetPages = [{ title: "Discover", icon: <IoMdCompass />, link: URL.MEET.DISCOVER }]

  return (
    <>
      <div className="mb-20 w-full select-none text-14 font-bold text-grey-40">Menu</div>
      <PageList line={false} pages={MeetPages} />
    </>
  )
}

export default MeetSideMenu
