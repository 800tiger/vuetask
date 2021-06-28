<template>
    <div class="tasks">
        <h3>{{ title }}</h3>
        <div v-for="task in tasks" v-bind:key="task.id">
            <Task @toggle-task="$emit('toggle-task',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task"/>
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
    },
    emits:['delete-task','toggle-task']
}
</script>
<style scoped>

</style>