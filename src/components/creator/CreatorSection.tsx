import React from "react"

const CreatorSection = ({ children, nopad }: { children: any; nopad?: boolean }) => {
  return (
    <>
      <div
        className={`w-full rounded-4 bg-white shadow-md dark:border-1 dark:border-grey-12 dark:shadow-none ${
          nopad ? "" : "p-12 xs:p-20"
        }`}
      >
        {children}
      </div>
    </>
  )
}

export default CreatorSection
