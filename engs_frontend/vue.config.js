module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'engs'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/conf.scss";'
      }
    }
  },
  pwa: {
    name:'engs',
    manifestPath: '../shared_assets/frontend_assets/manifest.json',
    themeColor: '#ffffff',
    msTileColor: '#2b5797',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'shared_assets/frontend_assets/icons/favicon-32x32.png',
      favicon16: 'shared_assets/frontend_assets/icons/favicon-16x16.png',
      appleTouchIcon: 'shared_assets/frontend_assets/icons/apple-touch-icon.png',
      maskIcon: 'shared_assets/frontend_assets/icons/safari-pinned-tab.svg',
      msTileImage: 'shared_assets/frontend_assets/icons/mstile-150x150.png'
    },
    manifestOptions: {
      icons:[
        {
          'src': 'icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'icons/android-chrome-256x256.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'icons/apple-touch-icon.png',
          'sizes': '180x180',
          'type': 'image/png',
        },
        {
          'src': 'icons/favicon-16x16.png',
          'sizes': '16x16',
          'type': 'image/png',
        },
        {
          'src': 'icons/favicon-32x32.png',
          'sizes': '32x32',
          'type': 'image/png',
        },
        {
          'src': 'icons/mstile-150x150.png',
          'sizes': '150x150',
          'type': 'image/png',
        },
      ],
      'start_url': '/',

    }
  },
  // publicPath: '/',
  productionSourceMap: false,
  // outputDir: '../static/engs_frontendEngine',
  // assetsDir: '../shared_assets/frontend_assets'
};