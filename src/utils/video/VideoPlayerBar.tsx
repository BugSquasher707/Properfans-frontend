import { parseMinutes } from "api/integration/functions"
import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im"
import { IoMdPause } from "react-icons/io"
import { MdFullscreen, MdPlayArrow } from "react-icons/md"

const VideoPlayerBar = ({
  audio,
  duration,
  fullscreen,
  muted,
  light,
  played,
  playedPercentage,
  playing,
  setFullscreen,
  setMuted,
  setPlaying,
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp
}: {
  audio?: boolean
  duration: number
  fullscreen: boolean
  muted: boolean
  light?: boolean
  played: number
  playedPercentage: number
  playing: boolean
  setFullscreen: any
  setMuted: any
  setPlaying: any
  onSeekMouseDown: any
  onSeekChange: any
  onSeekMouseUp: any
}) => {
  return (
    <>
      <div className={`absolute left-0 bottom-0 h-full w-full ${audio ? "" : "opacity-0 hover:opacity-100"}`}>
        <div
          className={`absolute left-0 bottom-0 h-80 w-full bg-gradient-to-t from-grey-40 to-transparent ${
            audio ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`absolute left-0 bottom-0 grid h-50 w-full items-center gap-10 p-10 ${
            audio ? "grid-cols-[auto,1fr,auto,auto]" : "grid-cols-[auto,1fr,auto,auto,auto]"
          }`}
        >
          <button
            className={`group flex h-30 w-30 items-center justify-center rounded-4 ${
              light ? "hover:bg-grey-10" : "hover:bg-white-10"
            }`}
            onClick={() => setPlaying(!playing)}
          >
            <Wrapper open={playing}>
              <IoMdPause className={`text-20 group-hover:text-purple ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
            <Wrapper open={!playing}>
              <MdPlayArrow className={`text-28 group-hover:text-purple ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
          </button>
          <div className="group relative grid h-30 w-full grid-cols-1 items-center gap-4">
            <div className={`flex  h-4 w-full items-center justify-start ${light ? "bg-grey-20" : "bg-white-20"}`}>
              <div
                className={`h-4 group-hover:bg-purple ${light ? "bg-black" : "bg-white"}`}
                style={{ width: `${playedPercentage * 100}%` }}
              ></div>
            </div>
            <input
              className="player-seek absolute left-0 top-[50%] mx-[-9px] w-[calc(100%+18px)] translate-y-[-50%] transform cursor-pointer"
              max={0.999999}
              min={0}
              step="any"
              type="range"
              value={playedPercentage}
              onChange={(e) => onSeekChange(e)}
              onMouseDown={onSeekMouseDown}
              onMouseUp={(e) => onSeekMouseUp(e)}
            />
          </div>
          <div
            className={`cursor-pointer text-12 font-bold opacity-60 hover:opacity-100 ${
              light ? "text-black" : "text-white"
            }`}
          >
            {parseMinutes(played)} {duration !== Infinity ? `/ ${parseMinutes(duration)}` : ""}
          </div>
          <button
            className={`group flex h-30 w-30  items-center justify-center rounded-4 ${
              light ? "hover:bg-grey-10" : "hover:bg-white-10"
            }`}
            onClick={() => setMuted(!muted)}
          >
            <Wrapper open={muted}>
              <ImVolumeMute2 className={`text-20 group-hover:text-purple ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
            <Wrapper open={!muted}>
              <ImVolumeMute className={`text-20 group-hover:text-purple ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
          </button>
          <Wrapper open={!audio}>
            <button
              className="group flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
              onClick={() => setFullscreen(!fullscreen)}
            >
              <MdFullscreen className="text-24 text-white group-hover:text-purple" />
            </button>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default VideoPlayerBar
