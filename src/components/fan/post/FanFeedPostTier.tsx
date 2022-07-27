import { parseTier } from "api/integration/functions"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import { SubscriptionTierType } from "libs/enums"
import { FeedInterface } from "libs/interfaces"
import React from "react"
import { BiWorld } from "react-icons/bi"

const FanFeedPostTier = ({ post }: { post: FeedInterface }) => {
  return (
    <>
      <button className="group flex h-24 items-center justify-center space-x-[8px] rounded-full border-2 border-purple-20 bg-purple-5 pl-4 pr-6 text-12 font-bold text-purple hover:bg-purple lg:h-28 lg:pl-8 lg:pr-10">
        {
          {
            [SubscriptionTierType.Tier0]: <BiWorld className="text-16 text-purple group-hover:text-white" />,
            [SubscriptionTierType.Tier1]: <Tier1 className="h-16 w-16" />,
            [SubscriptionTierType.Tier2]: <Tier2 className="h-16 w-16" />,
            [SubscriptionTierType.Tier3]: <Tier3 className="h-16 w-16" />,
            [SubscriptionTierType.Tier4]: <Tier4 className="h-16 w-16" />
          }[post.tier]
        }
        <span className="item-center flex justify-center text-12 text-purple group-hover:text-white">
          {post.tier !== SubscriptionTierType.Tier0 ? (
            <>
              <span className="mr-4 hidden text-12 group-hover:text-white sm:flex">Tier</span> {parseTier(post.tier)}
            </>
          ) : (
            <>Public</>
          )}
        </span>
      </button>
    </>
  )
}

export default FanFeedPostTier
