import React from "react"
import { Link } from "react-router-dom"

const ButtonLink = ({ title, link, action }: { title: string; link: string; action: any }) => {
  return (
    <>
      {link ? (
        <Link className="w-full text-center text-14 text-grey-40 hover:text-black lg:text-left" to={link}>
          {title}
        </Link>
      ) : (
        <button className="w-full text-center text-14 text-grey-40 hover:text-black lg:text-left" onClick={action}>
          {title}
        </button>
      )}
    </>
  )
}

export default ButtonLink
