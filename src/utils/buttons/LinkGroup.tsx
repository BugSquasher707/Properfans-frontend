import { LinkGroupInterface, LinkInterface } from "libs/interfaces"
import React from "react"
import ButtonLink from "utils/buttons/link/ButtonLink"
import ButtonLinkTop from "utils/buttons/link/ButtonLinkTop"

const LinkGroup = ({ data }: { data: LinkGroupInterface }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-12 lg:w-auto">
        <ButtonLinkTop title={data.title} />
        {data.data.map((element: LinkInterface, key: number) => (
          <ButtonLink key={key} action={element.action} link={element.link} title={element.title} />
        ))}
      </div>
    </>
  )
}

export default LinkGroup
