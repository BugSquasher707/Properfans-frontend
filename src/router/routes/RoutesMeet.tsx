import WrapperMeet from "components/wrappers/WrapperMeet"
import WrapperMeetProfile from "components/wrappers/WrapperMeetProfile"
import { URL } from "libs/constants"
import { MeetProductType } from "libs/enums"
import React from "react"
import { Redirect } from "react-router-dom"
import RouteDashboard from "router/route/RouteDashboard"
import MeetDiscover from "views/meet/MeetDiscover"
import MeetOrder from "views/meet/MeetOrder"
import MeetProduct from "views/meet/MeetProduct"
import MeetProfile from "views/meet/MeetProfile"

export default [
  {
    component: (
      <RouteDashboard key={"meet"} path={URL.MEET.BASE} exact>
        <Redirect to={URL.MEET.DISCOVER} />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet discord"} path={URL.MEET.DISCOVER} exact>
        <WrapperMeet>
          <MeetDiscover />
        </WrapperMeet>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet order audiocall"} path={URL.MEET.ORDER.AUDIOCALL}>
        <WrapperMeetProfile small={true}>
          <MeetOrder type={MeetProductType.AudioCall} />
        </WrapperMeetProfile>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet order videocall"} path={URL.MEET.ORDER.VIDEOCALL}>
        <WrapperMeetProfile small={true}>
          <MeetOrder type={MeetProductType.VideoCall} />
        </WrapperMeetProfile>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet order videogreeting"} path={URL.MEET.ORDER.VIDEOGREETING}>
        <WrapperMeetProfile small={true}>
          <MeetOrder type={MeetProductType.VideoGreeting} />
        </WrapperMeetProfile>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet product call"} path={URL.MEET.PRODUCT.CALL}>
        <WrapperMeetProfile>
          <MeetProduct type={MeetProductType.AudioCall} />
        </WrapperMeetProfile>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet product video"} path={URL.MEET.PRODUCT.VIDEO}>
        <WrapperMeetProfile>
          <MeetProduct type={MeetProductType.VideoGreeting} />
        </WrapperMeetProfile>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"meet profile"} path={URL.MEET.PROFILE}>
        <WrapperMeetProfile>
          <MeetProfile />
        </WrapperMeetProfile>
      </RouteDashboard>
    )
  }
]
