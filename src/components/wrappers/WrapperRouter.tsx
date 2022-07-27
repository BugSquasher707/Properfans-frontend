import OverlayLoading from "components/overlays/OverlayLoading"
import React, { Suspense } from "react"
import { Switch } from "react-router"

const WrapperRouter = ({ children }: { children: any }) => {
  return (
    <>
      <Suspense fallback={<OverlayLoading />}>
        <Switch>{children}</Switch>
      </Suspense>
    </>
  )
}

export default WrapperRouter
