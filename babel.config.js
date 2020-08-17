module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }, modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false }],
    '@babel/preset-react',
    '@babel/typescript',
  ],
  plugins: ['@babel/proposal-object-rest-spread', '@babel/plugin-transform-async-to-generator'],
};
