import { parseTier } from "api/integration/functions"
import { ReactComponent as Subs } from "assets/img/subs.svg"
import { FeedInterface } from "libs/interfaces"
import React from "react"
import ButtonSubscribe from "utils/buttons/ButtonSubscribe"

const FanPostLocked = ({ post }: { post: FeedInterface }) => {
  return (
    <>
      <div className="relative flex h-260 w-full items-center justify-center overflow-hidden rounded-4 bg-grey-3 p-20">
        <Subs className="absolute top-[50%] left-[50%] h-[400px] w-[400px] translate-x-[-50%] translate-y-[-50%] transform fill-current text-grey-3" />
        <div className="relative w-full">
          {post.subscription !== undefined ? (
            <div className="w-full">
              <div className="mb-18 flex w-full justify-center">
                <img alt="" className="h-32 w-32" src={"/general/subs_big.png"} />
              </div>
              <div className="mb-10 w-full text-center text-14 font-bold text-black">
                Your subscription tier is not high enough to view this post
              </div>
              <div className="flex w-full justify-center">
                <div className="w-[320px] text-center text-12 text-grey-40">
                  You need to level up your subscription tier from{" "}
                  <span className="font-bold text-purple">
                    Tier {parseTier(post.subscription)} to Tier {parseTier(post.tier)}
                  </span>{" "}
                  to unlock this piece of content
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="mb-18 flex w-full justify-center">
                <img alt="" className="h-32 w-32" src={"/general/subs_big.png"} />
              </div>
              <div className="mb-10 w-full text-center text-14 font-bold text-black">
                You must unlock this exclusive content
              </div>
              <div className="mb-24 flex w-full justify-center">
                <div className="w-[320px] text-center text-12 text-grey-40">
                  Become a Properfan of {post.brand.userName}
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="w-[135px]">
                  <ButtonSubscribe />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FanPostLocked
