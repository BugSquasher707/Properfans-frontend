import { getSingleClubTier } from "api/endpoints/clubTier"
import { parseTierType } from "api/integration/functions"
import CreatorBrandTierAdvanced from "components/creator/tiers/CreatorBrandTierAdvanced"
import CreatorBrandTierDetails from "components/creator/tiers/CreatorBrandTierDetails"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { OverlayType } from "libs/enums"
import { TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

type ParamType = {
  id: string
  param: string
}

const CreatorBrandTier = ({ add }: { add: boolean }) => {
  const { brandActive, token, setOverlay } = useProps()

  const history = useHistory()

  const [advanced] = useState(false)

  const { id, param } = useParams<ParamType>()

  const [tier, setTier] = useState<TierInterface>({
    id: "",
    priceId: "",
    tierName: "",
    tierLevel: parseTierType(parseInt(id)),
    image: "",
    price: 0,
    perks: [],
    popular: false
  })

  useEffect(() => {
    onProfile()
  }, [])

  const onProfile = async () => {
    if (!brandActive.id) {
      setOverlay(OverlayType.NotFound)
      return
    }

    if (brandActive.id && !add) {
      onLoad()
    }
  }

  const onLoad = async () => {
    const result = await getSingleClubTier(token, brandActive.id, id)

    if (result.data) {
      setTier(result.data)
    } else {
      history.push(URL.CREATOR.TIER.ADD.replace(":param", param).replace(":id", `${id}`))
    }
  }

  return (
    <>
      {tier && brandActive.id ? (
        <>
          <CreatorBrandTierDetails add={add} id={id} param={param} profile={brandActive} tier={tier} />
          <Wrapper open={advanced && !add}>
            <CreatorBrandTierAdvanced tier={tier} />
          </Wrapper>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default CreatorBrandTier
