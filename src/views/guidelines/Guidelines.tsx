import Properfans from "assets/img/properfansIcon.svg"
import { ReactComponent as Star } from "assets/img/star.svg"
import CookieBar from "components/cookie/CookieBar"
import Footer from "components/footer/Footer"
import NavDefault from "components/nav/NavDefault"
import { URL } from "libs/constants"
import { GuidelinesInterface } from "libs/interfaces"
import React from "react"
import { BiShieldQuarter } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import { FaDollarSign } from "react-icons/fa"
import { IoShield } from "react-icons/io5"
import { MdKeyboardArrowRight, MdLock, MdVideoLibrary, MdVpnKey } from "react-icons/md"
import { RiShieldStarFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import VideoPlayer from "utils/video/VideoPlayer"

const Guidelines = () => {
  const Categories = [
    {
      icon: <MdVideoLibrary className="text-22 text-purple" />,
      title: "Content Guidelines",
      text: "Properfans was founded on the belief in a proper platform. We gave it the name Proper for a reason. For something to be proper, it has to be genuine, clean and real. Read more...",
      link: URL.GUIDELINES.CONTENT
    },
    {
      icon: <IoShield className="text-22 text-purple" />,
      title: "Doxing Guidelines",
      text: "Doxing is the act of sharing the private information of others or aggregating their public information, usually out of malicious intent. Read more...",
      link: URL.GUIDELINES.DOXING
    },
    {
      icon: <FaDollarSign className="text-22 text-purple" />,
      title: "Sponsorship Guidelines",
      text: "In this article we go over our guidelines on sponsorships and partnerships between creators on our platform and third party brands. First and foremost, we want to make it crystal clear that properfans creators will have the right, and freedom, to promote the brands and products of their choice. Read more...",
      link: URL.GUIDELINES.DOXING
    }
  ]

  return (
    <>
      <NavDefault />
      <div className="pag flex w-full justify-center">
        <div className="relative flex w-full max-w-screen-xl flex-wrap items-start">
          <div className="mt-20 mb-20 grid w-full grid-cols-1 gap-20 md:mt-40 md:mb-40 md:gap-40 lg:mt-40 lg:mb-100 lg:grid-cols-[1fr,1fr] lg:gap-100">
            <div className="w-full">
              <div className="mb-10 w-full text-14 font-bold text-purple">Community Guidelines</div>
              <div className="mb-20 w-full text-32 font-black text-black md:mb-30">The proper guidelines</div>
              <div className="w-full text-14 text-grey-40">
                Our community guidelines are designed to ensure that our community stays protected. They set out
                what&apos;s allowed and not allowed on Properfans, and apply to all types of content on our platform,
                including videos, comments, links and thumbnails
              </div>
            </div>
            <div className="center relative my-40 w-full lg:my-30">
              <div className="center">
                <img alt="" className="w-120 sm:w-180" src={Properfans} />
              </div>
              <div className="center absolute top-0 left-0 h-80 w-80 rounded-full border-1 border-grey-4">
                <div className="center h-58 w-58 rounded-full border-1 border-grey-10">
                  <MdVpnKey className="text-30 text-black" />
                </div>
              </div>
              <div className="center absolute top-0 right-0 h-80 w-80 translate-y-[-50%] transform rounded-full border-1 border-grey-4">
                <div className="center h-58 w-58 rounded-full border-1 border-grey-10">
                  <RiShieldStarFill className="text-30 text-black" />
                </div>
              </div>
              <div className="center absolute bottom-0 right-40 h-80 w-80 translate-y-[50%] transform rounded-full border-1 border-grey-4">
                <div className="center h-58 w-58 rounded-full border-1 border-grey-10">
                  <MdLock className="text-30 text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-20 grid w-full grid-cols-1 gap-20 md:mb-40 md:gap-40 lg:mb-100 lg:grid-cols-[1fr,1fr] lg:gap-100">
            <VideoPlayer
              length={"0:34"}
              pre={true}
              title={"Properfans community guidelines"}
              video={"https://bradmax.com/static/video/tears_of_steel.mp4"}
            />
            <div className="w-full">
              <div className="mb-10 w-full text-14 font-bold text-purple">Video</div>
              <div className="mb-20 w-full text-32 font-black text-black md:mb-30">
                See our video about community guidelines
              </div>
              <button className="flex w-full items-center gap-10 text-14 font-bold text-purple">
                Play Video Fullscreen
                <BsArrowRight className="text-20 text-purple" />
              </button>
            </div>
          </div>
          <div className="mb-20 grid w-full grid-cols-1 gap-20 md:mb-40 md:gap-40 lg:mb-100 lg:grid-cols-[1fr,1fr] lg:gap-100">
            <div className="w-full">
              <div className="mb-10 w-full text-14 font-bold text-purple">Fairness</div>
              <div className="mb-20 w-full text-32 font-black text-black md:mb-30">
                Community guidelines that are fair
              </div>
              <div className="w-full text-14 text-grey-40">
                Freedom of expression is one of our core values, but there are certain limits and this is where we
                address them
              </div>
            </div>
          </div>
          <div className="mb-40 grid w-full grid-cols-1 gap-20 md:grid-cols-[1fr,1fr] md:gap-40 lg:mb-100 lg:gap-60">
            {Categories.map((category: GuidelinesInterface, key: number) => (
              <div key={key} className="grid w-full grid-cols-1 gap-20">
                <div className="w-full">
                  <div className="center h-46 w-46 rounded-full bg-purple-10">{category.icon}</div>
                </div>
                <div className="w-full text-14 font-bold text-black">{category.title}</div>
                <div className="w-full text-14 font-bold text-grey-40">{category.text}</div>
                <Link className="flex w-full items-center text-14 font-bold text-purple" to={category.link}>
                  Learn more
                  <MdKeyboardArrowRight className="text-18 text-purple" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mb-20 grid w-full grid-cols-1 gap-20 md:mb-40 md:gap-40 lg:mb-100 lg:grid-cols-[1fr,1fr] lg:gap-100">
            <div className="w-full">
              <div className="mb-10 w-full text-14 font-bold text-purple">Submitting</div>
              <div className="mb-20 w-full text-32 font-black text-black md:mb-30">Are we missing anything?</div>
              <div className="mb-20 w-full text-14 text-grey-40 md:mb-30">
                If you believe we are missing something in our community guidelines, please submit a request for a
                change. Our team will review it within 72 hours
              </div>
              <button className="flex w-full items-center gap-10 text-14 font-bold text-purple">
                Submit Request
                <BsArrowRight className="text-20 text-purple" />
              </button>
            </div>
            <div className="center relative w-full">
              <div className="center relative">
                <BiShieldQuarter className="text-180 text-black" />
                <Star className="absolute -right-50 -top-30 w-48 fill-current text-purple" />
                <Star className="absolute -right-30 -bottom-10 w-24 fill-current text-purple-40" />
                <Star className="absolute -left-30 top-[40%] w-24 fill-current text-purple-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBar />
    </>
  )
}

export default Guidelines
