/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// 作成するサイトのメタデータや、プラグインの設定を始め
// サイトの構成を設定すファイル

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探すサイト`,
    lang: `ja`,
    siteUrl: `https://ts621-blog.netlify.app/`,
    locale: `ja-JP`,
    // fbappid: `hoge`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
