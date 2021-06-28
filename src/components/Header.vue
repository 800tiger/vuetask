<template>
    <header>
        <h1>{{ title }}</h1>
        <TopButton 
        @bt-click="$emit('toggle-new-task')" 
        :text="show ? 'Close' : 'Add Task'" 
        :color="show ? 'red' : 'green'"/>
    </header>
</template>

<script>

import TopButton from './TopButton.vue'

export default {
    name: 'Header',
    props:{
        title:{
            type: String,
            default: 'Hello Task'
        },
        show:Boolean
    },
    components:{
        TopButton
    },
    emit:['toggle-new-task']    
}
</script>

<style scoped>
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>