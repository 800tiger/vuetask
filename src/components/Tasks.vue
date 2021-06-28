<template>
    <div class="tasks">
        <h3>{{ title }}</h3>
        <div v-for="task in tasks" v-bind:key="task.id">
            <Task :task="task"/>
        </div>
    </div>
</template>
<script>

import Task from './Task.vue'

export default {
    name: 'Tasks',
    props:{
        title:String,
        tasks:Array
    },
    components: {
        Task
    }
}
</script>
<style scoped>

</style>