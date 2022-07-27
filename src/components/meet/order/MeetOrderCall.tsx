import MeetPrice from "components/meet/elements/MeetPrice"
import MeetOrderLine from "components/meet/order/MeetOrderLine"
import MeetOrderStepAgenda from "components/meet/order/steps/MeetOrderStepAgenda"
import MeetOrderStepGift from "components/meet/order/steps/MeetOrderStepGift"
import MeetOrderStepLocation from "components/meet/order/steps/MeetOrderStepLocation"
import MeetOrderStepNotify from "components/meet/order/steps/MeetOrderStepNotify"
import MeetOrderStepPrivacy from "components/meet/order/steps/MeetOrderStepPrivacy"
import MeetOrderStepPurposes from "components/meet/order/steps/MeetOrderStepPurposes"
import { MeetLocationType, MeetProductType } from "libs/enums"
import { MeetPurposesInterface, MeetSpotInterface, ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const MeetOrderCall = ({
  type,
  profile,
  price,
  purposes,
  handlerPurposes
}: {
  type: MeetProductType
  profile: ProfileBrandInterface
  price: number
  purposes: MeetPurposesInterface[]
  handlerPurposes: any
}) => {
  const [email, setEmail] = useState("")
  const [gift, setGift] = useState(false)
  const [giftUser, setGiftUser] = useState("")
  const [location, setLocation] = useState(MeetLocationType.Discord)

  const [privacy, setPrivacy] = useState(true)

  const [spots, setSpots] = useState<MeetSpotInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    setSpots([
      { date: 123, timeFrom: 123, timeTo: 123 },
      { date: 1234, timeFrom: 1234, timeTo: 1234 },
      { date: 1235, timeFrom: 1235, timeTo: 1235 },
      { date: 1236, timeFrom: 1236, timeTo: 1236 }
    ])
  }

  return (
    <>
      <div className="smpb-40 w-full pb-30 md:pb-60">
        <div className="mt-20 mb-40 w-full sm:mt-0 sm:mb-60">
          <MeetPrice price={price} />
        </div>
        <MeetOrderStepGift
          gift={gift}
          giftUser={giftUser}
          handlerGift={setGift}
          handlerGiftUser={setGiftUser}
          index={1}
          type={type}
        />
        <MeetOrderLine />
        <MeetOrderStepAgenda index={2} profile={profile} spots={spots} />
        <MeetOrderLine />
        <MeetOrderStepLocation handlerLocation={setLocation} index={3} location={location} />
        <MeetOrderLine />
        <MeetOrderStepPurposes handlerPurposes={handlerPurposes} index={4} purposes={purposes} />
        <MeetOrderLine />
        <MeetOrderStepPrivacy handlerPrivacy={setPrivacy} index={5} privacy={privacy} />
        <MeetOrderLine />
        <MeetOrderStepNotify email={email} handlerEmail={setEmail} index={6} />
      </div>
    </>
  )
}

export default MeetOrderCall
