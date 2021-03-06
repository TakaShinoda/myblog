import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

export default ({ location }) => (
  <Layout>
    <SEO pagetitle="ページが見つかりません" pagepath={location.pathname}/>
    <h1 style={{ padding: "26vh 0", textAlign: "center" }}>
      お探しのページは見つかりませんでした
    </h1>
  </Layout>
)
