import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md"

const MeetReviewStar = ({ index, stars }: { index: number; stars: number }) => {
  return (
    <>
      <div className="flex">
        <Wrapper open={index <= stars}>
          <MdStar className="text-24 text-green" />
        </Wrapper>
        <Wrapper open={index - 1 < stars && stars < index}>
          <MdStarHalf className="text-24 text-green" />
        </Wrapper>
        <Wrapper open={stars <= index - 1}>
          <MdStarBorder className="text-24 text-green" />
        </Wrapper>
      </div>
    </>
  )
}

export default MeetReviewStar
