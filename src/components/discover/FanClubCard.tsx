import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import FanCategories from "components/discover/FanCategories"
import { SubscriptionTierType } from "libs/enums"
import { CreatorFanInterface } from "libs/interfaces"
import React, { useState } from "react"
import { BiWorld } from "react-icons/bi"
import { MdOutlineMoreVert, MdDoNotDisturb, MdOutlineVisibilityOff } from "react-icons/md"
import PopupWrapper from "utils/elements/PopupWrapper"

const FanClubCard = ({ club, selectedCategory }: { club: CreatorFanInterface; selectedCategory: string }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="group relative flex flex-col items-center rounded-[3px] border-1 border-grey-10 px-10 pb-10 pt-52">
      <div className="absolute top-0 left-0 z-0 h-full w-full opacity-[0.28]">
        <img alt="banner" className="h-full w-full object-cover" src={club.banner} />
      </div>
      <div className="pointer-events-none absolute bottom-40 left-0 z-0 h-[155px] w-full bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 z-0 h-40 w-full bg-white"></div>
      <div className="absolute top-10 left-10 z-10 flex h-20 items-center rounded-4 bg-white px-6 text-12 font-bold text-black shadow-lg">
        $7.49
      </div>
      <div className="absolute top-10 right-10 hidden cursor-pointer text-16 text-grey-30 group-hover:block">
        <MdOutlineMoreVert onClick={() => setVisible(true)} />
        <PopupWrapper handler={setVisible} open={visible}>
          <div className="absolute w-[155px] rounded-4 bg-white p-6 shadow-lg">
            <ul className="m-0 p-0">
              <li className="flex h-34 cursor-pointer items-center rounded-4 bg-white pl-11 hover:bg-grey-3">
                <div className="mr-8 flex items-center text-20 text-grey-20">
                  <MdOutlineVisibilityOff />
                </div>
                <div className="text-12 font-bold text-black">Not Interested</div>
              </li>
              <li className="flex h-34 cursor-pointer items-center rounded-4 bg-white pl-11 hover:bg-grey-3">
                <div className="mr-8 flex items-center text-20 text-grey-20">
                  <MdDoNotDisturb />
                </div>
                <div className="text-12 font-bold text-black">Block Creator</div>
              </li>
            </ul>
          </div>
        </PopupWrapper>
      </div>
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="mb-14 h-62 w-62 overflow-hidden rounded-full">
          <img alt="avatar" className="h-62 w-62" src={club.avatar} />
        </div>
        <div className="mb-10 flex w-full items-center justify-center text-14 font-bold text-black">
          <div className="truncate">{club.userName}</div>
        </div>
        <div className="mb-16 flex h-18 w-18 items-center justify-center text-18">
          {
            {
              [SubscriptionTierType.Tier0]: <BiWorld className="text-purple" />,
              [SubscriptionTierType.Tier1]: <Tier1 />,
              [SubscriptionTierType.Tier2]: <Tier2 />,
              [SubscriptionTierType.Tier3]: <Tier3 />,
              [SubscriptionTierType.Tier4]: <Tier4 />
            }[club.tier]
          }
        </div>
        <FanCategories categories={club.owner ? club.owner.favCategoryList : []} selectedCategory={selectedCategory} />
        <div className="mt-20 flex w-full items-center justify-center rounded-4 bg-grey-3 py-2">
          <div className="flex items-center">
            <div className="h-26 w-26 overflow-hidden rounded-full border-3 border-grey-3">
              <img alt="avatar1" className="h-full w-full object-cover" src="https://i.pravatar.cc/62?u=21" />
            </div>
            <div className="-ml-10 h-26 w-26 overflow-hidden rounded-full border-3 border-grey-3">
              <img alt="avatar2" className="h-full w-full object-cover" src="https://i.pravatar.cc/62?u=31" />
            </div>
            <div className="-ml-10 h-26 w-26 overflow-hidden rounded-full border-3 border-grey-3">
              <img alt="avatar3" className="h-full w-full object-cover" src="https://i.pravatar.cc/62?u=41" />
            </div>
          </div>
          <div className="ml-8 flex items-center text-12 font-bold text-grey-40">
            <div className="text-black">612</div>&nbsp;Properfans
          </div>
        </div>
      </div>
    </div>
  )
}

export default FanClubCard
