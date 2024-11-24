import React from "react"
import * as lottie from "lottie-web"

export interface LottieProps {
  path: string
  loop?: boolean
  autoPlay?: boolean
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
  speed?: number
  direction?: lottie.AnimationDirection
}