<template>
  <div class="search">
      <div class="head">
          <div>
              <img src="../../../static/images/mirror.png" alt="">
              <input type="text" confirm-type="search" id="" focus="true" v-model="words">
              <img @click="clearInput" class="del" src="../../../static/images/clear_input.png" alt="">
          </div>
          <div @click="cancel">取消</div>
      </div>
      <div class="searchtips" v-if="words">
          <div>
              牙刷
          </div>
          <div class="nogoods">数据库暂无此类商品</div>
      </div>
      <div class="history">
          <div class="t">
              <div>历史记录</div>
              <div @click="clearHistory"></div>
          </div>
          <div class="cont">
              <div>日式</div>
          </div>
      </div>
      <div class="history hotsearch">
          <div class="t">
              <div>热门搜索</div>
          </div>
          <div class="cont">
              <div class="active">日式</div>
              <div>1234</div>
              <div>431</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return{
            words: ''
        }
    },
    methods: {
        clearInput() {
            this.words = ''
        },
        cancel () {},
        clearHistory() {}
    }
}
</script>

<style lang='less' scoped>
@import url('./style.less');
</style>