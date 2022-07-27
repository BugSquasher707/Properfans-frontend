import { parseMinutes } from "api/integration/functions"
import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im"
import { IoMdPause } from "react-icons/io"
import { MdPlayArrow } from "react-icons/md"

const AudioPlayerBar = ({
  duration,

  muted,

  played,
  playedPercentage,
  playing,
  setMuted,
  setPlaying,
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp
}: {
  duration: number
  muted: boolean

  played: number
  playedPercentage: number
  playing: boolean
  setMuted: any
  setPlaying: any
  onSeekMouseDown: any
  onSeekChange: any
  onSeekMouseUp: any
}) => {
  return (
    <>
      <div className="absolute left-0 bottom-0 h-full w-full">
        <div
          className="absolute left-0 bottom-0 grid h-50 w-full grid-cols-[auto,1fr,auto,auto] items-center gap-10 p-10
          "
        >
          <button
            className="group flex h-30 w-30 items-center justify-center rounded-4 hover:bg-grey-3"
            onClick={() => setPlaying(!playing)}
          >
            <Wrapper open={playing}>
              <IoMdPause className="text-20 text-black group-hover:text-purple" />
            </Wrapper>
            <Wrapper open={!playing}>
              <MdPlayArrow className="text-28 text-black group-hover:text-purple" />
            </Wrapper>
          </button>
          <div className="group relative grid h-30 w-full grid-cols-1 items-center gap-4">
            <div className="flex  h-4 w-full items-center justify-start bg-grey-20">
              <div className="h-4 bg-black group-hover:bg-purple" style={{ width: `${playedPercentage * 100}%` }}></div>
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
          <div className="cursor-pointer text-12 font-bold text-black opacity-60 hover:opacity-100">
            {parseMinutes(played)} {duration !== Infinity ? `/ ${parseMinutes(duration)}` : ""}
          </div>
          <button
            className="group flex h-30 w-30  items-center justify-center rounded-4 hover:bg-grey-10"
            onClick={() => setMuted(!muted)}
          >
            <Wrapper open={muted}>
              <ImVolumeMute2 className="text-20 text-black group-hover:text-purple" />
            </Wrapper>
            <Wrapper open={!muted}>
              <ImVolumeMute className="text-20 text-black group-hover:text-purple" />
            </Wrapper>
          </button>
        </div>
      </div>
    </>
  )
}

export default AudioPlayerBar
