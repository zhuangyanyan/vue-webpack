var path = require('path');
module.exports = {
    entry: './src/main.js',
    //定义webpack输出的文件，我们在这里设置了
    //让打包后生成的文件放在dist文件夹下的build.js文件中
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            //转化ES6语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            //图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            //这里配置了让webpack识别jade的loader，其他类似，比如.vue
            {test:/\.jade$/,loader:'jade'},
            //用于css文件的loader有两种写法
            {test:/\.css$/,loader:'style!css'}
            //{test:/\.css$/,loaders:['style','css']} //这是另一种写法
        ]
    },
//这里用于安装babel，如果在根目录下的.babelrc配置了，这里就不写了
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
}