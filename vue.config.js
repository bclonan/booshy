const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['ini'],
  pluginOptions: {
    electronBuilder: {
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: 'src/background.js',
      // Use this to change the entrypoint of your app's render process
      rendererProcessFile: 'src/main.js',
      // Add preload script
      preload: 'src/preload.js',
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "constants": require.resolve("constants-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "buffer": require.resolve("buffer"),
        "util": require.resolve("util"),
        "events": require.resolve("events")
      }
    },
    target: 'electron-renderer'
  }
})

module.exports = defineConfig({
  transpileDependencies: ['ini'],
  pluginOptions: {
    electronBuilder: {
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: 'src/background.js',
      // Use this to change the entrypoint of your app's render process
      rendererProcessFile: 'src/main.js',
      // Add preload script
      preload: 'src/preload.js',
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      // Configure webpack for main process to handle ini package
      chainWebpackMainProcess: (config) => {
        config.module
          .rule('js')
          .test(/\.js$/)
          .include.add(/node_modules[\\/]ini/)
          .end()
          .use('babel-loader')
          .loader('babel-loader')
          .options({
            presets: [
              ['@babel/preset-env', {
                targets: {
                  node: 'current'
                }
              }]
            ]
          })
      }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "constants": require.resolve("constants-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "buffer": require.resolve("buffer"),
        "util": require.resolve("util"),
        "events": require.resolve("events")
      }
    },
    target: 'electron-renderer',
    // Add Node.js polyfills for renderer process
    node: {
      __dirname: false,
      __filename: false
    }
  }
})
