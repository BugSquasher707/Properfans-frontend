import { openLink } from "api/integration/functions"
import { TeamInterface } from "libs/interfaces"
import React from "react"
import { SiLinkedin, SiTwitter } from "react-icons/si"
import Avatar from "utils/avatars/Avatar"

const LandingTeamMember = ({ data }: { data: TeamInterface }) => {
  return (
    <>
      <div className="group w-full cursor-pointer rounded-4 border-1 border-white bg-white px-20 pt-30 pb-20 shadow-md dark:border-grey-6 dark:shadow-none">
        <div className="center mb-20 h-80 w-full group-hover:mb-24 group-hover:h-70">
          {data.icon ? (
            <div className="relative h-80 w-80 overflow-hidden rounded-full group-hover:h-70 group-hover:w-70">
              <img
                alt=""
                className="absolute top-[50%] left-[50%] w-80 translate-x-[-50%] translate-y-[-50%] transform group-hover:w-70"
                src={data.icon}
              />
            </div>
          ) : (
            <Avatar groupSize={70} size={80} />
          )}
        </div>
        <div className="mb-6 w-full truncate overflow-ellipsis text-center text-14 font-bold text-black">
          {data.name}
        </div>
        <div className="mb-16 w-full">
          <div className="h-18 w-full overflow-hidden text-center text-14 text-grey-40">{data.title}</div>
        </div>
        <div className="flow grid w-full justify-center gap-16">
          {data.linkedin ? (
            <button onClick={(e) => openLink(e, data.linkedin)}>
              <SiLinkedin className="text-18 text-grey-40 group-hover:text-24 hover:text-black" />
            </button>
          ) : (
            ""
          )}
          {data.twitter ? (
            <button onClick={(e) => openLink(e, data.twitter)}>
              <SiTwitter className="text-18 text-grey-40 group-hover:text-24 hover:text-black" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default LandingTeamMember
