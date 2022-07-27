import React from "react"

const YoutubeEmbed = ({ id }: { id: string }) => {
  const config = "?rel=0&version=3&controls=0&showinfo=0&autohide=1"
  return (
    <div className="pb-56p h-0 overflow-hidden rounded-4">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="l-0 t-0 absolute h-full w-full"
        frameBorder="0"
        height="480"
        src={`https://www.youtube.com/embed/${id}${config}`}
        title="Embedded youtube"
        width="853"
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeEmbed
