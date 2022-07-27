import { ReactComponent as CoinIcon } from "assets/img/propercoins/coin.svg"
import { ReactComponent as CoinLeft } from "assets/img/propercoins/propercoins_7.svg"
import { ReactComponent as CoinRight } from "assets/img/propercoins/propercoins_8.svg"
import Footer from "components/footer/Footer"
import NavWiki from "components/nav/NavWiki"
import WikiArticles from "components/wiki/WikiArticles"
import WikiFaq from "components/wiki/WikiFaq"
import WikiInfo from "components/wiki/WikiInfo"
import WikiPurchase from "components/wiki/WikiPurchase"
import WikiUsage from "components/wiki/WikiUsage"
import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import VideoPlayer from "utils/video/VideoPlayer"

const WikiProperCoins = () => {
  return (
    <>
      <NavWiki />
      <div className="light-r md:min-h-screen relative z-0 flex w-full flex-wrap pt-120 pb-60">
        <img
          alt=""
          className="absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] transform object-cover"
          src={"/gradients/gradient_top.png"}
        />
        <div className="p-side relative flex w-full justify-center">
          <div className="relative grid w-full max-w-screen-xl grid-cols-1 gap-40 lg:gap-60">
            <div className="w-full text-center">
              <div className="mb-14 w-full text-40 font-extrabold text-white md:text-64 lg:text-100">Propercoins</div>
              <div className="w-full text-32 font-extrabold text-black dark:text-black">The exclusive currency</div>
              <div className="m-auto w-full md:w-1/2">
                <div className="my-32 w-full text-16 font-normal text-black dark:text-black">
                  The propercoin is a currency that gets you access to <br className="hidden lg:visible lg:flex" />{" "}
                  exclusive corners of the creator economy.
                </div>
              </div>
              <div className="flex w-full justify-center">
                <ButtonPurple action={URL.FAN.SHOP} icon={<CoinIcon />} title={"Get Propercoins"} />
              </div>
            </div>
            <div className="m-auto grid w-full grid-cols-1 items-center justify-between gap-40 lg:m-0 lg:w-full lg:gap-60 xl:grid-cols-[auto,1fr,auto]">
              <div className="hidden w-[260px] xl:flex">
                <CoinLeft className="w-full max-w-full" />
              </div>
              <div className="flex w-full justify-center ">
                <div className="aspect-w-16 aspect-h-9 w-full max-w-full">
                  <VideoPlayer
                    length={"0:34"}
                    pre={true}
                    title={"Video about propercoins"}
                    video={"https://bradmax.com/static/video/tears_of_steel.mp4"}
                  />
                </div>
              </div>
              <div className="hidden w-[260px] xl:flex">
                <CoinRight className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pag mt-0 flex w-full justify-center bg-white pt-120">
        <div className="flex w-full max-w-screen-xl flex-wrap items-center gap-80 md:gap-100  lg:gap-180">
          <WikiInfo />
          <WikiUsage />
          <WikiPurchase />
          <WikiFaq />
          <WikiArticles />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WikiProperCoins
