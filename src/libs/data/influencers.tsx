import React from "react"
import { FaTwitch } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

export const influencers = [
  {
    title: "Guro Belly",
    text: "4.5M followers",
    link: "https://www.tiktok.com/@gurobelly?",
    icon: "/pages/landing/influencer_guro.jpg",
    platform: <SiTiktok className="text-14 text-purple" />
  },
  {
    title: "Snusleppa",
    text: "160K followers",
    link: "https://www.tiktok.com/@snusleppa?",
    icon: "/pages/landing/influencer_snusleppa.jpeg",
    platform: <SiTiktok className="text-14 text-purple" />
  },
  {
    title: "Linnea Lotvedt",
    text: "250K followers",
    link: "https://www.tiktok.com/@linnealotvedt?",
    icon: "/pages/landing/influencer_linnea.jpeg",
    platform: <SiTiktok className="text-14 text-purple" />
  },
  {
    title: "Mystixx",
    text: "17K followers",
    link: "https://www.twitch.tv/mystixx",
    icon: "/pages/landing/influencer_mystixx.png",
    platform: <FaTwitch className="text-14 text-purple" />
  }
]
