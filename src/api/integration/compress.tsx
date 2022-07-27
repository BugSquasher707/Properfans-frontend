import Resizer from "react-image-file-resizer"

export const resizeImage = async (file: File) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      5000,
      5000,
      "png",
      100,
      0,
      (uri) => {
        resolve(uri)
      },
      "file"
    )
  })
}
