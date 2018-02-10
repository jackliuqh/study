module.exports = {
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'build.js'
    },
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            }
        ]
    },
    devServer: {
        port: 5000,//设置默认监听端口，如果省略，默认为"8080"
    }
}