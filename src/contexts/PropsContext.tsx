import { showAllUserClub } from "api/endpoints/club"
import { statusApi } from "api/endpoints/status"
import {
  defaultTheme,
  getterBrand,
  getterCart,
  getterCoupon,
  getterTheme,
  getterThemeSystem,
  getterToken,
  setterBrand,
  setterCart,
  setterCoupon,
  setterTheme,
  setterThemeSystem
} from "api/integration/cookies"
import { themeUser } from "api/integration/theme"
import { createCtx } from "contexts/Context"
import { authRefresh, authVerify } from "ellingsenx/api/auth"
import { getWallet } from "ellingsenx/api/wallet"
import { sampleUser } from "libs/data/user"
import { sampleWallet } from "libs/data/wallet"
import { AnimationType, OverlayType, ThemeType } from "libs/enums"
import { ProfileBrandInterface, PropercoinsCartInterface, UserInterface, WalletInterface } from "libs/interfaces"
import React, { createContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"

type PropsContextType = {
  admin: boolean
  animation: AnimationType
  authenticated: boolean
  brand: string
  brandActive: any
  setBrandActive: any
  brands: ProfileBrandInterface[]
  cart: PropercoinsCartInterface[]
  coupon: string
  loading: boolean
  oneSignal: boolean
  overlay: OverlayType
  path: string
  route: boolean
  socket: any
  socketContent: any
  theme: ThemeType
  themeSelected: ThemeType
  themeSystem: boolean
  token: any
  tokenRefresh: any
  user: UserInterface
  wallet: WalletInterface
  setAnimation: any
  setAuthenticated: any
  setBrand: any
  setBrands: any
  setCart: any
  setCoupon: any
  setLoading: any
  setOverlay: any
  setPath: any
  setThemeSelected: any
  setThemeSystem: any
  setToken: any
  setTokenRefresh: any
  setUser: any
  setWallet: any
  onReset: any
}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(undefined)

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "brand",
    "cart",
    "consent",
    "coupon",
    "emojis",
    "gifs",
    "theme",
    "theme_system",
    "token",
    "volume"
  ])

  const [admin] = useState(false)
  const [animation, setAnimation] = useState(AnimationType.None)
  const [authenticated, setAuthenticated] = useState(false)
  const [brand, setBrand] = useState(getterBrand(cookies.brand))
  const [brandActive, setBrandActive] = useState({})
  const [brands, setBrands] = useState<ProfileBrandInterface[]>([])
  const [cart, setCart] = useState<PropercoinsCartInterface[]>(getterCart(cookies.cart))
  const [coupon, setCoupon] = useState(getterCoupon(cookies.coupon))
  const [loading, setLoading] = useState(true)
  const [oneSignal] = useState(false)
  const [overlay, setOverlay] = useState(OverlayType.Default)
  const [path, setPath] = useState(window.location.pathname)
  const [route] = useState(parseInt(process.env.REACT_APP_ADMIN ?? "") ? true : false)
  const [socket] = useState<any>()
  const [socketContent] = useState<any>()
  const [theme, setTheme] = useState(
    getterThemeSystem(cookies.theme_system) ? defaultTheme() : getterTheme(cookies.theme)
  )
  const [themeSelected, setThemeSelected] = useState(getterTheme(cookies.theme))
  const [themeSystem, setThemeSystem] = useState(getterThemeSystem(cookies.theme_system))
  const [token, setToken] = useState<string>()
  const [tokenRefresh, setTokenRefresh] = useState<string>(getterToken(cookies.token))
  const [user, setUser] = useState<UserInterface>(sampleUser)
  const [wallet, setWallet] = useState<WalletInterface>(sampleWallet)

  useEffect(() => {
    if (animation !== AnimationType.None && token) {
      onLoad()
    }

    if (animation === AnimationType.Login) {
      setBrand("")
      setCart([])
    }
  }, [animation])

  useEffect(() => {
    if (brand) {
      setterBrand(setCookie, brand)
      setOverlay(OverlayType.Default)
    }
  }, [brand])

  useEffect(() => {
    if (authenticated && user.creator && brands && brands.length > 0 && !brand) {
      setOverlay(OverlayType.Who)
    } else {
      setOverlay(OverlayType.Default)
    }
  }, [authenticated, brand, brands])

  useEffect(() => {
    if (brands && brands.length > 0 && brand) {
      const newBrandActive = brands.find((profile: ProfileBrandInterface) => profile.handle === brand)

      if (newBrandActive) {
        setBrandActive(newBrandActive)
      }
    }
  }, [brand, brands])

  useEffect(() => {
    if (brands && brands.length > 0) {
      const newBrand: any = brands.find((profile: any) => profile.handle === brand)

      if (newBrand) {
        setBrand(newBrand.handle)
      }
    }
  }, [brands])

  useEffect(() => {
    setterCart(setCookie, cart)
  }, [cart])

  useEffect(() => {
    setterCoupon(setCookie, coupon)
  }, [coupon])

  useEffect(() => {
    if (overlay === OverlayType.Maintenance || overlay === OverlayType.Banned) {
      setLoading(false)
    }
  }, [overlay])

  useEffect(() => {
    if (overlay !== OverlayType.Who && overlay !== OverlayType.Banned) {
      setOverlay(OverlayType.Default)
    }
  }, [path])

  useEffect(() => {
    setterTheme(setCookie, themeSelected)
    setTheme(getterThemeSystem(cookies.theme_system) ? defaultTheme() : getterTheme(cookies.theme))
  }, [themeSelected])

  useEffect(() => {
    setterThemeSystem(setCookie, themeSystem)
    setTheme(getterThemeSystem(cookies.theme_system) ? defaultTheme() : getterTheme(cookies.theme))
  }, [themeSystem])

  useEffect(() => {
    if (loading) {
      onLoad()
    }
  }, [loading])

  useEffect(() => {
    setAuthenticated(token && user ? true : false)
  }, [token, user])

  useEffect(() => {
    setTheme(themeUser(authenticated, user))
  }, [user, authenticated])

  useEffect(() => {
    if (tokenRefresh) {
      setCookie("token", tokenRefresh, { path: "/" })
    }

    if (!authenticated) {
      onLoad()
    }
  }, [authenticated, tokenRefresh])

  const onLoad = async () => {
    const result = await statusApi()

    if (!result) {
      setOverlay(OverlayType.Server)
    }

    if (tokenRefresh) {
      const resultRefresh = await authRefresh(tokenRefresh)

      if (resultRefresh && resultRefresh.data) {
        const resultVerify = await authVerify(resultRefresh.data.user.id)

        if (resultVerify && resultVerify.data) {
          console.log(resultVerify)

          setUser({
            ...resultRefresh.data.user,
            ...resultVerify.data,
            creator: true
          })

          const walletResult = await getWallet(resultRefresh.data.accessToken, resultRefresh.data.user.id)
          if(walletResult.data) {
            setWallet(walletResult.data)
          }

          const result: any = await showAllUserClub(token, resultVerify.data.id)

          if (result.data) {
            setBrands(result.data)
          }
        } else {
          setUser(resultRefresh.data.user)
        }

        setToken(resultRefresh.data.accessToken)
        setTokenRefresh(resultRefresh.data.refreshToken)
      } else {
        onReset()
      }
    } else {
      onReset()
    }
    setLoading(false)
  }

  const onReset = () => {
    setUser(sampleUser)

    removeCookie("brand", { path: "/" })
    removeCookie("cart", { path: "/" })
    removeCookie("consent", { path: "/" })
    removeCookie("coupon", { path: "/" })
    removeCookie("emojis", { path: "/" })
    removeCookie("gifs", { path: "/" })
    removeCookie("theme", { path: "/" })
    removeCookie("theme_system", { path: "/" })
    removeCookie("token", { path: "/" })
    removeCookie("volume", { path: "/" })

    setToken("")
    setTokenRefresh("")

    setAuthenticated(false)
  }

  return (
    <>
      <CtxProvider
        value={{
          admin,
          animation,
          authenticated,
          brand,
          brandActive,
          brands,
          cart,
          coupon,
          loading,
          oneSignal,
          overlay,
          path,
          route,
          socket,
          socketContent,
          theme,
          themeSelected,
          themeSystem,
          token,
          tokenRefresh,
          user,
          wallet,
          setAnimation,
          setAuthenticated,
          setBrand,
          setBrandActive,
          setBrands,
          setCart,
          setCoupon,
          setLoading,
          setOverlay,
          setPath,
          setThemeSelected,
          setThemeSystem,
          setToken,
          setTokenRefresh,
          setUser,
          setWallet,
          onReset
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default PropsProvider
