var webpack=require('webpack');
var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var CopyWebpackPlugin=require('copy-webpack-plugin');
var CleanWebpackPlugin=require('clean-webpack-plugin');

module.exports={
    mode: 'production',

    entry:{
        index:__dirname+"/src/main.js"
    },

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/bundle.js",
        publicPath:"./"       
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    
    plugins:[
        new ExtractTextPlugin("style.css"),
        /*
        new CopyWebpackPlugin([
            {
                from:__dirname+'/public',
                to:__dirname+'/dist'
            }
        ]),
        */
        new CleanWebpackPlugin(
            ['dist'],
            {
                root:__dirname,
                verbose:true,
                dry:false
            }
        ),

        new htmlWebpackPlugin({
            filename:'index.html',
            template:'./public/html/index.html'
        })
    ],

    node:{
        fs:"empty",
        net:"empty"
    },

    target: 'web',

    watch:true
}

