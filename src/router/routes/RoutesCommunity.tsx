import WrapperChat from "components/wrappers/WrapperChat"
import ChatProvider from "contexts/ChatContext"
import { URL } from "libs/constants"
import { ChatType } from "libs/enums"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"

export default [
  {
    component: (
      <RouteDashboard key={"community"} path={URL.COMMUNITY.BASE} exact>
        <ChatProvider>
          <WrapperChat type={ChatType.Community} />
        </ChatProvider>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"community channel"} path={URL.COMMUNITY.CHANNEL} exact>
        <ChatProvider>
          <WrapperChat type={ChatType.Community} />
        </ChatProvider>
      </RouteDashboard>
    )
  }
]
