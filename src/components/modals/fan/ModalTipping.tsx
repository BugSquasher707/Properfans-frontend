import { properWallet, tipCreator } from "api/endpoints/tip"
import { messageAddEmoji, messageChangeMessage } from "api/integration/chat"
import { toastError, toastSuccess } from "api/integration/toaster"
import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import FanTippingMoney from "components/fan/tipping/FanTippingMoney"
import FanTippingPropercoins from "components/fan/tipping/FanTippingPropercoins"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { updateWallet } from "ellingsenx/api/wallet"
import { TippingType } from "libs/enums"
import { FeedInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FiCheck } from "react-icons/fi"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"
import ProfileUser from "utils/profile/ProfileUser"
import Tabs from "utils/tabs/Tabs"

const ModalTipping = ({
  post,
  open,
  handler,
  showTopDonors
}: {
  post: FeedInterface
  open: boolean
  handler: any
  showTopDonors: any
}) => {
  const { token, user, wallet, setWallet } = useProps()

  const [type, setType] = useState(TippingType.Propercoins)

  const [openSuccess, setOpenSuccess] = useState(false)

  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState("")
  const [tabs] = useState<TabInterface[]>([
    {
      title: (
        <div className="flex items-center space-x-[8px]">
          <ProperCoin className="h-16 w-16 fill-current text-purple" />
          Pay with Propercoins
        </div>
      ),
      type: TippingType.Propercoins,
      action: setType
    }
  ])

  useEffect(() => {
    if (amount < 0) {
      setAmount(0)
    } else {
      setAmount(Math.round(amount))
    }
  }, [amount])

  useEffect(() => {
    setType(TippingType.Propercoins)
    setOpenSuccess(false)
    setAmount(0)
    setMessage("")
  }, [open])

  const addEmoji = (emoji: string) => {
    setMessage(messageAddEmoji(message, emoji))
  }

  const changeMessage = (newMessage: string) => {
    setMessage(messageChangeMessage(message, newMessage))
  }

  const onSubmit = () => {
    if (!(user.id && amount && amount >= 100)) {
      toastError("Enter a tip amount of at least 100 propercoins / $1")
      return
    }

    switch (type) {
      case TippingType.Money:
        onSubmitMoney()
        break

      case TippingType.Propercoins:
        onSubmitPropercoins()
        break
    }
  }

  const onSubmitMoney = async () => {
    // TODO - Submit money

    setOpenSuccess(true)
  }

  const onSubmitPropercoins = async () => {
    if (wallet.wallet < amount / 100) {
      return toastError("Insuffient balence in your wallet")
    }

    let data = {
      coins: amount,
      properfansId: user.id,
      message: message
    }

    const result = await properWallet(token, user.id, data)

    let tipData = {
      coins: amount,
      tier: post.tier,
      user: user.id,
      postId: post.id,
      brandId: post.brand.id
    }

    const resultTip = await tipCreator(token, tipData)

    if (result && result.data && resultTip && resultTip.data) {
      let data1 = {
        isActive: true,
        id: wallet.id,
        wallet: wallet.wallet - amount / 100
      }

      const resultWalletUpdate = await updateWallet(token, data1)

      if (resultWalletUpdate.data) {
        setWallet(resultWalletUpdate.data)
        toastSuccess("Successfully sent donation")
      }

      setOpenSuccess(true)
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pb-30 pt-15 shadow-sm dark:shadow-none lg:w-450">
          {post.brand.banner ? <BannerFilled banner={post.brand.banner} /> : <Banner />}
          <div className="relative mb-14 w-full">
            <div className="relative mb-20 flex h-30 w-full items-center justify-center text-12 font-bold text-black">
              Sending Tip
            </div>
            <div className="absolute top-0 right-0">
              <ModalClose handler={handler} />
            </div>
            <button
              className="w-full"
              onClick={() => {
                showTopDonors(true)
                handler(false)
              }}
            >
              <ProfileUser
                avatar={post.brand.avatar}
                tag={post.brand.handle}
                username={post.brand.userName}
                verified={post.brand.verified}
                custom
              />
            </button>
          </div>
          <Wrapper open={openSuccess}>
            <div className="my-14 grid w-full grid-cols-1 gap-12 rounded-4 bg-grey-3 p-30">
              <div className="flex w-full justify-center">
                <div className="flex h-42 w-42 items-center justify-center rounded-full bg-purple">
                  <FiCheck className="text-32 text-white" />
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-10 text-14 font-bold text-black">
                You successfully tipped <ProperCoin className="h-16 w-16 fill-current text-purple" /> {amount}
              </div>
            </div>
            <ButtonPurple action={() => handler(false)} title={"Thank You!"} full />
          </Wrapper>
          <Wrapper open={!openSuccess}>
            <div className="mb-30 hidden w-full">
              <Tabs tabs={tabs} type={type} />
            </div>
            <div className="w-full">
              {
                {
                  [TippingType.Propercoins]: (
                    <FanTippingPropercoins
                      amount={amount}
                      handlerAmount={setAmount}
                      handlerEmoji={addEmoji}
                      handlerMessage={changeMessage}
                      handlerSubmit={onSubmit}
                      message={message}
                    />
                  ),
                  [TippingType.Money]: (
                    <FanTippingMoney
                      amount={amount}
                      handlerAmount={setAmount}
                      handlerEmoji={addEmoji}
                      handlerMessage={changeMessage}
                      handlerSubmit={onSubmit}
                      message={message}
                    />
                  )
                }[type]
              }
            </div>
          </Wrapper>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalTipping
