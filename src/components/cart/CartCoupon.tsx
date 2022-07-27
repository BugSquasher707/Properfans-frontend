import React from "react"

const CartCoupon = ({
  couponApplied,
  couponError,
  couponPercentage
}: {
  couponApplied: any
  couponError: any
  couponPercentage: number
}) => {
  return (
    <>
      <div className="mt-12 w-full">
        {!couponApplied && !couponError ? <div className="text-14 text-grey-40">No coupon applied</div> : ""}
        {couponApplied && !couponError ? (
          <div className="text-14 text-purple">
            Coupon applied, <span className="font-bold">-{couponPercentage}%</span>
          </div>
        ) : (
          ""
        )}
        {couponError ? <div className="text-14 text-red">You entered an invalid coupon</div> : ""}
      </div>
    </>
  )
}

export default CartCoupon
