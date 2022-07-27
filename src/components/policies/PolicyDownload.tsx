import { openLink } from "api/integration/functions"
import { ReactComponent as TermsIcon } from "assets/img/terms.svg"
import { LinkInterface } from "libs/interfaces"
import React from "react"
import { MdFileDownload, MdModeEdit } from "react-icons/md"
import ButtonBorderIcon from "utils/buttons/border/ButtonBorderIcon"

const PolicyDownload = ({ data }: { data: LinkInterface }) => {
  return (
    <>
      <div className="mb-20 hidden w-full items-center text-24 font-bold text-black md:mb-30 lg:flex">
        <TermsIcon className="mr-14 h-20 w-20 fill-current text-black" /> {data.title}
      </div>
      <div className="mb-20 grid w-full grid-cols-1 justify-between gap-20 md:mb-30 lg:grid-flow-col-dense lg:grid-cols-none">
        <div className="flex w-full flex-wrap items-center justify-between md:justify-start">
          <div className="flex w-full justify-start text-14 font-bold text-black sm:w-auto">Valid since 9/13/2020</div>
          <div className="mx-0 my-10 flex h-0 w-full border-b-1 border-grey-10 sm:mx-10 sm:my-0 sm:h-24 sm:w-0 sm:border-r-1 md:mx-20"></div>
          <div className="flex w-full items-center justify-start text-14 text-grey-40 sm:w-auto">
            <MdModeEdit className="mr-8 h-14 w-14 text-grey-40" />
            Edited on 26/4/2021
          </div>
        </div>
        <div className="flex w-full justify-start gap-8 md:w-auto">
          <button className="w-full sm:w-auto" onClick={(e) => openLink(e, data.link)}>
            <ButtonBorderIcon icon={<MdFileDownload className="h-14 w-14" />} title={"Download"} />
          </button>
        </div>
      </div>
    </>
  )
}

export default PolicyDownload
