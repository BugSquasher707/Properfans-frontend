import { ReactComponent as LogoWhite } from "assets/img/logo_white_full.svg"
import { BrandFeatureType } from "libs/enums"
import { BrandFeatureInterface } from "libs/interfaces"
import React from "react"
import { AiFillShopping } from "react-icons/ai"
import { MdLockOpen, MdLockOutline, MdMarkChatUnread } from "react-icons/md"
import { RiLiveFill } from "react-icons/ri"

const CreatorBrandFeature = ({ feature }: { feature: BrandFeatureInterface }) => {
  return (
    <>
      <button
        className={`relative grid w-full cursor-pointer grid-cols-1 gap-16 rounded-4 p-20 ${
          feature.unlocked ? "border-1 border-grey-12 bg-white" : "bg-grey-6"
        }`}
      >
        <div className="grid w-full grid-cols-1 items-center gap-14 sm:grid-cols-[1fr,auto]">
          <div className="grid w-full grid-cols-[auto,1fr] gap-14">
            <div
              className={`flex h-40 w-40 items-center justify-center rounded-4 ${
                feature.unlocked ? "bg-purple" : "bg-grey-30"
              }`}
            >
              {
                {
                  [BrandFeatureType.Basic]: <LogoWhite className="w-22 text-white" />,
                  [BrandFeatureType.Live]: <RiLiveFill className="text-22 text-white" />,
                  [BrandFeatureType.Meet]: <MdMarkChatUnread className="text-22 text-white" />,
                  [BrandFeatureType.Shops]: <AiFillShopping className="text-22 text-white" />
                }[feature.type]
              }
            </div>
            <div className="grid w-full grid-cols-1 gap-2">
              <div className="w-full text-left text-14 font-bold text-black">
                Properfans {BrandFeatureType[feature.type]}
              </div>
              {feature.unlocked ? <div className="w-full text-left text-12 text-grey-40">{feature.unlocked}</div> : ""}
            </div>
          </div>
          {feature.unlocked ? (
            <div className="flex items-center justify-start space-x-[8px] sm:justify-center">
              <MdLockOpen className="text-16 text-purple" />
              <span className="text-12 font-bold text-purple">Unlocked</span>
            </div>
          ) : (
            <div className="flex items-center justify-start space-x-[8px] sm:justify-center">
              <MdLockOutline className="text-16 text-grey-40" />
              <span className="text-12 font-bold text-grey-40">Locked</span>
            </div>
          )}
        </div>

        <div className="flex w-full items-center justify-between gap-12">
          <div
            className={`flex items-center space-x-[6px] text-12 font-bold ${
              feature.unlocked ? "text-purple" : "text-grey-40"
            }`}
          >
            Status
          </div>
          <div
            className={`flex items-center space-x-[6px] text-12 font-bold ${
              feature.unlocked ? "text-purple" : "text-grey-40"
            }`}
          >
            {
              {
                [BrandFeatureType.Basic]: "Unlocked",
                [BrandFeatureType.Live]: "Coming soon",
                [BrandFeatureType.Meet]: "Coming soon",
                [BrandFeatureType.Shops]: "Coming soon"
              }[feature.type]
            }
          </div>
        </div>
      </button>
    </>
  )
}

export default CreatorBrandFeature
