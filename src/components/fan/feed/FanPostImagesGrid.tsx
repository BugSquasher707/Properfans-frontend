import FanPostImageGrid from "components/fan/feed/FanPostImageGrid"
import FanPostImagesGallery from "components/fan/feed/FanPostImagesGallery"
import Wrapper from "components/wrappers/Wrapper"
import React, { useState } from "react"

const FanPostImagesGrid = ({ images, fullscreen }: { images: string[]; fullscreen: boolean }) => {
  const [active, setActive] = useState(-1)

  const onActive = (key: number) => {
    if (fullscreen) {
      setActive(key)
    }
  }

  console.log(images)

  return (
    <>
      <div className="w-full">
        {images.length === 1 ? (
          <div className="relative w-full break-all">
            <FanPostImageGrid handlerImage={onActive} image={images[0]} index={0} />
          </div>
        ) : (
          ""
        )}
        {images.length === 2 ? (
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="aspect-w-5 aspect-h-7 relative w-full">
              <FanPostImageGrid h={7} handlerImage={onActive} image={images[0]} index={0} w={5} />
            </div>
            <div className="aspect-w-5 aspect-h-7 relative w-full">
              <FanPostImageGrid h={7} handlerImage={onActive} image={images[1]} index={1} w={5} />
            </div>
          </div>
        ) : (
          ""
        )}
        {images.length >= 3 ? (
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="aspect-w-5 aspect-h-7 relative w-full">
              <FanPostImageGrid h={7} handlerImage={onActive} image={images[0]} index={0} w={5} />
            </div>
            <div className="grid w-full grid-cols-1 gap-4">
              <div className="aspect-w-10 aspect-h-7 relative w-full">
                <FanPostImageGrid h={7} handlerImage={onActive} image={images[1]} index={1} w={10} />
              </div>
              <div className="aspect-w-10 aspect-h-7 relative w-full">
                <FanPostImageGrid
                  h={7}
                  handlerImage={onActive}
                  image={images[2]}
                  index={2}
                  plus={images.length - 2}
                  w={10}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Wrapper open={active >= 0}>
        <FanPostImagesGallery handler={onActive} images={images} index={active} />
      </Wrapper>
    </>
  )
}

export default FanPostImagesGrid
