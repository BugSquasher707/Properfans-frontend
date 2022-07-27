import { getClubsCategories } from "api/endpoints/fanDiscover"
import FanClubsSection from "components/discover/FanClubs"
import FanCreatorSection from "components/discover/FanCreator"
import FanDiscoverSection from "components/discover/FanDiscover"
import FanTagSection from "components/discover/FanTag"
import { useProps } from "contexts/PropsContext"
import { CreatorFanInterface, FanDiscoverTagInterface } from "libs/interfaces"
import React, { useState, useEffect } from "react"

const FanDiscover = () => {
  const { token } = useProps()

  const [type, setType] = useState("Sports")

  const [handles] = useState<FanDiscoverTagInterface[]>([
    { handle: "hrchonda", posts: 149 },
    { handle: "dakar2022", posts: 2400 },
    { handle: "fazeup", posts: 956 },
    { handle: "streaming", posts: 37 },
    { handle: "mightelf", posts: 200 }
  ])

  const [clubs, setClubs] = useState<CreatorFanInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    onLoad()
  }, [type])

  const onLoad = async () => {
    let data = {
      categoriesList: type
    }
    const result = await getClubsCategories(token, data)
    if (result) {
      setClubs(result.data)
    }
  }

  return (
    <div className="w-full">
      <FanDiscoverSection handler={setType} value={type} />
      <FanCreatorSection value={type} />
      <FanClubsSection clubs={clubs} value={type} />
      <FanTagSection handles={handles} />
    </div>
  )
}

export default FanDiscover
