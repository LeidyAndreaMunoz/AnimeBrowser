const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path'); 
module.exports = { 
    entry: './src/App.js', 
    output: { 
        path: path.resolve(__dirname, './dist'), 
        filename: 'index_bundle.js', 
    }, 
    module: { 
        rules: [ 
            { 
                test: /\.(png|jpg|gif)$/i, 
                use: [ 
                    { 
                        loader: 'url-loader', 
                        options: { 
                            limit: 8192, 
                        }, 
                    }, 
                ], 
            }, 
            { 
                test: /\.css$/i, 
                use: ["style-loader", "css-loader"], 
            }, 
            { 
                test: /\.js?$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                } 
            }, 
            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader' // compiles Sass to CSS
                }]
              },
        ], 
    }, 
    plugins: [new HtmlWebpackPlugin( 
            { 
                template: './public/index.html',    
            } 
    )], 
};