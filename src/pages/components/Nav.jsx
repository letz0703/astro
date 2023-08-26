import {useState} from "react"
import logo from "/favicon.svg"
import {motion} from "framer-motion"
import {useMediaQuery} from "usehooks-ts"
//https://usehooks-ts.com/introduction

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
      <h1 className={`text-lg font-bold`}>
        <a href="/" className={`text-2xl`}>
          i.etz{" "}
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
        <motion.div
          className={`space-y-2 cursor-pointer z-10`}
          onClick={() => setToggled(prev => !prev)}
        >
          <span className={`block h-0.5 w-8 bg-black`}></span>
          <span className={`block h-0.5 w-8 bg-black`}></span>
          <span className={`block h-0.5 w-8 bg-black`}></span>
        </motion.div>
      )}

      {toggled && !size && (
        <div
          className={`fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center  `}
        >
          <div className={`flex flex-col gap-24 text-lg`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
          </div>
        </div>
      )}
    </nav>
  )
}
