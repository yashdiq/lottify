import React, { useEffect, useRef, useState } from "react";
import * as lottie from "lottie-web";

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

const Lottie: React.FC<LottieProps> = (props) => {
  const {path, width, height, autoPlay, loop, speed, direction, style} = props

  let divRef = useRef<HTMLDivElement>()

  const [animation, setAnimation] = useState<lottie.AnimationItem>()

  const getSize = (initial?: number | string) => {
    let size;
    
    if (initial && typeof initial === 'number') {
      size = `${initial}px`;
    } else {
      size = initial || '100%';
    }

    return size;
  };

  const styles = {
    width: getSize(width),
    height: getSize(height),
    overflow: 'hidden',
    margin: '0 auto',
    outline: 'none',
    ...style,
  }

  useEffect(() => {
    let anim: lottie.AnimationItem;
    if (divRef.current) {
      anim = lottie.default.loadAnimation({
        container: divRef.current,
        renderer: "svg",
        loop: loop ?? true,
        autoplay: autoPlay ?? true,
        path: path,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
      })

      setAnimation(anim)
      
      anim.setDirection(direction ?? 1)
      anim.setSpeed(speed ?? 1)
    }

    return () => {
      animation?.destroy()
    };
  }, [])

  const onClick = () => {
    animation?.isPaused ?  animation?.play() : animation?.pause()
  }

  return (
    <div
      ref={ref => divRef.current = ref ?? undefined}
      style={styles}
      onClick={onClick}
    ></div>
  )
}

export default Lottie