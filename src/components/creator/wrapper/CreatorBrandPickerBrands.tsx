import Wrapper from "components/wrappers/Wrapper"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import React, { useState } from "react"
import { MdCheck } from "react-icons/md"
import { useHistory } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const CreatorBrandPickerBrands = ({ url }: { url: string }) => {
  const { brandActive, brands, setBrand } = useProps()

  const history = useHistory()

  const [open, setOpen] = useState(false)

  return (
    <>
      {brands.map((brand: any, key: number) => (
        <button
          key={key}
          className="group flex w-full items-center justify-start space-x-[12px] rounded-4 p-10 hover:bg-purple-10"
          onClick={() => {
            setBrand(brand.handle)
            setOpen(!open)
            history.push(url.replace(":param", brand.handle))
          }}
        >
          <div className="flex h-32 w-32 items-center justify-center rounded-full">
            {brand.avatar ? <img alt="" className="h-32 w-32 rounded-full" src={brand.avatar} /> : <Avatar />}
          </div>
          <div className="relative w-full">
            <WrapperAbsolute>
              <div className="mb-2 flex w-full">
                <div className="relative max-w-full select-none truncate overflow-ellipsis pr-20 text-14 font-bold text-black group-hover:text-purple">
                  {brand.userName}
                  <WrapperVerified>{brand.verified ? <Verified size={16} /> : ""}</WrapperVerified>
                </div>
              </div>
              <div className="w-full truncate overflow-ellipsis text-left text-12 font-bold text-grey-40">
                {brand.handle}
              </div>
            </WrapperAbsolute>
          </div>
          <div className="flex items-center">
            <Wrapper open={brandActive && brandActive.handle === brand.handle}>
              <MdCheck className="text-18 text-purple" />
            </Wrapper>
          </div>
        </button>
      ))}
    </>
  )
}

export default CreatorBrandPickerBrands
