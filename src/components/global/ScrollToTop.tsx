import { useProps } from "contexts/PropsContext"
import React, { useEffect } from "react"
import { useHistory } from "react-router"

const ScrollToTop = () => {
  const { setPath } = useProps()

  const history = useHistory()

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0)

      updatePath()
    })
  }, [])

  const updatePath = () => {
    setPath(window.location.pathname)
  }

  return <></>
}

export default ScrollToTop
