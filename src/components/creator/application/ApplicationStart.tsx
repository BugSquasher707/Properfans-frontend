import { totalUsers } from "api/endpoints/status"
import { useProps } from "contexts/PropsContext"
import { ApplicationTabType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { MdAccessTime } from "react-icons/md"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import CheckList from "utils/lists/CheckList"
import PatternCounter from "utils/pattern/PatternCounter"

const ApplicationStart = ({ handler }: { handler: any }) => {
  const { token } = useProps()

  const [requirements] = useState([
    { title: "Verified e-mail address on Properfans" },
    { title: "Verified phone number on Properfans" },
    { title: "50,000 followers on at least 1 platform" },
    { title: "Comply to our guidelines and terms of service" }
  ])

  const [count, setCount] = useState(0)

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await totalUsers()

    if (result && mounted) {
      setCount(result.count)
    }
  }

  return (
    <>
      <div className="align-start flex w-520 max-w-full flex-wrap">
        <div className="mb-12 w-full text-center text-24 font-bold text-black">Apply as a creator on Properfans</div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
          Take your chance and become a creator on the platform. Create content for your proper fans and monetize it.
          Let the creation begin
        </div>
        <div className="mb-20 w-full">
          <PatternCounter data={{ title: "Total users", text: `${count}` }} />
        </div>
        <div className="mb-20 w-full rounded-4 border-1 border-grey-12 p-20 shadow-sm md:mb-40">
          <div className="mb-16 w-full text-16 font-bold text-black">Requirements to apply</div>
          <div className="mb-20 w-full text-14 text-grey-40">
            Why do we have such requirements? To ensure that we are in the capacity of assisting all the creators on the
            Properfans platform
          </div>
          <CheckList data={requirements} />
        </div>
        <div className="mb-20 w-full md:mb-30">
          <ButtonPurple action={() => handler(ApplicationTabType.Discover)} title={"Begin Application"} full />
        </div>
        <div className="center flex w-full">
          <MdAccessTime className="mr-6 text-16 text-grey-40" />
          <div className="text-14 text-grey-40">
            On average it takes <span className="font-bold text-purple">5 minutes</span> to apply
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationStart
