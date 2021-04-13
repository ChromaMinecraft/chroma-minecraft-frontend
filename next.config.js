const compose = require('compose-function');
const { withDokz } = require('dokz/dist/plugin');

const composed = compose(withDokz);

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
});
