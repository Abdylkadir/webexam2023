const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@routes': 'src/routes',
        // '@constants': 'src/constants',
        // '@hoc-helpers': 'src/hoc-helpers',
        // '@services': 'src/services',
        // '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@images': 'src/images',
    })(config);

    return config;
}