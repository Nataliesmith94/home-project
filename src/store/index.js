import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  email: '',
  password: '',
  isLoggedIn: false
}

const mutations = {
  setEmail (state, email) {
    state.email = email
  },
  setPassword (state, password) {
    state.password = password
  },
  setIsLoggedIn (state, isLoggedIn = true) {
    state.isLoggedIn = isLoggedIn
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations
})
