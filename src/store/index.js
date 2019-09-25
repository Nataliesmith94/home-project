import Vue from 'vue'
import Vuex from 'vuex'
import accountService from '@/services/account'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    isLoggedIn: false,
    user: {
      firstName: '',
      surname: ''
    }
  },
  mutations: {
    setEmail(state, email) {
      state.email = email
    },
    setPassword(state, password) {
      state.password = password
    },
    setIsLoggedIn(state, isLoggedIn = true) {
      state.isLoggedIn = isLoggedIn
    },
    setAccount(state, account ){
      state.user.firstName = account.user.firstName
      state.user.surname = account.user.surname
    }
  },
  actions: {
    GET_ACCOUNT: async (context, payload) => {
      // let {data} = await axios.get('http://localhost:9088/api/account/findEmail', {
      //   params: {
      //     email: payload
      //   }
      // });
      let {data} = await accountService.findAccountByEmail(payload);
      context.commit('setAccount', data)
    },
  },
  getters: {
    EMAIL: state => {
      return state.email;
    },
    FIRSTNAME: state => {
      return state.user.firstName;
    },
    SURNAME: state => {
      return state.user.surname;
    }
  },
    namespaced: true
});
