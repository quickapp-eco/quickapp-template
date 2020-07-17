import { Store, installStore } from '@quickapp-eco/qappx'

// 实例化store
const store = new Store({
  state: {
    name: 'szm',
    detail: {
      height: '185cm',
      weight: '180g'
    }
  },
  getters: {
    height: state => state.detail.height,
    weight: state => state.detail.weight
  },
  mutations: {
    change(state, height) {
      state.detail.height = height
    }
  },
  actions: {
    change(context) {
      context.commit('change', '180cm')
    }
  }
})

// 插件引入
const pageNames = ['Pages/Demo', 'Pages/DemoDetail'] // 挂载的页面名称
export default installStore(store, { apply : pageNames })

