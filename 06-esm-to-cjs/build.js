const webpack = require('webpack')

const fn = () => webpack({
  entry: './index.js',
  output: './dist/main.js',
  mode: 'none',
  output: {
    iife: false,
    pathinfo: 'verbose'
  }
})

fn().run()
