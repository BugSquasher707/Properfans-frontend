import { reportPost } from "api/endpoints/fanPost"
import { toastError, toastSuccess } from "api/integration/toaster"
import FanPostSideCreatorProfile from "components/fan/post/side/FanPostSideCreatorProfile"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ReportType } from "libs/enums"
import { FeedInterface, TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import { RiAlertFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Dropdown from "utils/dropdowns/Dropdown"
import TextArea from "utils/inputs/TextArea"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalReportPost = ({ post, open, handler }: { post: FeedInterface; open: boolean; handler: any }) => {
  const { token, user } = useProps()

  const [options] = useState<TitleInterface[]>([
    {
      title: "Abusive or harmful",
      type: ReportType.Abusive
    },
    {
      title: "Bullying or harassment",
      type: ReportType.Bullying
    },
    {
      title: "False information",
      type: ReportType.False
    },
    {
      title: "Hate speech or symbols",
      type: ReportType.Hate
    },
    {
      title: "Sale of illegal or regulated goods",
      type: ReportType.Illegal
    },
    {
      title: "Inappropriate content",
      type: ReportType.Inappropriate
    },
    {
      title: "Intellectual property violation",
      type: ReportType.Intellectual
    },
    {
      title: "Not interested",
      type: ReportType.Interest
    },
    {
      title: "Scam or fraud",
      type: ReportType.Scam
    },
    {
      title: "Sensitive content",
      type: ReportType.Sensitive
    },
    {
      title: "Spam or suspicious",
      type: ReportType.Spam
    },
    {
      title: "Suicide or self-injury",
      type: ReportType.Suicide
    },
    {
      title: "Voilence or dangerious organizations",
      type: ReportType.Voilence
    }
  ])

  const [option, setOption] = useState<TitleInterface>({
    title: "Select option",
    type: ReportType.Select
  })

  const [comment, setComment] = useState("")

  const onReport = async () => {
    if (option.type === ReportType.Select) {
      toastError("Select a reason of report")
      return
    }

    const data = {
      userId: user.id,
      postId: post.id,
      reason: option.title,
      comment: comment
    }

    const result = await reportPost(token, data)

    if (result) {
      handler(false)

      toastSuccess("Report sent")
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 py-20 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <RiAlertFill className="text-48 text-purple" />
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black">Report Post</div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 sm:mb-30">
            Remember to report only the messages which are breaking our{" "}
            <Link className="font-bold text-black" to={URL.POLICIES.TERMS}>
              Terms of Service
            </Link>
            , false reporting can lead to a ban.
          </div>
          <div className="grid w-full grid-cols-1">
            <FanPostSideCreatorProfile post={post} />
          </div>
          <div className="my-20 w-full border-b-1 border-grey-10"></div>
          <div className="mb-20 grid w-full grid-cols-1 gap-20 sm:mb-30">
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="w-full text-14 text-grey-40">Reason of report *</div>
              <Dropdown handler={setOption} options={options} title={option.title} />
            </div>
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="w-full text-14 text-grey-40">Your comment (optional)</div>
              <TextArea data={{ title: "Comment..." }} handler={setComment} value={comment} only />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 items-center gap-12">
            <ButtonPurple action={onReport} title={"Repost Post"} full />
            <button
              className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
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

export default ModalReportPost
