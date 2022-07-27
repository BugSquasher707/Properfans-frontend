import MeetOrdered from "components/meet/elements/MeetOrdered"
import MeetReviewStar from "components/meet/product/MeetReviewStar"
import { MeetProductType } from "libs/enums"
import { MeetReviewInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"

const MeetReviews = () => {
  const [reviews, setReview] = useState<MeetReviewInterface[]>([])
  const [reviewsShown, setReviewsShown] = useState<MeetReviewInterface[]>([])

  const [reviewsCount, setReviewsCount] = useState(0)

  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(0)
  const [size] = useState(2)

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    setPage(0)
    setPages(Math.ceil(reviews.length / size))
  }, [reviews])

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setReviewsShown(
        reviews.filter((review: MeetReviewInterface, key: number) => page * size <= key && key < (page + 1) * size)
      )
    }
  }, [page, pages, size])

  const onLoad = async () => {
    const r1 = {
      stars: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      avatar: "",
      name: "MaestroMaestroMaestroMaestroMaestroMaestroMaestroMaestroMaestroMaestroMaestroMaestroMaestro",
      type: MeetProductType.AudioCall
    }

    setReview([r1, r1, r1, r1])
    setReviewsCount(120)
  }

  const onNext = () => {
    setPage((page + 1) % pages)
  }

  return (
    <>
      <div className="w-full px-12 lg:px-0">
        <div className="mb-20 flex w-full items-center justify-start space-x-[10px] sm:mb-24">
          <div className="text-14 font-bold text-black">Reviews</div>
          <div className="text-14 text-grey-40">{reviewsCount}</div>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1fr,auto]">
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
            {reviewsShown.map((review: MeetReviewInterface, key: number) => (
              <div key={key} className="grid w-full grid-cols-1 gap-24 rounded-4 border-1 border-grey-12 p-20">
                <div className="flex w-full items-center justify-start space-x-[8px]">
                  <MeetReviewStar index={1} stars={review.stars} />
                  <MeetReviewStar index={2} stars={review.stars} />
                  <MeetReviewStar index={3} stars={review.stars} />
                  <MeetReviewStar index={4} stars={review.stars} />
                  <MeetReviewStar index={5} stars={review.stars} />
                </div>
                <div className="w-full text-14 text-grey-40">{review.review}</div>
                <div className="grid w-full grid-cols-[auto,1fr] items-center gap-14">
                  <div className="h-32 w-32">
                    {review.avatar ? (
                      <img alt="" className="h-32 w-32 overflow-hidden rounded-full" src={review.avatar} />
                    ) : (
                      <Avatar size={32} />
                    )}
                  </div>
                  <div className="grid w-full grid-cols-1 gap-4">
                    <div className="w-full truncate overflow-ellipsis text-14 font-bold text-black">{review.name}</div>
                    <div className="flex w-full items-center justify-start space-x-[8px] text-14 font-bold text-grey-40">
                      Ordered <MeetOrdered type={review.type} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="group hidden h-28 w-28 items-center justify-center rounded-full bg-black-F0 lg:flex"
            onClick={() => onNext()}
          >
            <MdKeyboardArrowRight className="text-18 text-grey-20 group-hover:text-black" />
          </button>
        </div>
      </div>
    </>
  )
}

export default MeetReviews
