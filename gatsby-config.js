module.exports = {
  plugins: [
    {
      options: {
        cssLoaderOptions: {
          camelCase: true,
        },
        includePaths: ['src/styles'],
      },
      resolve: 'gatsby-plugin-sass',
    },
    {
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        defaultLayouts: {
          content: require.resolve('./src/templates/Page.tsx'),
        },
        extensions: [
          '.mdx',
          '.md',
        ],
        remarkPlugins: [{
          resolve: 'remark-lint',
          // options: {
          //   maxWidth: 590,
          // },
        }],
      },
      resolve: 'gatsby-plugin-mdx',
    },
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#663399',
        /* eslint-enable @typescript-eslint/camelcase */
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-sri',
    // This (optional) plugin enables Progressive Web App + Offline
    // functionality. To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: '@gatsbyjs',
    description: `
      Kick off your next, great Gatsby project with this default starter. This 
      barebones starter ships with the main Gatsby configuration files you might
      need.
    `.trim(),
    title: 'Gatsby Default Starter',
  },
};
