import Module from '../base-module'

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
    services.esi.corporation.get_corporations_corporation_id(getters.dataId, corporation => {
      if (corporation) {
        localStorage.setItem(state._meta.moduleId, JSON.stringify(corporation))
        commit('copyFrom', corporation)
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
