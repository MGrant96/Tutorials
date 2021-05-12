import Vue from 'vue'
import Vuex from 'vuex'
import cats from '../data/cats'
import dogs from '../data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },

  mutations: {
    // (state and payload)
    appendPet: (state, { species, pet }) => {
      state[species].push(pet)
    }
  },

  actions: {
    // Vue uses context object, then use argument when you call this function, context has a commit method with it, this fires up to mutations
    addPet: ({ commit }, payload) => {
      commit('appendPet', payload)
    }
  },
  getters: {
    animalsCount: (state) => {
      return state.cats.length + state.dogs.length
    },
    getAllCats: (state) => {
      return state.cats
    },
    getAllDogs: (state) => {
      return state.dogs
    }
  }
})
