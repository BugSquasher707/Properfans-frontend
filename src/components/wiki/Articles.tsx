import logo from "assets/img/logo_color_dark.svg"
import fan from "assets/img/propercoins/fans.jpg"
import React from "react"

const Articles = ({ image, title, content, date }: { image: string; title: string; content: string; date: string }) => {
  return (
    <div className="group w-full rounded-4 border border-gray-200 bg-white from-green to-purple-med px-10 py-18 hover:bg-gradient-to-bl hover:shadow-lg">
      <div className="grid grid-cols-1 items-start gap-20">
        <img alt="" className="w-full rounded-4" src={fan} />
        <div className="flex w-full items-center gap-10">
          <img alt="" src={logo} />
          <img alt="" src={image} />
          <div className="w-full text-14 font-bold text-black group-hover:text-white">{title}</div>
        </div>
        <div className="w-full text-14 font-light text-gray-500 group-hover:text-gray-50 lg:pr-40">{content}</div>
        <div className="w-full text-14 font-light text-gray-500 group-hover:text-gray-50 lg:pr-40">{date}</div>
      </div>
    </div>
  )
}

export default Articles
