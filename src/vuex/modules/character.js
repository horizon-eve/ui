import Module from '../base-module'
import {services} from '../api'

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
    services.esi.character.get_characters_character_id(getters.dataId, character => {
      if (character) {
        localStorage.setItem(state._meta.moduleId, JSON.stringify(character))
        commit('copyFrom', character)
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
