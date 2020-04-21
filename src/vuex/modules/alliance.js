import Module from '../base-module'
import config from '../../config'
import axios from 'axios'

let module = new Module('alliance', 'id')

const state = {
  ...module.state
}
const getters = {
  dataId: (state, getters, rootState) => {
    return rootState.character.alliance_id
  },
  ...module.getters
}

const actions = {
  fetch ({state, commit, getters}) {
    axios.get(`${config.API_BASE_ESI_URL}/alliance/${getters.dataId}`)
      .then(function (response) {
        let alli = response.data
        if (alli) {
          localStorage.setItem(state._meta.moduleId, JSON.stringify(alli))
          commit('copyFrom', alli)
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
