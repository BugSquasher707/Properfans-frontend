import CreatorBrandDetails from "components/creator/brand/CreatorBrandDetails"
import CreatorBrandFeatures from "components/creator/brand/CreatorBrandFeatures"
import CreatorBrandSettings from "components/creator/brand/CreatorBrandSettings"
import CreatorBrandSocials from "components/creator/brand/CreatorBrandSocials"
import CreatorSection from "components/creator/CreatorSection"
import ModalInfoVideoBrandFeatures from "components/modals/info/ModalInfoVideoBrandFeatures"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { CreatorBrandType, OverlayType } from "libs/enums"
import { ProfileInterface, SocialInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

interface Params {
  param: string
}

const CreatorBrandSpecific = ({ type }: { type: CreatorBrandType }) => {
  const { brands, setOverlay } = useProps()

  const history = useHistory()

  const { param } = useParams<Params>()

  const [openInfo, setOpenInfo] = useState(false)
  const [add] = useState<boolean>(type === CreatorBrandType.Add)
  const [brand, setBrand] = useState<ProfileInterface>({
    id: "",
    userName: "",
    handle: "",
    verified: false,
    avatar: "",
    banner: "",
    biography: ""
  })

  const [socials] = useState<SocialInterface>()

  useEffect(() => {
    if (type === CreatorBrandType.Edit) {
      onLoad()
    }
  }, [])

  const onLoad = async () => {
    if (!param) {
      history.push(URL.CREATOR.BASE)
      return
    }

    const newBrand = brands.find((entry: ProfileInterface) => entry.handle === param)

    if (!newBrand) {
      setOverlay(OverlayType.Search)
      return
    }

    setBrand(newBrand)

    //   setSocials({
    //     instagram: result.brand.instagram,
    //     spotify: result.brand.spotify,
    //     tiktok: result.brand.tiktok,
    //     twitch: result.brand.twitch,
    //     twitter: result.brand.twitter,
    //     youtube: result.brand.youtube
    //   })
  }

  const closeInfo = () => {
    setOpenInfo(false)
  }

  return (
    <>
      <div className="relative grid w-full grid-cols-1 gap-12 sm:gap-20 md:gap-30">
        <CreatorSection>
          <CreatorBrandDetails brand={brand} isUser={false} title={"Details"} type={type} />
        </CreatorSection>
        {brand ? (
          <>
            <Wrapper open={!add}>
              <CreatorSection>
                <CreatorBrandSettings id={brand.id} />
              </CreatorSection>
              <CreatorSection>
                <CreatorBrandSocials brand={brand} socials={socials} />
              </CreatorSection>
              <CreatorSection>
                <CreatorBrandFeatures />
              </CreatorSection>
            </Wrapper>
          </>
        ) : (
          ""
        )}
      </div>
      <ModalInfoVideoBrandFeatures handler={closeInfo} open={openInfo} />
    </>
  )
}

export default CreatorBrandSpecific
