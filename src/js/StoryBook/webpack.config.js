const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../../../")
      },
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
