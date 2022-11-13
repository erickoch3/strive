module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./src/'],
                alias: {
                    '@app': './src',
                    '@core': './src/core',
                    '@assets': './src/assets/*',
                    '@goals': './src/modules/goals',
                    '@truths': './src/modules/truths',
                    '@notes': './src/modules/notes',
                    '@settings': './src/modules/settings',
                },
            },
        ],
    ],
};
// If facing import issues after updates:
//  watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start --reset-cache