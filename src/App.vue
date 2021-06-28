<template>
  <div class="container">
    <Header @toggle-new-task="toggleNewTask" title="Task Tracker" :show="show"/>
    <TaskForm v-show="show" @add-task="addTask"/>
    <Tasks 
        @toggle-task="toggleTask" 
        @delete-task="deleteTask"
        title="Tasks list" 
        :tasks="tasks" />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import TaskForm from './components/TaskForm.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    TaskForm
  },
  data(){
    return {
      show: false,
      tasks: []
    }
  },
  methods:{
    addTask(task){
      this.tasks = [...this.tasks,task]  
    },
    deleteTask(id){
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter((task)=> task.id !== id )
      }
    },
    toggleTask(id){
      const toggle = this.tasks.find(task=>task.id === id)
      toggle.reminder = !toggle.reminder
    },
    toggleNewTask(){
      this.show = !this.show
    }
  },
  created(){
    this.tasks =[
      {
        id:1,
        text:'Go to school',
        day: 'March 1st at 2:30pm',
        reminder: false,
      },
      {
        id:2,
        text:'go to work',
        day: 'March 3st at 3:30pm',
        reminder: true,
      },{
        id:3,
        text:'Have a dinner',
        day: 'May 3st at 4:30pm',
        reminder: true,
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>