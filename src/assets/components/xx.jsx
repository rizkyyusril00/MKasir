import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useRef } from "react"
import React from "react"


export default function Xx(){
  // svg animation
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(192, 211, 243, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(192, 211, 243, 1)"
    }
}
const icon2 = {
    hidden: {
      pathLength: 0,
      fill: "rgba(13, 92, 211, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(13, 92, 211, 1)"
    }
}
const ref = useRef(null);
const inView = useInView(ref, { once: false });
const controls = useAnimation();

React.useEffect(() => {
    if (inView) {
    controls.start('visible');
    } else {
    controls.start('hidden');
    }
}, [inView, controls]);
  return(
    <>
    <motion.svg className='w-[236px] h-[236px]' viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg"  ref={ref}>
                                                <rect width="236" height="236" rx="118" fill="white"/>
                                                <motion.path className="item2" d="M223 118C223 175.99 175.99 223 118 223C60.0101 223 13 175.99 13 118C13 60.0101 60.0101 13 118 13C175.99 13 223 60.0101 223 118ZM34.2753 118C34.2753 164.24 71.7602 201.725 118 201.725C164.24 201.725 201.725 164.24 201.725 118C201.725 71.7602 164.24 34.2753 118 34.2753C71.7602 34.2753 34.2753 71.7602 34.2753 118Z"  variants={icon}
                                                initial="hidden"
                                                animate={controls}
                                                transition={{
                                                    default: { duration: 2, ease: "easeInOut" },
                                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                                }}/>
                                                <motion.path className="item" d="M80.4697 128.591L115.458 59.4757C116.408 57.5976 119.242 58.2739 119.242 60.379V103.978C119.242 105.082 120.137 105.978 121.242 105.978H153.737C155.23 105.978 156.197 107.555 155.519 108.886L121.037 176.576C120.083 178.449 117.255 177.77 117.255 175.668V133.494C117.255 132.39 116.359 131.494 115.255 131.494H82.2541C80.763 131.494 79.7963 129.921 80.4697 128.591Z" variants={icon2}
                                                initial="hidden"
                                                animate={controls}
                                                transition={{
                                                    default: { duration: 2, ease: "easeInOut" },
                                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                                }}/>
                                                <defs>
                                                    <radialGradient id="paint0_angular_615_11374" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(118 118) rotate(-129.27) scale(102.69)">
                                                    <stop stopColor="#F0F5FF"/>
                                                    <stop offset="1" stopColor="#BFD2FD"/>
                                                    </radialGradient>
                                                </defs>
                                            </motion.svg>
    </>
  )
}