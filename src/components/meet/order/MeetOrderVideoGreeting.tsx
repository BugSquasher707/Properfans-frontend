import MeetPrice from "components/meet/elements/MeetPrice"
import MeetOrderLine from "components/meet/order/MeetOrderLine"
import MeetOrderStepDelivery from "components/meet/order/steps/MeetOrderStepDelivery"
import MeetOrderStepGift from "components/meet/order/steps/MeetOrderStepGift"
import MeetOrderStepInfo from "components/meet/order/steps/MeetOrderStepInfo"
import MeetOrderStepNotify from "components/meet/order/steps/MeetOrderStepNotify"
import MeetOrderStepPrivacy from "components/meet/order/steps/MeetOrderStepPrivacy"
import MeetOrderStepPurposes from "components/meet/order/steps/MeetOrderStepPurposes"
import { MeetDeliveryType, MeetGreetingType, MeetProductType } from "libs/enums"
import { MeetDeliveryInterface, MeetPurposesInterface, TitleInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const MeetOrderVideoGreeting = ({
  price,
  purposes,
  handlerPurposes
}: {
  price: number
  purposes: MeetPurposesInterface[]
  handlerPurposes: any
}) => {
  const [delivery, setDelivery] = useState(MeetDeliveryType.Standard)
  const [email, setEmail] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [gift, setGift] = useState(false)
  const [giftUser, setGiftUser] = useState("")
  const [greeting, setGreeting] = useState<TitleInterface>({
    type: MeetGreetingType.Birthday,
    title: "🎉 Birthday"
  })

  const [privacy, setPrivacy] = useState(true)
  const [pronoun, setPronoun] = useState<TitleInterface>({ title: "Select" })
  const [message, setMessage] = useState("")

  const [deliveries, setDeliveries] = useState<MeetDeliveryInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    setDeliveries([
      { type: MeetDeliveryType.Standard, price: 0 },
      { type: MeetDeliveryType.Express, price: 4.99 },
      { type: MeetDeliveryType.Rush, price: 9.99 }
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
          type={MeetProductType.VideoGreeting}
        />
        <MeetOrderLine />
        <MeetOrderStepInfo
          files={files}
          greeting={greeting}
          handlerFiles={setFiles}
          handlerGreeting={setGreeting}
          handlerMessage={setMessage}
          handlerPronoun={setPronoun}
          index={2}
          message={message}
          pronoun={pronoun}
        />
        <MeetOrderLine />
        <MeetOrderStepDelivery deliveries={deliveries} delivery={delivery} handlerDelivery={setDelivery} index={3} />
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

export default MeetOrderVideoGreeting
