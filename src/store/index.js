import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hp: 4800,
    mushroom: 'red',
    power: 0
  },
  mutations: {
    setHP (state, payload) {
      state.hp = payload
    },
    setMushroom (state, payload) {
      state.mushroom = payload
    },
    setPower (state, payload) {
      state.power = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
