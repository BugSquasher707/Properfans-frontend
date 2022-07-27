import { applicationApplied } from "api/endpoints/status"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { DATE, URL } from "libs/constants"
import { StatusType } from "libs/enums"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonRed from "utils/buttons/colors/ButtonRed"
import CheckGreen from "utils/elements/CheckGreen"
import CheckListStatus from "utils/lists/CheckListStatus"

const CreatorApplicationStatus = () => {
  const { admin, token, user } = useProps()

  const history = useHistory()
  const [apply, setApply] = useState(false)

  const [state, setState] = useState([
    {
      title: "The application successfully received",
      text: "Pending",
      status: StatusType.Default
    },
    {
      title: "Properfans staff is reviewing the application",
      text: "Pending",
      status: StatusType.Default
    },
    {
      title: "Conclusion of the application",
      text: "Pending",
      status: StatusType.Default
    }
  ])

  const [status, setStatus] = useState("")

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    if (admin) {
      setApply(true)
      return
    }

    console.log(token)

    // TODO account id
    const result = await applicationApplied(user.userId)

    if (result) {
      if (!result.data.accountId) {
        history.push(URL.APPLICATION.BASE)
      } else if (mounted) {
        onState(result.data)
        setStatus(result.data.status)
        setApply(true)
      }
    }
  }

  const onState = (res: any) => {
    setState([
      {
        title: "The application successfully received",
        text: `${moment(res.created).format(DATE.DATETIME)}`,
        status: StatusType.Completed
      },
      {
        title: "Properfans staff is reviewing the application",
        text: getReviewDate(res),
        status: getReviewStatus(res)
      },
      {
        title: "Conclusion of the application",
        text: getConclusionDate(res),
        status: getConclusionStatus(res)
      }
    ])
  }

  const getReviewStatus = (res: any) => {
    if (res.status === "open") {
      return StatusType.Pending
    } else {
      return StatusType.Completed
    }
  }

  const getReviewDate = (res: any) => {
    if (res.status === "open") {
      return "Awaiting review"
    } else {
      return `${moment(res.updated).format(DATE.DATETIME)}`
    }
  }

  const getConclusionStatus = (res: any) => {
    if (res.status === "review") {
      return StatusType.Pending
    } else if (res.status === "approved") {
      return StatusType.Completed
    } else if (res.status === "rejected") {
      return StatusType.Rejected
    }

    return StatusType.Default
  }

  const getConclusionDate = (res: any) => {
    if (res.status === "approved") {
      return "Application accepted"
    } else if (res.status === "rejected") {
      return "Application rejected"
    }

    return "Awaiting conclusion"
  }

  return (
    <>
      {apply ? (
        <div className="align-start flex w-520 max-w-full flex-wrap">
          <div className="center mb-20 h-40 w-full md:mb-30">
            <CheckGreen />
          </div>
          <div className="mb-12 w-full text-center text-24 font-bold text-black">
            The application was successfully sent
          </div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
            Your application to become a creator on Properfans platform was successfully sent, please allow{" "}
            <span className="font-bold text-purple">us up to 7 working days</span> to review it and come up with a
            conclusion
          </div>
          <div className="mb-20 w-full rounded-4 border-1 border-grey-12 p-20 shadow-sm md:mb-40">
            <div className="mb-24 w-full text-16 font-bold text-black">Application status</div>
            <div className="mb-24 w-full">
              <CheckListStatus data={state} />
            </div>
          </div>
          <Wrapper open={status === "approved"}>
            <div className="mb-12 w-full">
              <ButtonPurple action={URL.TWOFACTOR.BASE} title={"Setup 2 Factor Authentication"} full />
            </div>
            <div className="w-full text-center text-12 text-grey-40">
              You can access the platform page because{" "}
              <span className="font-bold text-purple">your application is approved</span>
            </div>
          </Wrapper>
          <Wrapper open={status !== "approved"}>
            <div className="mb-12 w-full">
              <ButtonRed action={URL.FAN.BASE} title={"Back to platform"} />
            </div>
            <div className="w-full text-center text-12 text-grey-40">
              You can&apos;t access the platform page yet since{" "}
              <span className="font-bold text-red">
                your application {status === "rejected" ? "is rejected" : "isn't reviewed yet"}
              </span>
            </div>
          </Wrapper>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default CreatorApplicationStatus
