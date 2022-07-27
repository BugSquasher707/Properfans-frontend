import CategoryAnimals from "assets/img/categories/setup/animals.png"
import CategoryAutosport from "assets/img/categories/setup/autosport.png"
import CategoryCoding from "assets/img/categories/setup/coding.png"
import CategoryCrypto from "assets/img/categories/setup/crypto.png"
import CategoryDesign from "assets/img/categories/setup/design.png"
import CategoryGaming from "assets/img/categories/setup/gaming.png"
import CategoryMotosport from "assets/img/categories/setup/motosport.png"
import CategoryStreaming from "assets/img/categories/setup/streaming.png"
import CategoryTravelling from "assets/img/categories/setup/travelling.png"
import Wrapper from "components/wrappers/Wrapper"
import { ContentType } from "libs/enums"
import { SetupContentInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdHeart } from "react-icons/io"

const SetupContent = ({ content, handler }: { content: boolean[]; handler: any }) => {
  const [active, setActive] = useState(content)

  const categories = [
    {
      title: "Animals",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryAnimals} />,
      type: ContentType.Animals
    },
    {
      title: "Autosport",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryAutosport} />,
      type: ContentType.Autosport
    },
    {
      title: "Coding",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryCoding} />,
      type: ContentType.Coding
    },
    {
      title: "Crypto & NFTs",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryCrypto} />,
      type: ContentType.Crypto
    },
    {
      title: "Design",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryDesign} />,
      type: ContentType.Design
    },
    {
      title: "Gaming",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryGaming} />,
      type: ContentType.Gaming
    },
    {
      title: "Motosport",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryMotosport} />,
      type: ContentType.Motosport
    },
    {
      title: "Streaming",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryStreaming} />,
      type: ContentType.Streaming
    },
    {
      title: "Traveling & vlogs",
      icon: <img alt="" className="h-full w-full object-cover" src={CategoryTravelling} />,
      type: ContentType.Travelling
    }
  ]

  const handleActive = (index: number) => {
    setActive((prevState) => prevState.map((item, key) => (key === index ? !item : item)))
  }

  useEffect(() => {
    handler(active)
  }, [active])

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3">
        {categories.map((category: SetupContentInterface, key: number) => (
          <button
            key={key}
            className="group relative h-[200px] w-full overflow-hidden rounded-[20px] bg-grey-10"
            onClick={() => handleActive(key)}
          >
            {category.icon}
            <Wrapper open={active[key]}>
              <IoMdHeart className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-48 text-black" />
            </Wrapper>
            <div className="font-momentum absolute left-12 bottom-12 right-12 text-12 font-bold text-black sm:text-14">
              {category.title}
            </div>
          </button>
        ))}
      </div>
    </>
  )
}

export default SetupContent
