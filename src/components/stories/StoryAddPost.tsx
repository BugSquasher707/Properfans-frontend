import ContentTiers from "components/content/ContentTiers"
import { useProps } from "contexts/PropsContext"
import { TierInterface } from "libs/interfaces"
import React, { useState } from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const StoryAddPost = ({
  loading,
  tier,
  tiers,
  handlerRemove,
  handlerSubmit,
  handlerTier
}: {
  loading: boolean
  tier?: TierInterface
  tiers: TierInterface[]
  handlerRemove: any
  handlerSubmit: any
  handlerTier: any
}) => {
  const { brandActive } = useProps()

  const [openTiers, setOpenTiers] = useState(false)

  const onBack = () => {
    if (openTiers) {
      setOpenTiers(false)
    } else {
      handlerRemove()
    }
  }

  return (
    <>
      <div className="aspect-w-9 aspect-h-16 relative w-full rounded-4">
        <div className="w-full">
          <div className="absolute top-0 left-0 w-full bg-gradient-to-t from-transparent to-grey-40 p-14">
            <button
              className="group flex h-32 w-32 items-center justify-center rounded-4 hover:bg-grey-20"
              onClick={() => onBack()}
            >
              <AiOutlineCaretLeft className="text-16 text-white group-hover:text-black" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-grey-40">
            {openTiers ? (
              <div className="relative w-full rounded-t-4 border-t-1 border-grey-12 bg-white p-14 shadow-md">
                <ContentTiers
                  brand={brandActive}
                  handlerSubmit={handlerSubmit}
                  handlerTier={handlerTier}
                  loading={loading}
                  tier={tier}
                  tiers={tiers}
                />
              </div>
            ) : (
              <div className="w-full p-14">
                <ButtonPurple action={() => setOpenTiers(true)} title={"Continue"} full />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default StoryAddPost
