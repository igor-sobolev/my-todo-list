import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class MyTodo {
  constructor (title, description) {
    this.id = '_' + Math.random().toString(36).substr(2, 9)
    this.title = title
    this.description = description
    this.checked = false
  }
}

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo (state, data) {
      state.todos.unshift(data)
    },
    checkTodo (state, data) {
      state.todos.find(v => v.id === data.id).checked = true
    }
  },
  actions: {
    addTodo (context, { title, description }) {
      const todo = new MyTodo(title, description)
      context.commit('addTodo', todo)
    },
    checkTodo (context, data) {
      context.commit('checkTodo', data)
    }
  },
  getters: {
    todos: state => state.todos
  }
})
