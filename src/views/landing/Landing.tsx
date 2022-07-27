import { openLink } from "api/integration/functions"
import { ReactComponent as Bitful } from "assets/img/bitful.svg"
import { ReactComponent as EllingsenGroup } from "assets/img/ellingsengroup.svg"
import { ReactComponent as Streamertools } from "assets/img/streamertools.svg"
import Footer from "components/footer/Footer"
import LandingInfluencers from "components/landing/LandingInfluencers"
import LandingPattern from "components/landing/LandingPattern"
import LandingProducts from "components/landing/LandingProducts"
import LandingTeam from "components/landing/LandingTeam"
import LandingTimeLine from "components/landing/LandingTimeLine"
import NavLanding from "components/nav/NavLanding"
import { LandingPatternType } from "libs/enums"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import VideoPlayer from "utils/video/VideoPlayer"

const Landing = () => {
  const [open, setOpen] = useState(false)

  const Pattern = [
    {
      title: "Core Values",
      text: "Our core values define and guide us"
    },
    {
      title: "Mission Accomplishments",
      text: "What we've already achieved"
    }
  ]

  const TimeLine = [
    { title: "November 2020", text: "Building Properfans 💜" },
    { title: "November 2021", text: "Launched service" },
    { title: "May 2022", text: "50.000 fans total" },
    { title: "December 2022", text: "1000+ exclusive creators" }
  ]

  return (
    <>
      <NavLanding />
      <div className="pag flex w-full justify-center">
        <div className="relative flex w-full max-w-screen-xl flex-wrap items-start">
          <div
            className="mb-20 grid w-full grid-cols-1 items-center gap-30 lg:mb-50 lg:grid-cols-2 xl:mb-100 xl:gap-100 "
            id="introduction"
          >
            <div className="grid w-full gap-20 lg:gap-30 xl:gap-50">
              <div className="grid w-full gap-10">
                <div className="w-full text-14 font-bold text-purple">Introduction</div>
                <div className="w-full text-32 font-black text-black">
                  The community platform for creators and their proper fans
                </div>
              </div>
              <VideoPlayer
                length={"0:34"}
                pre={true}
                title={"Video about Properfans"}
                video={"https://bradmax.com/static/video/tears_of_steel.mp4"}
              />
            </div>
            <div className="grid w-full gap-26">
              <div className="w-full text-16 text-grey-40">
                We&apos;ve been fortunate enough to help some great creators with monetizing their content. Here&apos;s
                some of them:
              </div>
              <LandingInfluencers />
              <div className="w-full text-16 text-grey-40">
                What else should we tell you? We&apos;ve created Properfans to help both fans and their favorite
                creators. Now it&apos;s finally simple to create and monetize your content. Fans can easily find
                creators, subscribe, donate and enjoy exclusive content
              </div>
            </div>
          </div>
          <div
            className="mt-40 mb-30 grid w-full grid-cols-1 items-start gap-30 md:mb-50 lg:mb-220 lg:grid-cols-2 lg:gap-50 xl:mb-240 xl:gap-100"
            id="mission"
          >
            <div className="grid w-full gap-30">
              <div className="grid w-full gap-10">
                <div className="w-full text-14 font-bold text-purple">Our mission</div>
                <div className="w-full text-32 font-black text-black">What&apos;s our objective?</div>
              </div>
              <div className="w-full text-16 text-grey-40">
                It&apos;s simple, help creators focus on creativity, allow them to easily monetize their content and
                interact with their fans in just a few clicks
              </div>
              <Link className="hidden w-full font-bold text-purple" to="/">
                Open Founder&apos;s Letter
              </Link>
            </div>
            <div className="relative grid w-full grid-cols-2 justify-end space-x-[30px] lg:flex lg:grid-cols-1">
              <img alt="" className="w-full rounded-4 lg:w-280" src={"/media/office/office_1.jpg"} />
              <img
                alt=""
                className="relative w-full rounded-4 lg:absolute lg:top-280 lg:right-320 lg:w-280"
                src={"/media/office/office_2.jpg"}
              />
            </div>
          </div>
          <div className="relative mb-30 grid w-full grid-cols-2 gap-50 lg:mb-50 lg:grid-cols-4 xl:mb-100">
            <div className="absolute top-13 left-13 right-0 hidden h-2 bg-grey-10 lg:flex">
              <MdKeyboardArrowRight className="absolute -top-10 -right-10 text-22 text-grey-10" />
            </div>
            {TimeLine.map((element: any, key: number) => (
              <LandingTimeLine key={key} data={element} />
            ))}
          </div>
          <div className="lg:30 mb-30 w-full xl:mb-100" id="values">
            <LandingPattern data={Pattern[LandingPatternType.Core]} type={LandingPatternType.Core} />
          </div>
          <div
            className="mt-40 mb-30 hidden w-full grid-cols-1 items-center gap-20 lg:mb-50 lg:gap-30 xl:mb-100"
            id="partners"
          >
            <div className="w-full flex-grow-0 lg:w-180">
              <div className="mb-14 w-full text-14 font-bold text-purple">Products</div>
              <div className="w-full text-14 text-grey-40">Explore more of our products</div>
            </div>
            <div className="flex w-full justify-start">
              <div className="w-[100px] max-w-full flex-grow-0 border-b-1 border-grey-10"></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-3 lg:w-auto">
              <div className="center h-34 w-full">
                <Bitful className="h-full w-180 max-w-full fill-current text-black" />
              </div>
              <div className="center h-34 w-full">
                <Streamertools className="h-full w-180 max-w-full fill-current text-black" />
              </div>
              <div className="center h-34 w-full">
                <EllingsenGroup className="h-full w-180 max-w-full fill-current text-black" />
              </div>
            </div>
          </div>
          <div className="mb-30 w-full lg:mb-50 xl:mb-100" id="team">
            <div className="mb-10 w-full text-14 font-bold text-purple">Team</div>
            <div className="mb-30 w-400 max-w-full text-32 font-black text-black">The team behind the curtains</div>
            <button
              className="flex w-full items-center gap-10 text-14 font-bold text-purple"
              onClick={(e) => openLink(e, "https://www.linkedin.com/company/ellingsen-group/")}
            >
              We&apos;re Hiring
              <BsArrowRight className="text-20 text-purple" />
            </button>
          </div>
          <LandingTeam />
          <div className="mb-30 w-full lg:mb-50 xl:mb-100" id="products">
            <div className="mb-10 w-full text-14 font-bold text-purple">Other Products</div>
            <div className="mb-30 w-400 max-w-full text-32 font-black text-black">
              Other creator products, made by Ellingsen Group
            </div>
            <div className="flex w-full items-center gap-10 text-14 font-bold text-purple">
              <EllingsenGroup className="h-24 fill-current text-black opacity-20" />
            </div>
          </div>
          <LandingProducts />
          <button
            className="mb-30 hidden w-full justify-center text-center text-16 font-bold text-black md:flex lg:mb-50 xl:mb-100"
            onClick={() => setOpen(!open)}
          >
            See all Ellingsen Group products
          </button>
          <div className="w-full lg:mb-40 xl:mb-80" id="accomplishments">
            <LandingPattern data={Pattern[LandingPatternType.Statistics]} type={LandingPatternType.Statistics} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Landing
