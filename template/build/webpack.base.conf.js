const settings = require('./settings');

module.exports = {
    entry: settings.common.entryPath,
    output: {
        path: settings.common.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'prod'
            ? settings.build.assetsPublicPath
            : settings.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less'], //不支持空
        alias: {
            {{#redux}}
            actions: `${settings.common.srcPath}/redux/actions/`,
            components: `${settings.common.srcPath}/redux/components/`,
            containers: `${settings.common.srcPath}/redux/containers/`,
            reducers: `${settings.common.srcPath}/redux/reducers/`,
            sagas: `${settings.common.srcPath}/redux/sagas/`
            {{/redux}}
        }
    },
    module: {
        rules: [
            {{#eslint}}
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                include: settings.common.srcPath,
                use: 'eslint-loader'
            },
            {{/eslint}}
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                include: [].concat(
                    settings.common.additionalPaths,
                    [settings.common.srcPath]
                )
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: 'file-loader'
            }
        ]
    }
};
