import React from "react"
import { Header } from "../components/header"
import { Footer } from "../components/Footer"
import "./layout.css"

export const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)
