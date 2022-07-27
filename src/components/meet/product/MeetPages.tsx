import { capitalizeString } from "api/integration/functions"
import { onMeetPagesTitle } from "api/integration/meet"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MeetProductType } from "libs/enums"
import { LinkInterface, ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const MeetPages = ({ profile, type }: { profile: ProfileBrandInterface; type: MeetProductType }) => {
  const { path } = useProps()

  const [pages, setPages] = useState<LinkInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    setPages([
      { title: "Discover", link: URL.MEET.DISCOVER },
      {
        title: capitalizeString(profile.userName),
        link: URL.MEET.PROFILE.replace(":param", profile.handle)
      },
      { title: onMeetPagesTitle(type), link: path }
    ])
  }

  return (
    <>
      <div className="flex items-center justify-center space-x-[6px]">
        {pages.map((page: LinkInterface, key: number) => (
          <div key={key} className={`flow items-center gap-6 ${key < pages.length - 1 ? "hidden md:grid" : "grid"}`}>
            <Link
              className={`text-14 font-bold hover:text-black ${page.link === path ? "text-black" : "text-grey-40"}`}
              to={page.link}
            >
              {page.title}
            </Link>
            <Wrapper open={key < pages.length - 1}>
              <MdKeyboardArrowRight className="text-16 text-grey-40" />
            </Wrapper>
          </div>
        ))}
      </div>
    </>
  )
}

export default MeetPages
