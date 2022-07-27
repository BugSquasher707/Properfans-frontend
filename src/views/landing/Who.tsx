import WrapperLanding from "components/wrappers/WrapperLanding"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProfileBrandInterface } from "libs/interfaces"
import React from "react"
import { MdAdd } from "react-icons/md"
import { useHistory } from "react-router"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"
const Who = () => {
  const { brands, setBrand } = useProps()

  const history = useHistory()

  const onLink = (link: string) => {
    history.push(link)
  }

  const onGrid = () => {
    let newCols = "grid-cols-2"

    switch (brands.length) {
      case 1:
        newCols = "grid-cols-1"
        break
      case 2:
        newCols = "grid-cols-2"
        break
      case 3:
        newCols = "grid-cols-2 sm:grid-cols-3"
        break
    }

    return newCols
  }

  return (
    <>
      <WrapperLanding logo>
        <div className="grid w-full grid-cols-1 gap-30 md:gap-40">
          <div className="grid w-full grid-cols-1">
            <div className="w-full text-center text-20 font-bold text-white sm:text-24 lg:text-32">Who is online?</div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-full justify-center">
              <div className={`grid max-w-[500px] flex-wrap items-center justify-center gap-14 ${onGrid()}`}>
                {brands.map((profile: ProfileBrandInterface, key: number) => (
                  <button
                    key={key}
                    className="grid w-[120px] max-w-full grid-cols-1 rounded-4 bg-white-10 p-18 pb-24 transition-colors hover:bg-white-20 xs:w-[136px] sm:w-[156px]"
                    onClick={() => {
                      setBrand(profile.handle)
                      onLink(URL.CREATOR.BASE)
                    }}
                  >
                    <div className="relative w-full pt-[100%]">
                      <div className="absolute top-0 left-0 h-full w-full">
                        {profile.avatar ? (
                          <img alt="" className="w-full rounded-4" src={profile.avatar} />
                        ) : (
                          <div className="w-full rounded-4 bg-grey-3 pt-[100%]"></div>
                        )}
                      </div>
                    </div>
                    <div className="trunace mt-24 w-full overflow-hidden overflow-ellipsis text-center text-14 font-bold text-white">
                      {profile.userName}
                    </div>
                  </button>
                ))}
                <button
                  className="grid-cols flex w-[120px] max-w-full items-center rounded-4 bg-white-10 p-18 pb-24 transition-colors hover:bg-white-20 xs:w-[136px] sm:w-[156px]"
                  onClick={() => onLink(URL.CREATOR.CLUB.ADD)}
                >
                  <div className="grid w-full grid-cols-1">
                    <div className="relative flex w-full justify-center pt-[100%]">
                      <div className="absolute top-[50%] left-[50%] flex h-60 w-60 translate-x-[-50%] translate-y-[-50%] transform items-center justify-center rounded-full border-2 border-white">
                        <MdAdd className="text-[36px] text-white" />
                      </div>
                    </div>
                    <div className="mt-20 w-full text-14 font-bold text-white">Add club</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <ButtonWhite action={URL.CREATOR.DASHBOARD.CLUBS} title={"Manage Clubs"} small />
          </div>
        </div>
      </WrapperLanding>
    </>
  )
}

export default Who
