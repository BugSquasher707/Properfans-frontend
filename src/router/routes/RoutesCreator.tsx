import WrapperCreator from "components/wrappers/WrapperCreator"
import { URL } from "libs/constants"
import { CreatorBrandType, CreatorPagesType } from "libs/enums"
import React from "react"
import { Redirect } from "react-router-dom"
import RouteDashboard from "router/route/RouteDashboard"
import CreatorBrand from "views/creator/CreatorBrand"
import CreatorBrandTier from "views/creator/CreatorBrandTier"
import CreatorBrandTiers from "views/creator/CreatorBrandTiers"
import CreatorDashboard from "views/creator/CreatorDashboard"
import CreatorStatistics from "views/creator/CreatorStatistics"

export default [
  {
    component: (
      <RouteDashboard key={"creator"} path={URL.CREATOR.BASE} creator exact>
        <Redirect to={URL.CREATOR.DASHBOARD.BASE} />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator club add"} path={URL.CREATOR.CLUB.ADD} creator exact>
        <WrapperCreator title={"Add club"}>
          <CreatorBrand type={CreatorBrandType.Add} />
        </WrapperCreator>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator tier add"} path={URL.CREATOR.TIER.ADD} creator exact>
        <WrapperCreator title={"Subscription tiers"}>
          <CreatorBrandTier add={true} />
        </WrapperCreator>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator club edit"} path={URL.CREATOR.CLUB.EDIT} creator exact>
        <WrapperCreator title={"Edit club"}>
          <CreatorBrand type={CreatorBrandType.Edit} />
        </WrapperCreator>
      </RouteDashboard>
    )
  },

  {
    component: (
      <RouteDashboard key={"creator club statistics"} path={URL.CREATOR.CLUB.STATISTICS} creator exact>
        <WrapperCreator title={"Statistics"}>
          <CreatorStatistics />
        </WrapperCreator>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator tier"} path={URL.CREATOR.TIER.GET} creator exact>
        <WrapperCreator title={"Subscription tiers"}>
          <CreatorBrandTier add={false} />
        </WrapperCreator>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator tiers"} path={URL.CREATOR.TIER.TIERS} creator exact>
        <WrapperCreator title={"Subscription tiers"}>
          <CreatorBrandTiers />
        </WrapperCreator>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator dashboard base"} path={URL.CREATOR.DASHBOARD.BASE} creator exact>
        <Redirect to={URL.CREATOR.DASHBOARD.CLUBS} />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator dashboard personal"} path={URL.CREATOR.DASHBOARD.PERSONAL} creator exact>
        <WrapperCreator title={"Dashboard"}>
          <CreatorDashboard type={CreatorPagesType.Personal} />
        </WrapperCreator>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"creator dashboard clubs"} path={URL.CREATOR.DASHBOARD.CLUBS} creator exact>
        <WrapperCreator title={"Manage clubs"}>
          <CreatorDashboard type={CreatorPagesType.Brands} />
        </WrapperCreator>
      </RouteDashboard>
    )
  }
]
