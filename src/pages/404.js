import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

export default () => (
  <Layout>
    <SEO pagetitle="ページが見つかりません" />
    <h1 style={{ padding: "30vh 0", textAlign: "center" }}>
      お探しのページは見つかりませんでした
    </h1>
  </Layout>
)
