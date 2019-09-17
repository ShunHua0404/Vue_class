var app = new Vue({
    el: '#app',
    data: {
      todos: [
        { text: 'one' },
        { text: 'two' },
        { text: 'three' }
      ]
    },
  methods: {
  	toggle: function(todo){
      console.log("Before", todo.done)
      todo.done = !todo.done
      console.log("After", todo.done)
    }
  }
  })