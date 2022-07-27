import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { OverlayType } from "libs/enums"
import React from "react"
import Blocked from "views/landing/Blocked"
import Maintenance from "views/landing/Maintenance"
import NotFound from "views/landing/NotFound"
import ServerError from "views/landing/ServerError"
import Who from "views/landing/Who"
import Search from "views/search/Search"

const Overlays = () => {
  const { overlay } = useProps()

  return (
    <>
      <Wrapper open={overlay !== OverlayType.Default}>
        {
          {
            [OverlayType.Banned]: <Blocked />,
            [OverlayType.Default]: "",
            [OverlayType.Maintenance]: <Maintenance />,
            [OverlayType.NotFound]: <NotFound />,
            [OverlayType.Search]: <Search />,
            [OverlayType.Server]: <ServerError />,
            [OverlayType.Who]: <Who />
          }[overlay]
        }
      </Wrapper>
    </>
  )
}

export default Overlays
