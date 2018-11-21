<template>
    <div>
        第二页
    </div>
</template>


<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    },
    mounted(){
        console.log(this.$route.params.id);
        console.log(this.$route.params.noe)
    },
  }
</script>



<style scoped>

</style>
