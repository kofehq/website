const path = require('path');

module.exports = {
  entry: './netlify.js',
  output: {
    path: path.resolve(__dirname, '../static/admin'),
    filename: 'netlify.js'
  }
}
