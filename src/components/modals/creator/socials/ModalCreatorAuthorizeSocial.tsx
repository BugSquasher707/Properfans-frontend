import { BrandSocialType } from "libs/enums"
import { BrandAuthorizeInterface } from "libs/interfaces"
import React from "react"
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import { SiSpotify, SiTiktok } from "react-icons/si"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonRed from "utils/buttons/colors/ButtonRed"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalCreatorAuthorizeSocial = ({
  social,
  open,
  handler,
  list
}: {
  social: BrandAuthorizeInterface
  open: boolean
  handler: any
  list: any
}) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pt-40 pb-20 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <div className="flex h-40 w-40 items-center justify-center">
              {
                {
                  [BrandSocialType.Instagram]: <FaInstagram className="text-40 text-purple" />,
                  [BrandSocialType.Spotify]: <SiSpotify className="text-40 text-purple" />,
                  [BrandSocialType.TikTok]: <SiTiktok className="text-40 text-purple" />,
                  [BrandSocialType.Twitch]: <FaTwitch className="text-40 text-purple" />,
                  [BrandSocialType.Twitter]: <FaTwitter className="text-40 text-purple" />,
                  [BrandSocialType.YouTube]: <FaYoutube className="text-40 text-purple" />
                }[social.type]
              }
            </div>
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">
            Authorizing {BrandSocialType[social.type]}
          </div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
            Let&apos;s authorize your {BrandSocialType[social.type]} account in a few simple steps.
          </div>
          <div className="mb-12 w-full">
            <ButtonRed action={() => null} icon={<FiCheck className="text-white" />} title={"Authorize"} full />
          </div>
          <div className="grid w-full grid-cols-2 gap-12">
            <ButtonPurple action={list} title={"Accounts List"} full />
            <button
              className="h-42 w-full text-14 font-bold text-grey-40 hover:text-black"
              onClick={() => handler(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalCreatorAuthorizeSocial
