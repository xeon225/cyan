<template>
  <div>
    <div class="lh-40 borderb padding20 fs-28 text-black">{{ msg }}</div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js';

export default {
  data () {
    return {
      msg: 'cyan'
    }
  },
  components: {

  },
  computed:{
    d3:function(){
      return Lib.d3
    }
  },
  methods: {
    
  },
  ready:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../assets/CMUI.css" />