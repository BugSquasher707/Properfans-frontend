import React, { useEffect, useState } from "react"

const WrapperNav = ({ scroll, bg, children }: { scroll?: boolean; bg?: string; children: any }) => {
  const [background, setBackground] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    onBg()
  }, [scrollPosition])

  const handleScroll = () => {
    const position = window.pageYOffset

    setScrollPosition(position)
  }

  const onBg = () => {
    let newBg = "bg-white"

    if (scroll && bg) {
      if (scrollPosition > 0) {
        newBg = bg
      } else {
        newBg = "bg-transparent"
      }
    } else {
      newBg = bg ? bg : "bg-white"
    }

    setBackground(newBg)
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-20 w-full min-w-[300px] bg-white">
        <div className={`w-full ${background}`}>
          <div className="p-side nav flex w-full items-center justify-center">
            <div className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-16 md:gap-22">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WrapperNav
