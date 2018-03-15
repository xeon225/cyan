<template>
  <div>
    <div class="flex-container borderb paddingh10" style="line-height:40px;">
      <i class="icon-font icon-action_back"></i>
      <div class="fs-17 text-darker">{{ msg }}</div>
      <div><i class="icon-font icon-action_more" style="display:none"></i></div>
    </div>
    <div class="padding15">
      <div class="radius border text-dark padding10" style="background:#F8F8F8">
        badge类可以根据你的需要创建一个标签，支持色彩系统并支持多种属性，你可以通过下面的配置选项来配置一个适合你的标签样式，同时可以在代码展示区查看对应的代码实现
      </div>
      <div class="flex-container margint15">
        <div class="border radius flex-container flex1 padding7">
          <div class="flex-container left">
            <i class="icon-font icon-unit_color"></i>
            <div class="paddingl5">Color R</div>
          </div>
          <i class="icon-font icon-action_selectDown"></i>
        </div>
        <div style="width:11px" class="border marginh10"></div>
        <div class="border radius flex-container flex1 padding7">
          <div class="flex-container left">
            <i class="icon-font icon-unit_size"></i>
            <div class="paddingl5">Size Big</div>
          </div>
          <i class="icon-font icon-action_selectDown"></i>
        </div>
      </div>
      <div class="flex-container margint15">
        <div v-for="item in data.styleData.color" :class="'bg-'+item" class="border round flex-container center" style="width:40px;height:40px;"></div>
      </div>


      <div class="fs-16 text-darker">linear(x)</div>
      <div class="text-dark">输入一个在<span class="text-red">定义域</span>内的值，返回<span class="text-red">值域</span>内对应的值</div>
      <pre>
        <code class="lang-javascript">
    var linearScale = d3.scaleLinear();
    lineScale(5); //返回5
        </code>
      </pre>
    </div>
    <div id="scaleLinear"></div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js';

export default {
  data () {
    return {
      msg: 'Badge'
    }
  },
  components: {

  },
  computed:{
    data:function(){
      return Lib.dataApi
    },
    d3:function(){
      return Lib.d3
    }
  },
  methods: {
    scaleLinear:function(){
      var d3 = this.d3;
      
    }
  },
  ready:function(){
    this.scaleLinear();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.axis path, .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>
