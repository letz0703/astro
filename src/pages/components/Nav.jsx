import {useState} from "react"
import logo from "/favicon.svg"
import {motion} from "framer-motion"
import {useMediaQuery} from "usehooks-ts"
//https://usehooks-ts.com/introduction

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  },
  hidden: {
    opacity: 0
  }
}
const itemMotion = {
  visible: {opacity: 1, x: 0},
  hidden: {opacity: 0, x: -100}
}

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const size = useMediaQuery("(min-width:1280px)")
  return (
    <nav
      className={`relative  mx-4 mb-24 flex justify-between items-center pt-8 pb-3 font-medium md:mx-16 lg:mx-32`}
    >
      <svg
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 `}
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src={logo} alt="" className={`h-[50px]`} />
      </div>
      {/*{!size && (*/}
      <h1 className={`text-lg font-bold flex justify-center`}>
        <a href="/" className={`text-2xl`}>
          Meet & Share
        </a>
      </h1>
      {/*)}*/}
      {/* View Desktop Vs. Mobile */}
      {size && (
        <div className={`flex gap-12`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
        </div>
      )}
      {!size && (
        <div
          className={`space-y-1.5 cursor-pointer z-10`}
          onClick={() => setToggled(prev => !prev)}
        >
          <motion.span
            animate={{rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0}}
            className={`block h-0.5 w-8 bg-red-500`}
          ></motion.span>
          <motion.span
            animate={{width: toggled ? 0 : ""}}
            className={`block h-0.5 w-8 bg-green-400`}
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0
            }}
            className={`block h-0.5 w-8 bg-blue-300`}
          ></motion.span>
        </div>
      )}

      {toggled && !size && (
        <motion.div
          animate={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -25}}
          transition={{duration: 0.5}}
          className={`fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center  `}
        >
          <motion.div
            variant={navMotion}
            className={`flex flex-col gap-24 text-lg`}
            animate="visible"
            initial="hidden"
          >
            <motion.a varients={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a varients={itemMotion} href="/about">
              About
            </motion.a>
            <motion.a varients={itemMotion} href="/shop">
              Shop
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  )
}
