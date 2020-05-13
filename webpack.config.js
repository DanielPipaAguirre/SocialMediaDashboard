const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    console.log(devMode);
    return {
        entry: './src/app.js',
        output: {
            path: __dirname + '/build',
            filename: 'bundle.js'
        },
        optimization: {
            minimizer: [new OptimizeCssAssetsPlugin()]
        },
        devServer: {
            open: true,
            port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
                        { loader: 'css-loader' }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'static/',
                                useRelativePath: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'bundle.css'
            })
        ]
    }
}