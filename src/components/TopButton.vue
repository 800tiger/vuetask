<template>
      <button @click="addNewTask" :style="{ background: color }" class='btn'>{{ text }}</button>
</template>

<script>
export default {
  name: 'TopButton',
  props: {
    text: String,
    color: String
  },
  methods:{
      addNewTask(){
          console.log(123);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
