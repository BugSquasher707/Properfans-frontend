import React from "react"

const BannerPurpleFilled = ({ banner }: { banner: string }) => {
  return (
    <div className="absolute top-0 left-0 h-[144px] w-full overflow-hidden rounded-t-4">
      <img
        alt=""
        className="absolute top-[50%] left-[50%] min-h-full w-full min-w-full translate-x-[-50%] translate-y-[-50%] transform object-cover opacity-30"
        src={banner}
      />
      <div className="absolute top-0 -bottom-1 w-full bg-gradient-to-b from-transparent to-purple"></div>
    </div>
  )
}

export default BannerPurpleFilled
