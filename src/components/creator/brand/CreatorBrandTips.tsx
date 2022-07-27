import { TitleInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdInfo } from "react-icons/md"
import NumberFormat from "react-number-format"

const CreatorBrandTips = ({ tips, brandTips }: { tips: number[]; brandTips: TitleInterface[] }) => {
  const [active, setActive] = useState<TitleInterface[]>([])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setActive(tips.map((tip: number) => brandTips[tip]))
    setPercentage(tips.length / brandTips.length)
  }, [tips])

  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12 rounded-4 bg-grey-3 py-12 px-16">
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-10">
          <MdInfo className="text-20 text-grey-20" />
          <div className="text-12 font-bold text-grey-40">
            {active.length > 0 ? (
              <>
                Finalize your{" "}
                {active.map(
                  (entry: TitleInterface, key: number) =>
                    `${active.length === 1 || key !== active.length - 1 ? "" : " and "}${entry.title}${
                      key !== active.length - 1 ? ", " : ""
                    }`
                )}
              </>
            ) : (
              <>Profile finalized</>
            )}
          </div>
        </div>
        <div className="text-14 font-bold text-purple">
          <NumberFormat
            className="text-14"
            displayType={"text"}
            value={Math.round((1 - percentage) * 100)}
            thousandSeparator
          />{" "}
          / 100%
        </div>
      </div>
    </>
  )
}

export default CreatorBrandTips
