import { ReactComponent as ProperPay } from "assets/img/properpay.svg"
import ModalProperPaySelect from "components/modals/properpay/slides/ModalProperPaySelect"
import ModalProperPaySummary from "components/modals/properpay/slides/ModalProperPaySummary"
import ModalProperPayTasks from "components/modals/properpay/slides/ModalProperPayTasks"
import { ProperPayMethodType, ProperPayType } from "libs/enums"
import { ProperPayMethodInterface, TierInterface, TitleInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaBox } from "react-icons/fa"
import { MdFileDownload } from "react-icons/md"
import ModalWrapper from "utils/modals/ModalWrapper"
import Step from "utils/steps/Step"

const ModalProperPay = ({ tier, open, handler }: { tier?: TierInterface; open: boolean; handler: any }) => {
  const [method, setMethod] = useState(ProperPayMethodType.Apps)

  const [step, setStep] = useState(1)

  const stepUp = () => {
    setStep(step + 1)
  }

  const stepDown = () => {
    setStep(step - 1)
  }

  const slides = [
    {
      title: "Select Method",
      type: ProperPayType.Select
    },
    {
      title: "Finish Tasks",
      type: ProperPayType.Tasks
    },
    {
      title: "Free Payment",
      type: ProperPayType.Payment
    }
  ]

  const [slide, setSlide] = useState(slides[step])

  useEffect(() => {
    setSlide(slides[step - 1])
  }, [step])

  const [methods] = useState<ProperPayMethodInterface[]>([
    {
      title: "Download Apps",
      text: "To subscribe for free download 4 mobile apps displayed below",
      icon: <MdFileDownload className="text-20" />,
      icons: ["", ""],
      type: ProperPayMethodType.Apps
    },
    {
      title: "Complete Surveys",
      text: "To subscribe for free completed 3 surveys displayed below",
      icon: <FaBox />,
      icons: ["", ""],
      type: ProperPayMethodType.Surveys
    }
  ])

  const [selectedMethod, setSelectedMethod] = useState<ProperPayMethodInterface>(methods[method])

  useEffect(() => {
    setSelectedMethod(methods[method])
  }, [method])

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pt-40 pb-20 shadow-sm dark:shadow-none lg:w-[680px]">
          <div className="mb-24 flex w-full items-center justify-center">
            <ProperPay className="fill-current text-black" />
          </div>
          <div className="mb-40 flex w-full items-center justify-center space-x-[16px]">
            {slides.map((item: TitleInterface, key: number) => (
              <Step key={key} index={key} item={item} length={slides.length} step={step} />
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-[1fr,auto]">
            <div className="w-full">
              {
                {
                  [ProperPayType.Select]: (
                    <ModalProperPaySelect handler={setMethod} method={method} methods={methods} />
                  ),
                  [ProperPayType.Tasks]: <ModalProperPayTasks method={method} />,
                  [ProperPayType.Payment]: ""
                }[slide.type]
              }
            </div>
            <div className="w-full border-grey-6 lg:w-[270px] lg:border-l-1 lg:pl-20">
              {tier ? (
                <ModalProperPaySummary
                  handlers={{ handler, stepDown, stepUp }}
                  method={selectedMethod.title}
                  slide={slide}
                  tier={tier}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalProperPay
