<template>
    <button 
        @click="onClick()" 
        :style="{ background: color }" 
        class='btn'>{{ text }}
    </button>
</template>

<script>
export default {
  name: 'TopButton',
  props: {
    text: String,
    color: String
  },
  methods:{
    onClick(){
      this.$emit('bt-click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
