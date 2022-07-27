import React from "react"

const Wrapper = ({ children, open }: { children: any; open: any }) => {
  return <>{open ? children : ""}</>
}

export default Wrapper
