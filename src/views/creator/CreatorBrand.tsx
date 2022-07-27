import CreatorBrandSpecific from "components/creator/CreatorBrandSpecific"
import { CreatorBrandType } from "libs/enums"
import React from "react"

const CreatorBrand = ({ type }: { type: CreatorBrandType }) => {
  return (
    <>
      <CreatorBrandSpecific type={type} />
    </>
  )
}

export default CreatorBrand
