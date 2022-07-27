import { LiveCategoryInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdHeart } from "react-icons/io"

const LiveCategory = () => {
  const [category, setCategory] = useState<LiveCategoryInterface>()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    setCategory({
      name: "Category",
      description: "Category description",
      avatar: "https://via.placeholder.com/300x300",
      banner: "https://via.placeholder.com/300x300",
      handle: "category",
      followers: 20000,
      viewers: 5
    })
  }

  return (
    <>
      {category ? (
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-30 p-40">
          <div className="w-[128px]"></div>
          <div className="grid w-full grid-cols-1 gap-12">
            <div className="w-full">{category.name}</div>
            <div className="w-full">{category.description}</div>
            <div className="flex w-full items-center gap-22">
              <div className="flex gap-8">
                <IoMdHeart />
                <div className="text-14">{category.followers} followers</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default LiveCategory
