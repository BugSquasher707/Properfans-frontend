import React, { useRef, useState } from "react"
import ReactPlayer from "react-player"
import AudioPlayerBar from "utils/video/AudioPlayerBar"

const AudioPlayer = ({ audio }: { audio: string }) => {
  const player = useRef<ReactPlayer>(null)

  const [volume] = useState(1)
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(false)

  const [played, setPlayed] = useState(0)
  const [playedPercentage, setPlayedPercentage] = useState(0)
  const [duration, setDuration] = useState(0)

  const [seeking, setSeeking] = useState(false)

  const onDuration = (state: any) => {
    setDuration(state)
  }

  const onProgress = (state: any) => {
    if (!seeking) {
      setPlayed(state.playedSeconds)
      setPlayedPercentage(state.played)
    }
  }

  const onSeekMouseDown = () => {
    setSeeking(true)
  }

  const onSeekMouseUp = (e: any) => {
    setSeeking(false)

    if (player.current) {
      player.current.seekTo(parseFloat(e.target.value))
    }
  }

  const onSeekChange = (e: any) => {
    setPlayedPercentage(e.target.value)
  }

  return (
    <>
      <div className="light-r pre-r h-full w-full">
        <div className="pre-r relative h-50 w-full overflow-hidden rounded-4 bg-grey-3">
          <ReactPlayer
            ref={player}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              file: {
                forceAudio: true
              }
            }}
            controls={false}
            height={"50px"}
            muted={muted}
            playing={playing}
            progressInterval={100}
            url={audio}
            volume={volume}
            width={"100%"}
            onDuration={(state) => onDuration(state)}
            onProgress={(state) => onProgress(state)}
          />

          <AudioPlayerBar
            duration={duration}
            muted={muted}
            played={played}
            playedPercentage={playedPercentage}
            playing={playing}
            setMuted={setMuted}
            setPlaying={setPlaying}
            onSeekChange={onSeekChange}
            onSeekMouseDown={onSeekMouseDown}
            onSeekMouseUp={onSeekMouseUp}
          />
        </div>
      </div>
    </>
  )
}

export default AudioPlayer
