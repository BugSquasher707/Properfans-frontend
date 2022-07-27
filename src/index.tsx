import App from "App"
import PopupProvider from "contexts/PopupContext"
import PropsProvider from "contexts/PropsContext"
import { INTERCOM_APP_ID } from "libs/constants"
import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "react-toastify/dist/ReactToastify.css"
import { IntercomProvider } from "react-use-intercom"
import reportWebVitals from "reportWebVitals"

import "assets/styles/base/base.css"
import "assets/styles/base/fixed.css"
import "assets/styles/base/global.css"
import "assets/styles/base/index.css"
import "assets/styles/css/editor.css"
import "assets/styles/css/emoji.css"
import "assets/styles/css/fade.css"
import "assets/styles/css/fonts.css"
import "assets/styles/css/loader.css"
import "assets/styles/css/mask.css"
import "assets/styles/css/page.css"
import "assets/styles/css/phone.css"
import "assets/styles/css/player.css"
import "assets/styles/css/pull.css"
import "assets/styles/css/slider.css"
import "assets/styles/css/range.css"
import "assets/styles/css/toast.css"
import "assets/styles/css/themes.css"

const main = async () => {
  ReactDOM.render(
    <Suspense fallback="">
      <IntercomProvider appId={INTERCOM_APP_ID}>
        <PropsProvider>
          <PopupProvider>
            <App />
          </PopupProvider>
        </PropsProvider>
      </IntercomProvider>
    </Suspense>,
    document.getElementById("app")
  )
}

reportWebVitals()
main()
