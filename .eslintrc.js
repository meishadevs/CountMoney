// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],

  // 添加自定义规则
  'rules': {
    // 允许在代码中使用箭头函数
    'arrow-parens': 0,

    // 允许使用 async-await
    'generator-star-spacing': 0,

    // 允许在开发环境中使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // 如果代码末尾没加分号，就报错
    'semi': ['error', 'always'],

    // 忽略掉代码缩进
    'indent': 0
  }
}
