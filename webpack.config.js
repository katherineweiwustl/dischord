const path = require("path");

module.exports = {
    entry: path.join(__dirname, "frontend", "index.jsx"),
    output: {
        path: path.join(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ""]
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                }

            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',

                ],
                exclude: /.module.css$/
            },
            {
                test: /.(png|jp(e)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[hash]-[name].[ext]',
                        },
                    },
                ],
            }
        ]
    },
    devtool: "source-map"
};
