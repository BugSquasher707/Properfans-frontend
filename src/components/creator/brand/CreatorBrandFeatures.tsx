import CreatorBrandFeature from "components/creator/brand/CreatorBrandFeature"
import CreatorTitle from "components/creator/CreatorTitle"
import { BrandFeatureType } from "libs/enums"
import { BrandFeatureInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const CreatorBrandFeatures = () => {
  const [featureBasic] = useState<boolean>(true)
  const [featureLive] = useState<boolean>(false)
  const [featureMeet] = useState<boolean>(false)
  const [featureShops] = useState<boolean>(false)

  const [features, setFeatures] = useState<BrandFeatureInterface[]>([])

  useEffect(() => {
    setFeatures([
      { type: BrandFeatureType.Basic, unlocked: featureBasic, link: "" },
      { type: BrandFeatureType.Meet, unlocked: featureMeet, link: "" },
      { type: BrandFeatureType.Shops, unlocked: featureShops, link: "" },
      { type: BrandFeatureType.Live, unlocked: featureLive, link: "" }
    ])
  }, [featureLive, featureMeet, featureShops])

  return (
    <>
      <CreatorTitle title={"Features"} />
      <div className="mb-20 w-full text-14 text-grey-40">Your club&apos;s available features listed below</div>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        {features.map((feature: BrandFeatureInterface, key: number) => (
          <CreatorBrandFeature key={key} feature={feature} />
        ))}
      </div>
    </>
  )
}

export default CreatorBrandFeatures
