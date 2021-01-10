// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// main configuration object.
// different options and tell Webpack what to do
module.exports = {
    // Path to your entry point. From this file Webpack will begin his work
    entry: {
        index: './main.js'
    },
    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve(__dirname, 'dist'),
    },
    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development',
    module: {
        rules: [
            // 配置 babel-loader (第一步)
            {
                test: /\.m?js$/,
                // 排除 node_modules 與 bower_components 底下資料 (第二步)
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 配置 Babel 解析器 (第三步)
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    module: {
        rules: [{
            // sass-loader is the primary consideration
            // test: /\.s[ac]ss$/i,

            // Apply rule for .sass, .scss or .css files
            test: /\.(sa|sc|c)ss$/,
            // Set loaders to transform files.
            // Loaders are applying from right to left(!)
            // The first loader will be applied after others
            use: [{
                    // After all CSS loaders we use plugin to do his work.
                    // It gets all transformed CSS and extracts it into separate
                    // single bundled file
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    // This loader resolves url() and @imports inside CSS
                    loader: "css-loader",
                },
                {
                    // Then we apply postCSS fixes like autoprefixer and minifying
                    loader: "postcss-loader"
                },
                {
                    // First we transform SASS to standard CSS
                    loader: "sass-loader"
                        // options: {
                        //     implementation: require("sass")
                        // }
                }
                // MiniCssExtractPlugin.loader,
                // // Creates `style` nodes from JS strings
                // "style-loader",
                // // Translates CSS into CommonJS
                // "css-loader",
                // // Compiles Sass to CSS
                // "sass-loader",
            ],
        }, ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: './bundle.css',
    }, )],
};