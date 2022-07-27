import React from "react"

const CreatorStatisticsDropdownAvatars = ({ avatars, activeIndex }: { avatars: string[]; activeIndex: number }) => {
  return (
    <div className="flex flex-row-reverse items-center">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`z-10 flex items-center justify-center rounded-full border-3 border-white bg-white ${
            index > 0 && "-mr-11"
          }`}
        >
          <img
            alt="avatar"
            className={`h-32 w-32 rounded-full object-cover ${activeIndex === index ? "opacity-100" : "opacity-25"}`}
            src={avatar}
          />
        </div>
      ))}
    </div>
  )
}

export default CreatorStatisticsDropdownAvatars
