var webpack=require('webpack');
var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var CopyWebpackPlugin=require('copy-webpack-plugin');
var CleanWebpackPlugin=require('clean-webpack-plugin');

module.exports={
    mode: 'production',
    entry:{
        index:__dirname+"/src/index.js"
    },

    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
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
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?name=images/[name].[ext]'
            }
        ]
    },
    
    plugins:[
        new ExtractTextPlugin("style.css"),

        new CopyWebpackPlugin([
            {
                from:__dirname+'/public',
                to:__dirname+'/dist'
            }
        ]),

        new CleanWebpackPlugin(
            ['dist'],
            {
                root:__dirname,
                verbose:true,
                dry:false
            }
        )
    ],

    node:{
        fs:'empty'
    },

    target: 'node'
}

