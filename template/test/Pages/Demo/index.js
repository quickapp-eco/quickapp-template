/* eslint-disable no-undef */
/**
* @param vm 代表页面的ViewModel实例
*/
export default function(vm) {
  // 其中describe, it, expect函数来自于对 mocha, chai的引入；
  describe(`Demo`, function() {
    it(`DOM事件处理正确`, function(done) {
      vm.change()
      expect(vm.height).to.equal('180cm')
      done()
    })
  })
}