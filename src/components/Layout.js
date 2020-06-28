import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "./layout.css"
// FontAwesomeのcssを先読みする設定
import "@fortawesome/fontawesome-svg-core/styles.css"
// FontAwesomeのコンポーネント内で、cssを適用しないようにする設定
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)
