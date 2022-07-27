import ModalInfoVideo from "components/modals/info/ModalInfoVideo"
import React from "react"
import { MdVideocam } from "react-icons/md"

const ModalInfoVideoBrandFeatures = ({ open, handler }: { open: boolean; handler: any }) => {
  const data = {
    icon: <MdVideocam className="text-18 text-white" />,
    title: "Brand Features",
    text: "Explanation video explaining all you need to know about brand features",
    video: {
      title: "Video explaining Brand Features",
      length: "0:34",
      id: "vxVW8nG3qwc"
    }
  }

  return (
    <>
      <ModalInfoVideo data={data} handler={handler} open={open} />
    </>
  )
}

export default ModalInfoVideoBrandFeatures
