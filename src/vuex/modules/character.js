import Module from '../base-module'
import config from '../../config'
import axios from 'axios'

let module = new Module('character', 'id', ['corporation', 'alliance'])

const state = {
  ...module.state
}
const getters = {
  dataId: (state, getters, rootState) => {
    return rootState.user.character_id
  },
  ...module.getters
}

const actions = {
  fetch ({state, commit, getters}) {
    axios.get(`${config.API_BASE_ESI_URL}/characters/${getters.dataId}`)
      .then(function (response) {
        let char = response.data
        if (char) {
          localStorage.setItem(state._meta.moduleId, JSON.stringify(char))
          commit('copyFrom', char)
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
