import Wrapper from "components/wrappers/Wrapper"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { MdAdd } from "react-icons/md"

const FanFeedPostingTag = ({ tags, handler }: { tags: string[]; handler: any }) => {
  const [adding, setAdding] = useState(false)
  const [newTag, setNewTag] = useState("")

  const onTagDelete = (index: number) => {
    handler(tags.filter((tag: string, key: number) => key !== index))
  }

  const onSubmit = (key: string) => {
    if (key === "Enter") {
      handler([...tags, newTag])
      setNewTag("")
      setAdding(false)
    } else if (key === "Escape") {
      setAdding(false)
      setNewTag("")
    }
  }

  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-start">
        <div className="grid w-full grid-cols-[auto,1fr]">
          <button
            className="group m-2 flex h-32 items-center justify-center space-x-[4px] rounded-full border-2 border-grey-6 px-12 text-12 font-bold leading-[28px] text-grey-40 hover:border-transparent hover:bg-grey-6 hover:text-black"
            onClick={() => setAdding(!adding)}
          >
            <MdAdd className="text-14 text-grey-20 group-hover:text-black" />
            tag
          </button>
          <Wrapper open={adding}>
            <button className="group m-2 grid h-32 grid-cols-[auto,1fr] items-center justify-center gap-4 rounded-full border-2 border-grey-6 px-12 text-12 font-bold leading-[28px] text-grey-40 hover:border-transparent hover:bg-grey-6 hover:text-black">
              <div>#</div>
              <input
                className="!w-auto text-12 font-semibold text-black"
                placeholder="tag"
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => onSubmit(e.key)}
              />
            </button>
          </Wrapper>
        </div>
        {tags.map((tag: string, key: number) => (
          <button
            key={key}
            className="group m-2 flex h-32 items-center justify-center space-x-[4px] rounded-full bg-grey-3 px-12 text-12 font-bold leading-[32px] text-grey-40 hover:bg-grey-6 hover:text-black"
            onClick={() => onTagDelete(key)}
          >
            #{tag}
            <IoMdCloseCircle className="hidden text-16 text-grey-20 group-hover:flex group-hover:text-black" />
          </button>
        ))}
      </div>
    </>
  )
}

export default FanFeedPostingTag
