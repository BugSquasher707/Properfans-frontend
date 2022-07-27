import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import ButtonGreyDimm from "utils/buttons/grey/ButtonGreyDimm"

const WrapperPaginationMulti = ({
  count,
  tab,
  tabs,
  children,
  items,
  done,
  loaded,
  handlerPage
}: {
  count: number
  tab: number
  tabs: number
  items: string
  children: any
  done: any
  loaded: any
  handlerPage: any
}) => {
  const [pages, setPages] = useState<number[]>(new Array(tabs).fill(1))

  const [refTop, inViewTop] = useInView({
    threshold: 0
  })

  const ScrollTop = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPages(new Array(tabs).fill(1))
  }, [])

  useEffect(() => {
    if (!done[tab]) {
      handlerPage(pages)
    }
  }, [...pages])

  useEffect(() => {
    scrollToTop()
  }, [tab])

  const onPage = (newTab: number) => {
    if (loaded[newTab]) {
      const newPages = [...pages]
      newPages[newTab] = newPages[newTab] + 1

      setPages(newPages)
    }
  }

  const scrollToTop = () => {
    if (!inViewTop && ScrollTop.current) {
      ScrollTop.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div ref={ScrollTop} className="absolute left-0 top-[0px] h-1 w-1">
        <div ref={refTop}></div>
      </div>
      {children}
      <Wrapper open={count >= 10 && !done[tab]}>
        <div className="mt-10 w-full" onClick={() => onPage(tab)}>
          <ButtonGreyDimm title={done[tab] ? `Loaded all ${items}` : `Show more ${items}`} />
        </div>
      </Wrapper>
    </>
  )
}

export default WrapperPaginationMulti
