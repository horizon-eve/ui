import Module from '../base-module'
import config from '../../config'
import axios from 'axios'

let module = new Module('corporation', 'id')

const state = {
  ...module.state
}
const getters = {
  dataId: (state, getters, rootState) => {
    return rootState.character.corporation_id
  },
  ...module.getters
}

const actions = {
  fetch ({state, commit, getters}) {
    axios.get(`${config.API_BASE_ESI_URL}/corporations/${getters.dataId}`)
      .then(function (response) {
        let corp = response.data
        if (corp) {
          localStorage.setItem(state._meta.moduleId, JSON.stringify(corp))
          commit('copyFrom', corp)
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
