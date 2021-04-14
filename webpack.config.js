const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ // 定义css规则
            {
                test: /\.css$/, // 正则匹配要识别的css
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}