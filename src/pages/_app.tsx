import '../styles/globals.css'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
// import App from "next/app"
// import React from "react"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
