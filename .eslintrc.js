module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'no-null'],
    rules: {
        'import/no-unresolved': [
            'error',
            { ignore: ['@app', '@core', '@assets', '@hello', '@truths', '@notes', '@settings'] },
        ], // ignore module import
        'react/jsx-closing-bracket-location': 'off', // let prettier formats the code
    }
    overrides: [{
        files: ['*.ts', '*.tsx'],
        rules: {
            '@typescript-eslint/no-shadow': ['error'],
            'no-shadow': 'off',
            'no-undef': 'off',
        },
    }, ],
};