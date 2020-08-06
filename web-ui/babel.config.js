// babel.config.js
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    transform: {"^.+\\.[jt]sx?$": "babel-jest"}
  };