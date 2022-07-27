import { statusApi } from "api/endpoints/status"
import { openUrlExtern, roundNumber } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import ProperCoin1 from "assets/img/propercoins/propercoins_1.svg"
import ProperCoin2 from "assets/img/propercoins/propercoins_2.svg"
import ProperCoin3 from "assets/img/propercoins/propercoins_3.svg"
import ProperCoin4 from "assets/img/propercoins/propercoins_4.svg"
import ProperCoin5 from "assets/img/propercoins/propercoins_5.svg"
import ProperCoin6 from "assets/img/propercoins/propercoins_6.svg"
import { ProductType } from "libs/enums"
import { PropercoinsCartInterface } from "libs/interfaces"

export const addToCart = (cart: PropercoinsCartInterface[], item: PropercoinsCartInterface) => {
  let selected = false

  for (const product of cart) {
    if (product.id === item.id && !selected) {
      selected = true
      cart[cart.indexOf(product)].count++
    }
  }

  if (!selected) {
    cart.push(item)
  }

  return cart
}

export const removeFromCart = (cart: PropercoinsCartInterface[], id: string) => {
  return cart.filter((product: PropercoinsCartInterface) => product.id !== id)
}

export const getTotalCoins = (cart: PropercoinsCartInterface[]) => {
  return cart
    .map((item: PropercoinsCartInterface) =>
      item.type === ProductType.Propercoins ? parseInt(item.product) * item.count : 0
    )
    .reduce((a: number, b: number) => a + b, 0)
}

export const getTotalUsd = (cart: PropercoinsCartInterface[]) => {
  return cart
    .map((item: PropercoinsCartInterface) => item.price * item.count)
    .reduce((a: number, b: number) => roundNumber(a + b), 0)
}

export const cartCheckout = async (
  totalCoins: number,
  cart: PropercoinsCartInterface[],
  coupon: string,
  token: string
) => {
  if (!totalCoins) {
    toastError("Select at least one Propercoins bundle to purchase")
    return
  }

  const priceIds: string[][] = cart.map((item: PropercoinsCartInterface) => new Array(item.count).fill(item.id)).flat(1)

  console.log(priceIds, coupon, token)

  const result = await statusApi()

  if (result) {
    openUrlExtern(result.url)
  }
}

export const parsePropercoinsIcon = (coins: number) => {
  if (coins <= 250) {
    return ProperCoin1
  } else if (coins <= 500) {
    return ProperCoin2
  } else if (coins <= 1000) {
    return ProperCoin3
  } else if (coins <= 5000) {
    return ProperCoin4
  } else if (coins <= 15000) {
    return ProperCoin5
  } else {
    return ProperCoin6
  }
}
