import CreatorBrandSocial from "components/creator/brand/CreatorBrandSocial"
import CreatorTitle from "components/creator/CreatorTitle"
import { BrandSocialType } from "libs/enums"
import { BrandSocialInterface, SocialInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const CreatorBrandSocials = ({ brand, socials }: { brand: any; socials?: SocialInterface }) => {
  const [links, setLinks] = useState<BrandSocialInterface[]>()

  useEffect(() => {
    onLink()
  }, [socials])

  const onLink = () => {
    if (socials) {
      const newLinks = []

      const socialInstagram = false
      const socialSpotify = false
      const socialTiktok = false
      const socialTwitch = true
      const socialTwitter = false
      const socialYoutube = false

      if (socials.instagram && socialInstagram) {
        newLinks.push({
          type: BrandSocialType.Instagram,
          link: socials.instagram.url,
          name: socials.instagram.name
        })
      }

      if (socials.spotify && socialSpotify) {
        newLinks.push({
          type: BrandSocialType.Spotify,
          link: socials.spotify.url,
          name: socials.spotify.name
        })
      }

      if (socials.tiktok && socialTiktok) {
        newLinks.push({
          type: BrandSocialType.TikTok,
          link: socials.tiktok.url,
          name: socials.tiktok.name
        })
      }

      if (socials.twitch && socialTwitch) {
        newLinks.push({
          type: BrandSocialType.Twitch,
          link: socials.twitch.url,
          name: socials.twitch.name
        })
      }

      if (socials.twitter && socialTwitter) {
        newLinks.push({
          type: BrandSocialType.Twitter,
          link: socials.twitter.url,
          name: socials.twitter.name
        })
      }

      if (socials.youtube && socialYoutube) {
        newLinks.push({
          type: BrandSocialType.YouTube,
          link: socials.youtube.url,
          name: socials.youtube.name
        })
      }

      setLinks(newLinks)
    }
  }

  const onRemove = (index: number) => {
    if (links) {
      const newLinks = [...links]
      const newLink = { ...newLinks[index] }

      newLink.link = ""
      newLink.name = ""

      newLinks[index] = newLink
      setLinks(newLinks)
    }
  }

  return (
    <>
      <CreatorTitle title={"Socials"} />
      <div className="mb-20 w-full text-14 text-grey-40">Link your other socials to showcase them on the profile</div>
      {links && links.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {links.map((social: BrandSocialInterface, key: number) => (
            <CreatorBrandSocial key={key} brand={brand} handler={onRemove} index={key} social={social} />
          ))}
        </div>
      ) : (
        <div className="mb-20 flex h-[250px] w-full items-center justify-center text-14 font-bold text-grey-40 md:mb-30">
          No social media found
        </div>
      )}
    </>
  )
}

export default CreatorBrandSocials
