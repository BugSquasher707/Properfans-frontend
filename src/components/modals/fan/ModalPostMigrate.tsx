import { statusApi } from "api/endpoints/status"
import { toastError, toastSuccess } from "api/integration/toaster"
import ContentTiers from "components/content/ContentTiers"
import { useProps } from "contexts/PropsContext"
import { SubscriptionTierType } from "libs/enums"
import { TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import ModalClose from "utils/modals/ModalClose"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalPostMigrate = ({ id, open, handler }: { id: string; open: boolean; handler: any }) => {
  const { brandActive, token } = useProps()

  const [tier, setTier] = useState<TierInterface>()
  const [tierPublic] = useState<TierInterface>({
    id: "1",
    priceId: "public",
    tierName: "Public",
    tierLevel: SubscriptionTierType.Tier0,
    image: "",
    price: 0,
    perks: [],
    popular: false
  })

  const [tiers, setTiers] = useState<TierInterface[]>([])

  const [loading, setLoading] = useState(false)

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    if (tiers && tiers.length > 0) {
      setTier(tiers[0])
    }
  }, [tiers])

  const onLoad = async () => {
    if (!brandActive.id) {
      toastError(
        "You have to select or create a club before you can post stories"
      )
      return
    }

    console.log(id, token)

    const result = await statusApi()

    if (mounted) {
      setTiers([tierPublic].concat(result && result.length > 0 ? result : []))
    }
  }

  const onSubmit = async () => {
    if (loading) {
      return
    }

    setLoading(true)

    if (!tier) {
      toastError("Select a tier")
      return
    }

    const result = await statusApi()

    if (result) {
      handler(false)

      toastSuccess("Successfully updated content")
    }

    setLoading(false)
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="w-max-full max-w-[450px] rounded-4 bg-white p-20">
          <div className="mb-30 grid w-full grid-cols-[1fr,auto] items-center gap-12">
            <div className="w-full text-center text-16 font-bold text-black">Who can view this content?</div>
            <ModalClose handler={handler} />
          </div>
          <ContentTiers
            brand={brandActive}
            handlerSubmit={onSubmit}
            handlerTier={setTier}
            loading={loading}
            tier={tier}
            tiers={tiers}
          />
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalPostMigrate
