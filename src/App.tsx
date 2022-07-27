import Animations from "components/animations/Animations"
import ScrollToTop from "components/global/ScrollToTop"
import Modals from "components/modals/context/Modals"
import OverlayLoading from "components/overlays/OverlayLoading"
import OverlayMaintenance from "components/overlays/OverlayMaintenance"
import Toaster from "components/toaster/Toaster"
import WrapperRoute from "components/wrappers/WrapperRoute"
import WrapperRouter from "components/wrappers/WrapperRouter"
import { useProps } from "contexts/PropsContext"
import { ENVIRONMENT } from "libs/constants"
import { ThemeType } from "libs/enums"
import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesAccount from "router/routes/RoutesAccount"
import RoutesApplication from "router/routes/RoutesApplication"
import RoutesAuth from "router/routes/RoutesAuth"
import RoutesBrands from "router/routes/RoutesBrands"
import RoutesChat from "router/routes/RoutesChat"
import RoutesCommunity from "router/routes/RoutesCommunity"
import RoutesCreator from "router/routes/RoutesCreator"
import RoutesFan from "router/routes/RoutesFan"
import RoutesFriends from "router/routes/RoutesFriends"
import RoutesGuest from "router/routes/RoutesGuest"
import RoutesGuideLines from "router/routes/RoutesGuideLines"
import RoutesInformation from "router/routes/RoutesInformation"
import RoutesLanding from "router/routes/RoutesLanding"
import RoutesLive from "router/routes/RoutesLive"
import RoutesMeet from "router/routes/RoutesMeet"
import RoutesPolicies from "router/routes/RoutesPolicies"
import RoutesSetup from "router/routes/RoutesSetup"
import RoutesStream from "router/routes/RoutesStream"
import RoutesSubscribe from "router/routes/RoutesSubscribe"
import RoutesUsers from "router/routes/RoutesUsers"
import RoutesWiki from "router/routes/RoutesWiki"

const App = () => {
  const { loading, path, theme } = useProps()

  const [transparent] = useState(path.includes("/stream/"))

  if (ENVIRONMENT === "production") {
    return (
      <>
        <OverlayMaintenance />
      </>
    )
  }

  if (loading) {
    return <OverlayLoading />
  }

  return (
    <>
      <div
        className={`min-h-screen relative w-screen min-w-[300px] ${transparent ? "" : "bg-white"} ${
          theme === ThemeType.Dark ? "dark" : "light"
        }`}
      >
        <div className="min-h-screen w-full overflow-hidden">
          <Router>
            <ScrollToTop />
            <WrapperRoute>
              <WrapperRouter>
                {RoutesAccount.map((props) => props.component)}
                {RoutesApplication.map((props) => props.component)}
                {RoutesAuth.map((props) => props.component)}
                {RoutesBrands.map((props) => props.component)}
                {RoutesChat.map((props) => props.component)}
                {RoutesCommunity.map((props) => props.component)}
                {RoutesCreator.map((props) => props.component)}
                {RoutesFan.map((props) => props.component)}
                {RoutesFriends.map((props) => props.component)}
                {RoutesGuest.map((props) => props.component)}
                {RoutesGuideLines.map((props) => props.component)}
                {RoutesInformation.map((props) => props.component)}
                {RoutesLive.map((props) => props.component)}
                {RoutesMeet.map((props) => props.component)}
                {RoutesPolicies.map((props) => props.component)}
                {RoutesSetup.map((props) => props.component)}
                {RoutesStream.map((props) => props.component)}
                {RoutesSubscribe.map((props) => props.component)}
                {RoutesUsers.map((props) => props.component)}
                {RoutesWiki.map((props) => props.component)}
                {RoutesLanding.map((props) => props.component)}
              </WrapperRouter>
            </WrapperRoute>
            <Animations />
            <Modals />
            <Toaster />
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
