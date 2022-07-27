import ModalInfoVideo from "components/modals/info/ModalInfoVideo"
import React from "react"
import { MdVideocam } from "react-icons/md"

const ModalInfoVideoCalls = ({ open, handler }: { open: boolean; handler: any }) => {
  const data = {
    icon: <MdVideocam className="text-18 text-white" />,
    title: "Private Video Calls",
    text: "This is a great feature if you want to hang out with the creator, ask him questions or just get to know each other",
    video: {
      title: "Video explaining Private Video Calls",
      length: "0:34",
      id: "vxVW8nG3qwc"
    }
  }

  return (
    <>
      <ModalInfoVideo data={data} handler={handler(false)} open={open} />
    </>
  )
}

export default ModalInfoVideoCalls
