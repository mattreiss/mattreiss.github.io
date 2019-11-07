const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|mp3|svg|m4v)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000
            }
          }
        ]
      }
    ]
  }
};
