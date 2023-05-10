const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
            {text: "prova 1", done: false},
            {text: "prova 2", done: false},
            {text: "prova 3", done: false},
        ]
      }
    },
    methods: {
        status(i) {
            if (this.toDoList[i].done) {
                return "true"
            }

            return "false"
        },
        changeStatus(i) {
            this.toDoList[i].done = !this.toDoList[i].done
        }
    }
  }).mount('#app')