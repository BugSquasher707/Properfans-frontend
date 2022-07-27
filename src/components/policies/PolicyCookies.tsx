import PolicyDownload from "components/policies/PolicyDownload"
import React from "react"

const PolicyCookies = () => {
  return (
    <>
      <div className="w-full">
        <PolicyDownload
          data={{
            link: "/documents/ProperfansCookies.pdf",
            title: "Cookies"
          }}
        />
      </div>
    </>
  )
}

export default PolicyCookies
