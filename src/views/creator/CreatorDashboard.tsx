import CreatorTabs from "components/creator/CreatorTabs"
import { CreatorPagesType } from "libs/enums"
import React from "react"

const CreatorDashboard = ({ type }: { type: CreatorPagesType }) => {
  return (
    <>
      <CreatorTabs type={type} />
    </>
  )
}

export default CreatorDashboard
