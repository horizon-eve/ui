import Module from '../base-module'
import config from '../../config'
import axios from 'axios'

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
    axios.get(`${config.API_BASE_URL}/users/${getters.dataId}`, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-hr-authtoken': this.state.auth.auth_token
      }
    })
      .then(function (response) {
        let user = response.data
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
