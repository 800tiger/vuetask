<template>
  <div class="container">
    <Header @toggle-new-task="toggleNewTask" title="Task Tracker" :show="show"/>
    <TaskForm v-show="show" @add-task="addTask"/>
    <Tasks 
        @toggle-task="toggleTask" 
        @delete-task="deleteTask"
        title="Tasks list" 
        :tasks="tasks" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import TaskForm from './components/TaskForm.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    TaskForm,
    Footer
  },
  data(){
    return {
      show: false,
      tasks: []
    }
  },
  methods:{
    async addTask(task){
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
      }
      const res = await fetch("api/tasks", requestOptions)
      this.tasks = [...this.tasks,await res.json()]  
    },
    async deleteTask(id){
      if(confirm('Are you sure?')){
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
      const res = await fetch(`api/tasks/${id}`,requestOptions)
        res.status === 200 ? this.tasks = this.tasks.filter((task)=> task.id !== id ) : console.log('wrong')
      }
    },
    async toggleTask(id){
      const toggle = this.tasks.find(task=>task.id === id)
      toggle.reminder = !toggle.reminder
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toggle)
      }
      await fetch(`api/tasks/${id}`,requestOptions)
      //const toggle = this.tasks.find(task=>task.id === id)
      //toggle.reminder = !toggle.reminder
    },
    toggleNewTask(){
      this.show = !this.show
    },
    async fetchTasks(){
      const res = await fetch('api/tasks')
      const result = await res.json()
      return result
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
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