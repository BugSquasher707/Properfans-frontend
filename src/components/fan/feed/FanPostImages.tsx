import FanPostImage from "components/fan/feed/FanPostImage"
import FanPostImagesGallery from "components/fan/feed/FanPostImagesGallery"
import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useState } from "react"

const FanPostImages = ({
  images,
  upload,
  handlerDelete,
  handlerMove
}: {
  images: string[]
  upload?: boolean
  handlerDelete?: any
  handlerMove?: any
}) => {
  const [active, setActive] = useState(-1)

  useEffect(() => {
    console.log("Images", images)
  }, [images])

  const onGrid = () => {
    switch (images.length) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-2"
      default:
        return "grid-cols-2 md:grid-cols-3"
    }
  }

  return (
    <>
      <div className={`grid w-full gap-16 ${onGrid()}`}>
        {images.map((image: string, key: number) => (
          <div key={key} className="aspect-w-16 aspect-h-9 relative w-full">
            <FanPostImage
              end={images.length - 1}
              h={9}
              handlerActive={setActive}
              handlerDelete={handlerDelete}
              handlerMove={handlerMove}
              image={image}
              index={key}
              upload={upload}
              w={16}
            />
          </div>
        ))}
      </div>
      <Wrapper open={active >= 0}>
        <FanPostImagesGallery handler={setActive} images={images} index={active} />
      </Wrapper>
    </>
  )
}

export default FanPostImages
