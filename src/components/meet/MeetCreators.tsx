import Wrapper from "components/wrappers/Wrapper"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { URL } from "libs/constants"
import { MeetCreatorType } from "libs/enums"
import { MeetCreatorInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import Verified from "utils/icons/Verified"

const MeetCreators = ({ creators }: { creators: MeetCreatorInterface[] }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {creators.map((creator: MeetCreatorInterface, key: number) => (
          <Link
            key={key}
            className="relative flex h-[230px] w-full items-end overflow-hidden rounded-8 bg-grey-20 p-14"
            to={URL.MEET.PROFILE.replace(":param", creator.handle)}
          >
            <Wrapper open={creator.avatar}>
              <div className="absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform">
                {creator.avatar}
              </div>
            </Wrapper>
            <Wrapper open={creator.professional}>
              <div className="absolute top-14 left-14 flex h-18 items-center rounded-4 bg-white-40 px-6 text-10 font-bold text-white">
                PRO
              </div>
            </Wrapper>
            <div
              style={{
                background: "linear-gradient(186.76deg, rgba(0, 0, 0, 0) 35.61%, #000000 94.7%)"
              }}
              className="absolute left-0 top-[50%] h-[50%] w-full"
            ></div>
            <div className="relative w-full">
              <div className="mb-6 flex w-full justify-start">
                <div className="relative max-w-full truncate overflow-ellipsis pr-20 text-14 font-bold text-white">
                  {creator.userName}
                  <WrapperVerified>{creator.verified ? <Verified color="white" size={16} /> : ""}</WrapperVerified>
                </div>
              </div>
              <div className="justify-between2 flex w-full space-x-[1px]">
                <div className="w-full text-12 font-bold text-white-40">{MeetCreatorType[creator.type]}</div>
                <div className="w-full text-12 font-bold text-white">
                  <NumberFormat displayType={"text"} prefix={"$"} value={creator.priceFrom} thousandSeparator />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default MeetCreators
