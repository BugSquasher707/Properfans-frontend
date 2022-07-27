import { applicationApi, applicationApplied } from "api/endpoints/status"
import { toastError, toastSuccess } from "api/integration/toaster"
import ApplicationDiscover from "components/creator/application/ApplicationDiscover"
import ApplicationJoin from "components/creator/application/ApplicationJoin"
import ApplicationMonetize from "components/creator/application/ApplicationMonetize"
import ApplicationStart from "components/creator/application/ApplicationStart"
import ApplicationUsage from "components/creator/application/ApplicationUsage"
import { useProps } from "contexts/PropsContext"
import { ERR, URL } from "libs/constants"
import { ApplicationTabType, IncomeType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const CreatorApplication = () => {
  const { token, user } = useProps()

  const history = useHistory()

  const [tab, setTab] = useState(ApplicationTabType.Start)

  const [discover, setDiscover] = useState("")
  const [usage, setUsage] = useState([])
  const [monetize, setMonetize] = useState([])
  const [income, setIncome] = useState()
  const [join, setJoin] = useState("")

  const [incomeType, setIncomeType] = useState(IncomeType.Lowest)
  const [hideIncome, setHideIncome] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const result = await applicationApplied(user.userId)

    if (result && result.data.accountId) {
      history.push(URL.APPLICATION.STATUS)
    }
  }

  const onSubmit = async () => {
    if (!(discover && usage && monetize)) {
      toastError(ERR.REFRESH)
      return
    }

    // TODO get account id
    const data = {
      heardAboutUsFrom: discover,
      plannedUseOfPlatform: usage,
      currentMonetization: monetize,
      monthlyEarnings: income ? income : "Private",
      whyJoinUs: join,
      accountId: user.userId,
      applicationType: "become-creator"
    }

    const result = await applicationApi(token, data)

    if (result) {
      toastSuccess("Successfully applied as creator")
      history.push(URL.APPLICATION.STATUS)
    }
  }

  useEffect(() => {
    if (discover.length > 250) {
      setDiscover(discover.slice(0, 250))
    }
  }, [discover])

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <>
      {
        {
          [ApplicationTabType.Start]: <ApplicationStart handler={setTab} />,
          [ApplicationTabType.Discover]: <ApplicationDiscover handler={setTab} setter={setDiscover} value={discover} />,
          [ApplicationTabType.Usage]: <ApplicationUsage handler={setTab} setter={setUsage} value={usage} />,
          [ApplicationTabType.Monetize]: (
            <ApplicationMonetize
              handler={setTab}
              hideIncome={hideIncome}
              incomeType={incomeType}
              setterHideIncome={setHideIncome}
              setterIncome={setIncome}
              setterIncomeType={setIncomeType}
              setterMonetize={setMonetize}
              valueMonetize={monetize}
            />
          ),
          [ApplicationTabType.Join]: (
            <ApplicationJoin handler={setTab} setter={setJoin} submit={onSubmit} value={join} />
          )
        }[tab]
      }
    </>
  )
}

export default CreatorApplication
