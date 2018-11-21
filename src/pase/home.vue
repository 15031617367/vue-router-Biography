<template>
  <div class="nav">
          <router-link :to="{name: 'tow', params: {id,noe} }">跳2</router-link>
  </div>




</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        id:'123123',
        noe:444444,
      }
    }
  }
</script>



<style scoped>
.nav{
    width: 100%;
    height: 100px;
    background: #eee;

}
</style>
