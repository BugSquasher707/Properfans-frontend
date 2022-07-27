import React from "react"

const ButtonAvatarCutOut = ({ children }: { children: any }) => {
  return (
    <>
      <div className="flex">
        <svg height="0" width="0">
          <defs>
            <clipPath id="shape-avatar">
              <path d="M47.5521 1.8935C46.5557 4.0558 46 6.463 46 9C46 18.3888 53.6112 26 63 26C65.537 26 67.9442 25.4443 70.1065 24.4479C71.3343 28.074 72 31.9592 72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C40.0408 0 43.926 0.665732 47.5521 1.8935Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="clip-path-avatar">{children}</div>
      </div>
    </>
  )
}

export default ButtonAvatarCutOut
