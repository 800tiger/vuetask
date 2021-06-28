<template>
    <header>
        <h1>{{ title }}</h1>
        <TopButton text="Add Task" color="green"/>
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
        }
    },
    components:{
        TopButton
    }    
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