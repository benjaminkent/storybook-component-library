const vueConfig = require('@vue/cli-service/webpack.config')

module.exports = async ({ config }) => {
    return {
        ...config,
        resolve: {
            ...vueConfig.resolve,
            alias: {
                ...vueConfig.resolve.alias,
                vue$: 'vue/dist/vue.esm.js',
            },
        },
        module: {
            ...vueConfig.module,
            rules: vueConfig.module.rules,
        },
    }
}
