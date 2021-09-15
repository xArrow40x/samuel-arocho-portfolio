module.exports = {
  siteMetadata: {
    title: 'Samuel Arocho Portfolio',
    author: 'Samuel Arocho',
    description: 'A Portfolio For A Software Developer Named Samuel Arocho',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Logo-Mark-White.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
