import { statusApi } from "api/endpoints/status"
import { openUrlExtern } from "api/integration/functions"
import { useProps } from "contexts/PropsContext"
import { BrandSocialType } from "libs/enums"
import { BrandSocialInterface, ProfileInterface } from "libs/interfaces"
import React from "react"
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import { IoMdTrash } from "react-icons/io"
import { MdCheck, MdLink } from "react-icons/md"
import { SiSpotify, SiTiktok } from "react-icons/si"

const CreatorBrandSocial = ({
  brand,
  social,
  index,
  handler
}: {
  brand: ProfileInterface
  social: BrandSocialInterface
  index: number
  handler: any
}) => {
  const { token } = useProps()

  const onUrl = () => {
    // TODO: Integrate url

    openUrlExtern("")
  }

  const onRemove = async () => {
    console.log(brand, token)

    const result = await statusApi()

    if (result) {
      handler(index)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        <div className="w-full text-12 font-bold text-grey-40">{BrandSocialType[social.type]}</div>
        <div className="relative grid w-full cursor-pointer grid-cols-1 gap-16 rounded-4 border-1 border-grey-12 bg-grey-1 p-16 hover:border-purple">
          <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-16">
            {
              {
                [BrandSocialType.Instagram]: (
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-gradient-to-tr from-[#ffb740] via-[#f03863] to-[#5c3ccb]">
                    <FaInstagram className="text-20 text-white" />
                  </div>
                ),
                [BrandSocialType.Spotify]: (
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-[#1ed760]">
                    <SiSpotify className="text-20 text-white" />
                  </div>
                ),
                [BrandSocialType.TikTok]: (
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-black">
                    <SiTiktok className="text-20 text-white" />
                  </div>
                ),
                [BrandSocialType.Twitch]: (
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-[#863DFF]">
                    <FaTwitch className="text-20 text-white" />
                  </div>
                ),
                [BrandSocialType.Twitter]: (
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-[#1DA1F2]">
                    <FaTwitter className="text-20 text-white" />
                  </div>
                ),
                [BrandSocialType.YouTube]: (
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-[#FF0000]">
                    <FaYoutube className="text-20 text-white" />
                  </div>
                )
              }[social.type]
            }
            <div className="flex w-full items-center">
              <div className="grid w-full grid-cols-1 gap-2">
                <div className="w-full text-left text-14 font-bold text-black">{BrandSocialType[social.type]}</div>
                {social.link ? (
                  <div className="flex items-center justify-start space-x-[4px]">
                    <MdCheck className="text-14 text-purple" />
                    <div className="w-full truncate overflow-ellipsis text-left text-12 font-bold text-purple">
                      {social.name}
                    </div>
                  </div>
                ) : (
                  <div className="w-full text-12 font-bold text-grey-40">Not linked</div>
                )}
              </div>
            </div>
            <button
              className="flex h-24 w-24 items-center justify-center rounded-4 hover:bg-grey-10"
              onClick={() => (social.link ? onRemove() : onUrl())}
            >
              {social.link ? (
                <IoMdTrash className="text-18 text-grey-40" />
              ) : (
                <MdLink className="text-18 text-grey-40" />
              )}
            </button>
          </div>
          {social.link ? (
            <div className="flex w-full items-center justify-between gap-12">
              <div className="flex items-center space-x-[6px] text-14 font-bold text-purple">
                <FiCheck className="text-16 text-purple" />
                Authorized
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default CreatorBrandSocial
