module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
    ],
    plugins: [
        'prettier', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        'unused-imports/no-unused-imports': 'error',
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'prettier/prettier': 'error',
    },
    plugins: ['unused-imports'],
};
