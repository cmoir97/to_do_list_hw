import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {task: "Shopping", highPriority: "High"},
        {task: "Cleaning", highPriority: "Low"},
        {task: "Gardening", highPriority: "Low"}
      ],
      newTodo: "",
      newPriority: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          task: this.newTodo,
          highPriority: this.newPriority
        });
        this.newTodo = ""
      },
    }
  });
});
