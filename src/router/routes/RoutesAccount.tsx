import WrapperAccount from "components/wrappers/WrapperAccount"
import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import AccountBilling from "views/account/AccountBilling"
import AccountDashboard from "views/account/AccountDashboard"
import AccountInformation from "views/account/AccountInformation"
import AccountNotifications from "views/account/AccountNotifications"
import AccountProfile from "views/account/AccountProfile"
import AccountSecurity from "views/account/AccountSecurity"
import AccountSubscription from "views/account/AccountSubscription"
import AccountSubscriptions from "views/account/AccountSubscriptions"

export default [
  {
    component: (
      <RouteDashboard key={"account"} path={URL.ACCOUNT.ACCOUNT} exact>
        <WrapperAccount>
          <AccountInformation />
        </WrapperAccount>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"account billing"} path={URL.ACCOUNT.BILLING} exact>
        <WrapperAccount>
          <AccountBilling />
        </WrapperAccount>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"account dashboard"} path={URL.ACCOUNT.DASHBOARD} exact>
        <WrapperAccount>
          <AccountDashboard />
        </WrapperAccount>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"account notifications"} path={URL.ACCOUNT.NOTIFICATIONS} exact>
        <WrapperAccount>
          <AccountNotifications />
        </WrapperAccount>
      </RouteDashboard>
    )
  },

  {
    component: (
      <RouteDashboard key={"account profile"} path={URL.ACCOUNT.PROFILE} exact>
        <WrapperAccount>
          <AccountProfile />
        </WrapperAccount>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"account security"} path={URL.ACCOUNT.SECURITY} exact>
        <WrapperAccount>
          <AccountSecurity />
        </WrapperAccount>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"account subscription"} path={URL.ACCOUNT.SUBSCRIPTION} exact>
        <WrapperAccount>
          <AccountSubscription />
        </WrapperAccount>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"account subscriptions"} path={URL.ACCOUNT.SUBSCRIPTIONS} exact>
        <WrapperAccount>
          <AccountSubscriptions />
        </WrapperAccount>
      </RouteDashboard>
    )
  }
]
