import CreatorStatisticsDropdownAvatars from "components/creator/statistics/dropdown/CreatorStatisticsDropdownAvatars"
import CreatorBrandPickerBrands from "components/creator/wrapper/CreatorBrandPickerBrands"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useState } from "react"
import DropdownIcon from "utils/dropdowns/DropdownIcon"
import Verified from "utils/icons/Verified"
import TooltipBackground from "utils/modals/TooltipBackground"

const CreatorStatisticsDropdown = () => {
  const { brandActive } = useProps()

  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex w-full items-center justify-start text-14 sm:-my-6 sm:justify-end">
      <div className="grid max-w-full cursor-pointer grid-cols-[1fr,auto] items-center justify-center gap-12">
        <div className="grid grid-cols-[1fr,auto] items-center justify-center gap-4">
          <div className="w-full truncate overflow-ellipsis text-14 font-bold text-black">{brandActive.name}</div>
          <Verified size={14} />
        </div>
        <div
          className="flow relative grid cursor-pointer items-center justify-start gap-12"
          onClick={() => setOpen((open) => !open)}
        >
          <CreatorStatisticsDropdownAvatars activeIndex={0} avatars={[brandActive.avatar ?? ""]} />
          <DropdownIcon open={open} />
        </div>
      </div>
      <Wrapper open={open}>
        <TooltipBackground handler={setOpen} />
        <div className="absolute top-46 right-0 z-40 grid w-[258px] grid-cols-1 gap-10 rounded-4 border-1 border-grey-12 bg-white p-12 shadow-md dark:shadow-none">
          <div className="w-full text-12 text-grey-40">Your brands</div>
          <div className="w-full border-b-1 border-grey-6" />
          <CreatorBrandPickerBrands url={URL.CREATOR.CLUB.STATISTICS} />
        </div>
      </Wrapper>
    </div>
  )
}

export default CreatorStatisticsDropdown
