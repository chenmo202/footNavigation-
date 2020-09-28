<template>
  <div id="app" :style="{'height':height}">
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  data(){
    return{
      height:''
    }
  },
  mounted(){
    this.height = window.innerHeight + 'px'
  }
}
</script>