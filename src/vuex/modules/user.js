import Module from '../base-module'
import {services} from '../api'

let module = new Module('user', 'user_id', ['character'])

const state = {
  main: {
    name: 'Vinsdi',
    position: 'Web Developer',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  },
  ...module.state
}
const getters = {
  dataId: (state, getters, rootState) => {
    return rootState.auth.user_id
  },
  ...module.getters
}

const actions = {
  fetch ({state, commit, getters}) {
    services.users.read({}, user => {
      if (user) {
        if (Array.isArray(user)) {
          user = user[0]
        }
        localStorage.setItem(state._meta.moduleId, JSON.stringify(user))
        commit('copyFrom', user)
      }
    })
  },
  ...module.actions
}

const mutations = {
  ...module.mutations
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
