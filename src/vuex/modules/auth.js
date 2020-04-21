import Module from '../base-module'

let module = new Module('auth', null, ['user'])

const state = {
  ...module.state
}
const getters = {
  ...module.getters
}

const actions = {
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
