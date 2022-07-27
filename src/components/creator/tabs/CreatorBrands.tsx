import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import CreatorTabBrand from "components/creator/tabs/CreatorTabBrand"
import ModalInfoVideoBrands from "components/modals/info/ModalInfoVideoBrands"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useState } from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonGreyDimm from "utils/buttons/grey/ButtonGreyDimm"

const CreatorBrands = () => {
  const { brands } = useProps()

  const [openInfo, setOpenInfo] = useState(false)
  const [show, setShow] = useState(false)

  const closeInfo = () => {
    setOpenInfo(false)
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"Your clubs"} />
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
          List all of the clubs that are attached to your account, manage them by clicking the &quot;gear&quot; icon
        </div>
        {brands.length > 0 ? (
          <>
            <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
              {brands
                .filter((brand: any, key: number) => show || (!show && key <= 1))
                .map((brand: any, key: number) => (
                  <CreatorTabBrand key={key} brand={brand} />
                ))}
            </div>
            <Wrapper open={brands.length > 2}>
              <div className="mt-20 w-full" onClick={() => setShow(!show)}>
                <ButtonGreyDimm title={show ? "Show less clubs" : "Show more clubs"} />
              </div>
            </Wrapper>
          </>
        ) : (
          <ButtonPurple action={URL.CREATOR.CLUB.ADD} title={"Add club"} full />
        )}
      </CreatorSection>
      <ModalInfoVideoBrands handler={closeInfo} open={openInfo} />
    </>
  )
}

export default CreatorBrands
