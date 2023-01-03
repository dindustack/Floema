module.exports = {
    root: true,
    extends: ['standard', 'prettier'],
    globals: {
        IS_DEVELOPMENT: 'readonly',
    },
    parsetOptions: {
        ecmasVersion: 2021,
    }
}