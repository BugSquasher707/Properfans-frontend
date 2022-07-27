import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useState } from "react"
import ButtonGreyDimm from "utils/buttons/grey/ButtonGreyDimm"

const WrapperPagination = ({
  count,
  children,
  items,
  done,
  loaded,
  handlerPage,
  top,
  closed,
  id,
  button,
  reset
}: {
  count: number
  children: any
  items: string
  done: any
  loaded: any
  handlerPage: any
  top: boolean
  closed?: boolean
  id?: string
  button?: JSX.Element
  reset?: boolean
}) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [])

  useEffect(() => {
    if (reset) {
      setPage(1)
      handlerPage(1)
    }
  }, [reset])

  useEffect(() => {
    if (!done || (done && page === 1)) {
      handlerPage(page)
    }
  }, [page])

  useEffect(() => {
    if (id && loaded) {
      handlerPage(1)
      setPage(1)
    }
  }, [id])

  const onPage = (newPage: number) => {
    if (loaded) {
      setPage(newPage)
    }
  }

  return (
    <>
      <Wrapper open={!closed && count >= 10 && !done && top}>
        <div className="w-full lg:mb-10" onClick={() => onPage(page + 1)}>
          {button ? button : <ButtonGreyDimm title={done ? `Loaded all ${items}` : `Show more ${items}`} />}
        </div>
      </Wrapper>
      {children}
      <Wrapper open={!closed && count >= 10 && !done && !top}>
        <div className="w-full lg:mt-10" onClick={() => onPage(page + 1)}>
          {button ? button : <ButtonGreyDimm title={done ? `Loaded all ${items}` : `Show more ${items}`} />}
        </div>
      </Wrapper>
    </>
  )
}

export default WrapperPagination
