import { getAllClubTiers } from "api/endpoints/clubTier"
import { ReactComponent as Subs } from "assets/img/subs.svg"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { SubscriptionTierType } from "libs/enums"
import { OptionTypeInterface, ProfileInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"
import TooltipBackground from "utils/modals/TooltipBackground"

const FanFeedPostingTop = ({
  brand,
  tier,
  handler
}: {
  brand: ProfileInterface
  tier: SubscriptionTierType
  handler: any
}) => {
  const { brandActive, token } = useProps()

  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(true)

  const [tierPublic] = useState<OptionTypeInterface>({
    title: "All Followers",
    type: SubscriptionTierType.Tier0
  })

  const [tiers, setTiers] = useState<OptionTypeInterface[]>([tierPublic])

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [brandActive])

  const onLoad = async () => {
    if (!brand) {
      return
    }

    const result = await getAllClubTiers(token, brandActive.id)

    if (result?.data && mounted) {
      setTiers([
        tierPublic,
        ...result.data.map((entry: TierInterface) => ({
          title: entry.tierName,
          type: entry.tierLevel
        }))
      ])
    }
  }

  const onTier = (active: SubscriptionTierType) => {
    if (active === SubscriptionTierType.Tier0) {
      return "All Followers"
    } else {
      return `Tier ${active}`
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-[auto,1fr] items-center gap-14 p-2">
        <div className="h-32 w-32">
          {brand.avatar ? <img alt="" className="h-32 w-32 rounded-full" src={brand.avatar} /> : <Avatar size={32} />}
        </div>
        <div className="grid w-full grid-cols-1 gap-4">
          <div className="w-full text-14 font-bold text-black">Post</div>
          <div className="flex w-full justify-start">
            <div className="relative">
              <button className="flex items-center justify-center space-x-[6px]" onClick={() => setOpen(true)}>
                <Subs className="fill-current text-12 text-purple" />
                <div className="text-12 font-bold text-grey-40">{onTier(tier)}</div>
                <div className="flex items-center justify-center">
                  <MdKeyboardArrowDown className={`text-18 text-grey-20 ${open ? "rotate-180 transform" : ""}`} />
                </div>
              </button>
              <Wrapper open={open}>
                <TooltipBackground handler={setOpen} />
                <div
                  className="absolute top-22 left-0 z-40 mt-10 w-[140px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
                  onClick={() => setOpen(false)}
                >
                  {tiers.map((option: OptionTypeInterface, key: number) => (
                    <button
                      key={key}
                      className="group my-2 flex h-36 w-full items-center space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                      onClick={() => handler(option.type)}
                    >
                      <div className="text-left text-14 font-bold text-black">{option.title}</div>
                    </button>
                  ))}
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FanFeedPostingTop
