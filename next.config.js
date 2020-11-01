const withSass = require('@zeit/next-sass');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withCSS = require('@zeit/next-css');

const localeSubpaths = {
  cn: 'cn',
};

module.exports = withCSS(
  withSass({
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      };
      return config;
    },
  })
);
