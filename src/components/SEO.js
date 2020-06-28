import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          siteUrl
          locale
          # fbappid
        }
      }
    }
  `)

  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const description = props.pagedesc || data.site.siteMetadata.description
  const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="ob:site_name" content={data.site.siteMetadata.title} />
      <meta property="ob:title" content={title} />
      <meta property="ob:description" content={description} />
      <meta property="ob:url" content={url} />
      <meta property="ob:type" content="website" />
      <meta property="ob:locale" content={data.site.siteMetadata.locale} />
      {/* <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} /> */}
    </Helmet>
  )
}
