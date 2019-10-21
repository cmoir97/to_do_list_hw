import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {task: "Shopping", highPriority: true},
        {task: "Cleaning", highPriority: false},
        {task: "Gardening", highPriority: false}
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          task: this.newTodo,
          highPriority: false
        });
        this.newTodo = ""
      },
      makeHighPriority: function (index) {
        this.todos[index].highPriority = true;
      }
    }
  });
});
