import WrapperFan from "components/wrappers/WrapperFan"
import { URL } from "libs/constants"
import { CreatorDropdownType } from "libs/enums"
import React from "react"
import { Redirect } from "react-router-dom"
import RouteDashboard from "router/route/RouteDashboard"
import FanClubs from "views/fan/FanClubs"
import FanDiscover from "views/fan/FanDiscover"
import FanFeed from "views/fan/FanFeed"
import FanInvite from "views/fan/FanInvite"
import FanOrder from "views/fan/FanOrder"
import FanOrders from "views/fan/FanOrders"
import FanPost from "views/fan/FanPost"
import FanShop from "views/fan/FanShop"

export default [
  {
    component: (
      <RouteDashboard key={"fan"} path={URL.FAN.BASE} exact>
        <Redirect to={URL.FAN.FEED} />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan cart failure"} path={URL.FAN.CART.FAILURE} exact>
        <WrapperFan>
          <FanOrder failure={true} success={false} />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan cart order"} path={URL.FAN.CART.ORDER} exact>
        <WrapperFan>
          <FanOrder failure={false} success={false} />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan cart orders"} path={URL.FAN.CART.ORDERS} exact>
        <WrapperFan>
          <FanOrders />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan cart success"} path={URL.FAN.CART.SUCCESS} exact>
        <WrapperFan>
          <FanOrder failure={false} success={true} />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan clubs"} path={URL.FAN.CLUBS.BASE} exact>
        <WrapperFan>
          <FanClubs tab={CreatorDropdownType.All} />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan clubs following"} path={URL.FAN.CLUBS.FOLLOWING} exact>
        <WrapperFan>
          <FanClubs tab={CreatorDropdownType.Followed} />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan clubs subscriptions"} path={URL.FAN.CLUBS.SUBSCRIPTIONS} exact>
        <WrapperFan>
          <FanClubs tab={CreatorDropdownType.Subscribed} />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan feed"} path={URL.FAN.FEED} exact>
        <WrapperFan>
          <FanFeed />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan invite"} path={URL.FAN.INVITE} exact>
        <WrapperFan>
          <FanInvite />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan post"} path={URL.FAN.POST}>
        <WrapperFan back={{ link: URL.FAN.FEED, title: "Back to Feed" }}>
          <FanPost />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan shop"} path={URL.FAN.SHOP} exact>
        <WrapperFan>
          <FanShop />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan story"} path={URL.FAN.STORY} exact>
        <WrapperFan>
          <FanFeed />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan tip"} path={URL.FAN.TIP}>
        <WrapperFan back={{ link: URL.FAN.FEED, title: "Back to Feed" }}>
          <FanPost />
        </WrapperFan>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"fan discover"} path={URL.FAN.DISCOVER.BASE} exact>
        <WrapperFan>
          <FanDiscover />
        </WrapperFan>
      </RouteDashboard>
    )
  }
]
