import WikiArticle from "components/wiki/WikiArticle"
import { URL } from "libs/constants"
import { ArticleInterface } from "libs/interfaces"
import React, { useState } from "react"

const WikiArticles = () => {
  const [articles] = useState<ArticleInterface[]>([
    {
      title: "Properfans Shops",
      content: "Learn more about how Properfans Shops work and how you begin shopping.",
      date: "Nov 21st 2021",
      link: URL.WIKI.PROPERCOINS
    }
  ])

  return (
    <>
      <div className="mb-80 grid w-full grid-cols-1 items-start gap-60">
        <div className="grid w-full grid-cols-1 gap-10">
          <div className="w-full text-14 font-bold text-purple">Explore</div>
          <div className="w-full text-32 font-black text-black">Other Articles</div>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item: ArticleInterface, key: number) => (
            <WikiArticle key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default WikiArticles
