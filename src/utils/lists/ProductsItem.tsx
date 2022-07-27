import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import { PropercoinsInterface } from "libs/interfaces"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import NumberFormat from "react-number-format"

const ProductsItem = ({ item, handler }: { item: PropercoinsInterface; handler: any }) => {
  return (
    <>
      <div
        className="group relative flex w-full cursor-pointer flex-wrap rounded-4 border-1 border-grey-12 bg-white p-16 hover:border-purple sm:p-20"
        onClick={() => handler(item)}
      >
        {item.sale ? (
          <div className="center absolute top-12 left-12 h-24 rounded-4 bg-purple px-10 text-12 font-bold text-white">
            Sale
          </div>
        ) : (
          ""
        )}
        <div className="center h-90 w-full first:h-90">
          <img alt="" className="h-90 w-120" src={item.icon}></img>
        </div>
        <div className="my-20 w-full border-b-1 border-grey-6"></div>
        <div className="between mb-24 w-full gap-5">
          <div className="flex items-center justify-start space-x-[10px] text-16 font-bold text-black">
            <ProperCoin className="h-16 w-16 fill-current text-purple" />
            <NumberFormat displayType={"text"} value={item.amount} thousandSeparator />
          </div>
          <div className="text-14 text-grey-40">propercoins</div>
        </div>
        <div className="between w-full rounded-4 bg-purple-10 px-20 py-10 group-hover:bg-purple">
          <div className="flex-grow">
            <div className="flex space-x-[10px]">
              <NumberFormat
                className="text-14 font-bold text-purple group-hover:text-white"
                displayType={"text"}
                prefix={"$"}
                value={item.price}
                thousandSeparator
              />
              {item.sale ? <div className="text-14 font-bold text-purple-40 line-through">{item.price}</div> : ""}
            </div>
          </div>
          <div className="flex-none">
            <BsArrowRight className="text-20 text-purple group-hover:text-white group-hover:opacity-40" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsItem
