import React from "react"
import { useHistory } from "react-router"
import { useSwipeable } from "react-swipeable"

const WrapperSwipe = ({ children }: { children: any }) => {
  const history = useHistory()

  const swipeable = useSwipeable({
    onSwipedLeft: () => {
      history.goForward()
    },
    onSwipedRight: () => {
      history.goBack()
    }
  })

  return (
    <>
      <div {...swipeable} className="min-h-screen flex w-full flex-wrap">
        {children}
      </div>
    </>
  )
}

export default WrapperSwipe
