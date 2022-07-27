import { timeZonesNames } from "@vvo/tzdb"
import { statusApi } from "api/endpoints/status"
import { getterVolume, setterVolume } from "api/integration/cookies"
import { openLinkExtern, parseTimeZones } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import { ReactComponent as ThemeDark } from "assets/img/theme_dark.svg"
import { ReactComponent as ThemeLight } from "assets/img/theme_light.svg"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import { useProps } from "contexts/PropsContext"
import { URL_EGX } from "ellingsenx/libs/constants"
import { LanguageType, ThemeType } from "libs/enums"
import { ThemeInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { FiCheck } from "react-icons/fi"
import { IoMdFlag } from "react-icons/io"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import InputDropdownField from "utils/inputs/InputDropdownField"
import CheckListDot from "utils/lists/CheckListDot"
import SliderPercentage from "utils/sliders/SliderPercentage"
import Toggle from "utils/toggles/Toggle"

const CreatorSettings = () => {
  const [cookies, setCookie] = useCookies(["volume"])

  const { themeSelected, token, user, setThemeSelected } = useProps()

  const [language, setLanguage] = useState(LanguageType.English)
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

  const [alertDms, setAlertDms] = useState(false)
  const [alertDonations, setAlertDonations] = useState(false)
  const [alertMentions, setAlertMentions] = useState(false)
  const [alertPosts, setAlertPosts] = useState(false)

  const [volume, setVolume] = useState(getterVolume(cookies.volume))

  const [mounted, setMounted] = useState(false)

  const Languages = [
    { link: LanguageType.English, title: "English", icon: <IoMdFlag /> },
    { link: LanguageType.Dutch, title: "Dutch", icon: <IoMdFlag /> }
  ]

  const [zones] = useState(parseTimeZones(timeZonesNames))

  const [themes] = useState([
    {
      type: ThemeType.Light,
      title: "Light mode",
      icon: <ThemeLight className="w-full max-w-[240px] shadow-md dark:shadow-none" />
    },
    {
      type: ThemeType.Dark,
      title: "Dark mode",
      icon: <ThemeDark className="w-full max-w-[240px] shadow-md dark:shadow-none" />
    }
  ])

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    if (mounted) {
      saveAlerts("dms", alertDms)
    }
  }, [alertDms])

  useEffect(() => {
    if (mounted) {
      saveAlerts("donations", alertDonations)
    }
  }, [alertDonations])

  useEffect(() => {
    if (mounted) {
      saveAlerts("mentions", alertMentions)
    }
  }, [alertMentions])

  useEffect(() => {
    if (mounted) {
      saveAlerts("posts", alertPosts)
    }
  }, [alertPosts])

  useEffect(() => {
    setterVolume(setCookie, volume)
  }, [volume])

  const onLoad = () => {
    setAlertDms(false)
    setAlertDonations(false)
    setAlertMentions(false)
    setAlertPosts(false)
    setMounted(true)
  }

  const saveGeneral = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully saved settings")
    }
  }

  const saveAlerts = async (key: string, value: boolean) => {
    if (!mounted) {
      return
    }

    console.log(token, key, value)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully saved settings")
    }
  }

  console.log(user)

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"General settings"} />
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
          Here you can change language of the site and choose your timezone
        </div>
        <div className="mb-20 flex w-full md:mb-40">
          <div className="grid w-[325px] max-w-full grid-cols-1 flex-wrap gap-16">
            <InputDropdownField
              data={{ title: "Language", data: Languages }}
              handler={setLanguage}
              icon={<IoMdFlag className="text-grey-20" />}
              value={LanguageType[language]}
            />
            <InputDropdownField
              data={{ title: "Timezone", data: zones }}
              handler={setTimezone}
              icon={<IoMdFlag className="text-grey-20" />}
              value={timezone}
            />
          </div>
        </div>
        <div className="flex w-full">
          <ButtonPurple action={saveGeneral} icon={<FiCheck className="text-16 text-white" />} title={"Save"} />
        </div>
      </CreatorSection>
      <CreatorSection>
        <CreatorTitle title={"Interface theme"} />
        {user.syncThemeCompanyProducts ? (
          <>
            <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
              Your theme is synced with your EllingsenX account
            </div>
            <div className="flex w-full">
              <ButtonPurple action={() => openLinkExtern(URL_EGX.DASHBOARD.SETTINGS.THEME)} title={"EllingsenX"} />
            </div>
          </>
        ) : (
          <>
            <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
              Customize the interface by your preferences
            </div>
            <div className="flex w-full">
              <div className="grid w-[490px] max-w-full grid-cols-1 space-y-[10px] space-x-[0px] md:grid-cols-2 md:space-y-[0px] md:space-x-[10px] ">
                {themes.map((them: ThemeInterface, key: number) => (
                  <button
                    key={key}
                    className="grid w-full grid-cols-1 space-y-[12px]"
                    onClick={() => setThemeSelected(them.type)}
                  >
                    <div className="flex w-full items-center justify-center space-x-[10px]">
                      <CheckListDot active={themeSelected === them.type} />
                      <div className="w-full text-left text-14 text-grey-40">{them.title}</div>
                    </div>
                    <div className="flex w-full justify-start rounded-4">{them.icon}</div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </CreatorSection>
      <CreatorSection>
        <CreatorTitle title={"Website alerts"} />
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">Manage sound alerts on the website</div>
        <div className="flex w-full">
          <div className="flex w-[325px] max-w-full flex-wrap">
            <div className="mb-20 w-full text-14 font-bold text-black">Alert Options</div>
            <div className="mb-20 grid w-full grid-cols-1 gap-12 md:mb-40">
              <div className="grid w-full grid-cols-[1fr,auto]">
                <div className="w-full text-14 text-grey-40">New direct messages</div>
                <Toggle handler={setAlertDms} value={alertDms} />
              </div>
              <div className="grid w-full grid-cols-[1fr,auto]">
                <div className="w-full text-14 text-grey-40">New donations</div>
                <Toggle handler={setAlertDonations} value={alertDonations} />
              </div>
              <div className="grid w-full grid-cols-[1fr,auto]">
                <div className="w-full text-14 text-grey-40">New mentions</div>
                <Toggle handler={setAlertMentions} value={alertMentions} />
              </div>
              <div className="grid w-full grid-cols-[1fr,auto]">
                <div className="w-full text-14 text-grey-40">New posts</div>
                <Toggle handler={setAlertPosts} value={alertPosts} />
              </div>
            </div>
            <div className="mb-20 w-full text-14 font-bold text-black">Alert Volume</div>
            <div className="mb-30 w-full">
              <SliderPercentage handler={setVolume} value={volume} />
            </div>
          </div>
        </div>
      </CreatorSection>
    </>
  )
}

export default CreatorSettings
