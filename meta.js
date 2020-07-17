module.exports = function(defaultOptions) {
  return {
    prompts: [
      {
        type: 'input',
        message: 'Project name',
        name: 'name',
        default: defaultOptions.name,
        required: true,
      },
      {
        type: 'input',
        message: 'Project description',
        name : 'description',
      },
      {
        type: 'input',
        message: 'Min PlatformVersion(快应用最小平台版本号)',
        name : 'minPlatformVersion',
        required: true
      },
      {
        type: 'confirm',
        message: 'Use less styles(css预处理)',
        name: 'lettStyles'
      },
      {
        type: 'confirm',
        message: 'Use qappx(应用状态管理) 最小版本号1060+',
        name: 'qappx'
      },
      {
        type: 'confirm',
        message: 'Use e2e test(快应用自动化测试)',
        name: 'e2eTest'
      },
      {
        type: 'confirm',
        message: 'Use card(快应用卡片)',
        name: 'useCard'
      }
    ],
    filters: {
      'src/store.js': 'qappx',
      'test/**/*': 'e2eTest',
      'src/Pages/TestSummary/*': 'e2eTest',
      'src/Cards/**/*': 'useCard',
    }
  }
}