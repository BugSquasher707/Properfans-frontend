import React from "react"
import { Link } from "react-router-dom"

const GuidelinesViolate = () => {
  return (
    <>
      <div className="mb-12 w-full text-14 font-bold text-black">What happens if content violates this policy</div>
      <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
        If your content violates this policy, we’ll remove the content and send you an email to let you know. If this is
        your first time violating our Community Guidelines, you&apos;ll get a warning with no penalty to your channel.
        If it&apos;s not, we&apos;ll issue a strike against your channel. If you get 3 strikes, your channel will be
        terminated. You can learn more about our strikes system{" "}
        <Link className="font-bold text-purple" to="/">
          here
        </Link>
      </div>
    </>
  )
}

export default GuidelinesViolate
