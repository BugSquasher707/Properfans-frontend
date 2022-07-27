import WrapperChat from "components/wrappers/WrapperChat"
import ChatProvider from "contexts/ChatContext"
import { URL } from "libs/constants"
import { ChatType } from "libs/enums"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"

export default [
  {
    component: (
      <RouteDashboard key={"chat"} path={URL.CHAT.BASE} exact>
        <ChatProvider>
          <WrapperChat type={ChatType.Dm} />
        </ChatProvider>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"chat channel"} path={URL.CHAT.CHANNEL} exact>
        <ChatProvider>
          <WrapperChat type={ChatType.Dm} />
        </ChatProvider>
      </RouteDashboard>
    )
  }
]
