const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
            {text: "prova 1", done: false},
            {text: "prova 2", done: false},
            {text: "prova 3", done: false},
        ],
        newToDo: [
            {text: "", done: false}
        ]
      }
    },
    methods: {
        status(i) {
            if (this.toDoList[i].done) {
                return "text-success"
            }

            return "text-danger"
        },
        remove(i) {
            this.toDoList.splice(i, 1)
        },
        changeStatus(i) {
            this.toDoList[i].done = !this.toDoList[i].done
        },
        addToDoList() {
            let newElement = {...this.newToDo};

            this.toDoList.unshift(this.newElement)
        },
    }
  }).mount('#app')