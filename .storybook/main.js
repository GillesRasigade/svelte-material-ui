const path = require('path');

const autoPreprocess = require('svelte-preprocess');

const webpack = async (config) => {
  config.resolve.alias['smui-theme'] = path.resolve(__dirname, '_smui-theme.scss');


  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', {
      loader: 'sass-loader',
    }],
    include: [
     path.resolve(__dirname, '../')
    ]
  });

  const svelteLoader = config.module.rules.find(
    (r) => r.loader && r.loader.includes('svelte-loader'),
  );

  svelteLoader.options.preprocess = autoPreprocess({
  });

  return config;
}

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: webpack
}
