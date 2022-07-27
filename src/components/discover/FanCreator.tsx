import { getCreatorsCategories } from "api/endpoints/fanDiscover"
import SocialsBg from "assets/img/socials/socials.png"
import FanCreatorCard from "components/discover/FanCreatorCard"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProfileInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const FanCreatorSection = ({ value }: { value: any }) => {
  const { token } = useProps()

  const [profile, setProfile] = useState({})
  const [profiles, setProfiles] = useState<ProfileInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    onLoad()
  }, [value])

  const onLoad = async () => {
    let data = {
      categoriesList: value
    }

    const result = await getCreatorsCategories(token, data)
    if (result.status) {
      setProfiles(result.data)
    }
  }

  const history = useHistory()

  return (
    <div>
      <h2 className="mt-0 mb-4 text-24 font-black text-black">Creators</h2>
      <p className="font-14 mt-0 mb-30 text-grey-40">We think you might like</p>
      <div className="relative mb-30 w-full rounded-4 bg-white p-20 pr-20 shadow-lg lg:pr-220">
        <p className="m-0 text-14 leading-[22px] text-grey-40">
          Discover creators you already know from other platforms on Properfans, head to{" "}
          <span className="font-bold text-purple">Connections</span> and link your socials and platforms
        </p>
        <img alt="socials" className="absolute top-0 right-0 hidden lg:flex" src={SocialsBg} />
      </div>
      <div className="mb-20 grid w-full grid-cols-1 gap-12 lg:grid-cols-4">
        {profiles.map((profile) => (
          <FanCreatorCard key={profile.id} creator={profile} selectedCategory={value} />
        ))}
      </div>
      <div
        className="mb-50 w-full cursor-pointer rounded-4 bg-grey-3 py-6 text-center text-12 font-bold leading-normal text-grey-40"
        onClick={() => history.push(URL.FAN.DISCOVER.CREATORS)}
      >
        Show more creators
      </div>
    </div>
  )
}

export default FanCreatorSection
