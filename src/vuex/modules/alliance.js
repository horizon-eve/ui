import Module from '../base-module'
import {services} from '../api'

let module = new Module('alliance', 'alliance_id')

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
    const allianceId = getters.dataId
    if (allianceId) {
      services.esi.alliance.get_alliances_alliance_id(allianceId, alliance => {
        if (alliance) {
          localStorage.setItem(state._meta.moduleId, JSON.stringify(alliance))
          commit('copyFrom', alliance)
        }
      })
    }
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
