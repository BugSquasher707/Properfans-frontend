import { ReactComponent as LogoDark } from "assets/img/logo_color_dark.svg"
import fan from "assets/img/propercoins/fans.jpg"
import { ArticleInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const WikiArticle = ({ item }: { item: ArticleInterface }) => {
  return (
    <Link
      className="group w-full rounded-4 border border-grey-12 bg-white from-purple to-green p-14 shadow-lg hover:border-0 hover:bg-gradient-to-tr hover:p-[15px] dark:shadow-none"
      to={item.link}
    >
      <div className="grid grid-cols-1 items-start gap-20">
        <img alt="" className="w-full rounded-4" src={fan} />
        <div className="flex w-full items-center gap-10">
          <LogoDark />
          <div className="w-full text-14 font-bold text-black group-hover:text-white">{item.title}</div>
        </div>
        <div className="w-full text-14 font-light text-gray-500 group-hover:text-gray-50 lg:pr-40">{item.content}</div>
        <div className="w-full text-12 font-light text-gray-500 group-hover:text-gray-50 lg:pr-40">{item.date}</div>
      </div>
    </Link>
  )
}

export default WikiArticle
