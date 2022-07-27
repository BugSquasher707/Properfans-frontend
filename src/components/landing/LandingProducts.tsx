import { ReactComponent as EllingsenGroup } from "assets/img/ellingsengroup.svg"
import { ReactComponent as Properfans } from "assets/img/properfans_black.svg"
import { ReactComponent as Streamertools } from "assets/img/streamertools.svg"
import LandingProduct from "components/landing/LandingProduct"
import React, { useState } from "react"
import { useSwipeable } from "react-swipeable"

const LandingProducts = () => {
  const [slide, setSlide] = useState(0)

  const swipeable = useSwipeable({
    onSwipedLeft: () => {
      setSlide((slide + 2) % 3)
    },
    onSwipedRight: () => {
      setSlide((slide + 1) % 3)
    }
  })

  const Products = [
    {
      title: "Ellingsen Group",
      text: "Our mission is to allow creators to turn their passion into a living",
      link: "https://ellingsengroup.com",
      icon: <EllingsenGroup className="h-34 max-w-full fill-current text-black" />
    },
    {
      title: "Properfans",
      text: "Our mission is to bring creators and their fans closer together",
      link: "https://properfans.com",
      icon: <Properfans className="h-34 max-w-full fill-current text-black" />
    },
    {
      title: "Streamertools",
      text: "Our mission is to organize the world's best streamer tools and make them accessible. Discover the best tools for streaming",
      link: "https://streamertools.com",
      icon: <Streamertools className="h-34 max-w-full fill-current text-black" />
    }
  ]

  return (
    <>
      <div className="mb-30 hidden w-full grid-cols-1 gap-24 md:grid md:grid-cols-2 lg:mb-50 lg:grid-cols-3 xl:mb-80">
        {Products.filter((element: any, key: number) => open || key < 3).map((element: any, key: number) => (
          <LandingProduct key={key} data={element} />
        ))}
      </div>
      <div
        {...swipeable}
        className="mb-30 grid w-full grid-cols-1 md:hidden md:grid-cols-2 lg:mb-50 lg:grid-cols-3 xl:mb-80"
      >
        {Products.map((element: any, key: number) => (
          <div key={key}>{key === slide ? <LandingProduct key={key} data={element} /> : ""}</div>
        ))}
      </div>
    </>
  )
}

export default LandingProducts
