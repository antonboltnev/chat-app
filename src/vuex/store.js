import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    users: [],
    currentUserChat: {}
  },
  getters: {},
  mutations: {
    SET_USERS_TO_STORE(state, users) {
      state.users = users;
    },
    SET_USER_TO_HEAD(state, user) {
      state.currentUserChat = user;
    }
  },
  actions: {
    FETCH_USERS({commit}) {
      return axios.get('http://localhost:3000/users')
        .then((res) => {
          commit('SET_USERS_TO_STORE', res.data)
        })
    },
    SET_USER_TO_HEADER({commit}, user) {
      commit('SET_USER_TO_HEAD', user)
    },
    SEND_MSG_TO_CHAT({commit}, {userId, user}) {
      return axios.put('http://localhost:3000/users/' + userId, user)
        .then((response) => {
          return response;
        })
    }
  }
})

export default store;
