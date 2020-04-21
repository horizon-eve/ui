import Vue from 'vue'
import store from './store.js'

export default class {
  constructor (moduleId, dataIdField, notifyChange) {
    this.state = {
      _meta: {
        moduleId: moduleId,
        dataIdField: dataIdField,
        notifyChange: notifyChange ? Array.isArray(notifyChange) ? notifyChange : [notifyChange] : undefined
      }
    }
    this.getters = {
    }
    this.actions = {
      init ({state, commit, getters}) {
        let stored = JSON.parse(localStorage.getItem(state._meta.moduleId))
        if (stored && (!state._meta.dataIdField || stored[state._meta.dataIdField] === getters.dataId)) {
          commit('copyFrom', stored)
        } else {
          dispatchIfExists(`${state._meta.moduleId}/fetch`, this._actions)
        }
      },
      cleanup ({state}) {
        localStorage.removeItem(state._meta.moduleId)
      }
    }
    this.mutations = {
      copyFrom (state, o) {
        Object.keys(o).forEach(key => {
          Vue.set(state, key, o[key])
        })
        if (state._meta.notifyChange) {
          state._meta.notifyChange.forEach(m => {
            store.dispatch(`${m}/init`)
          })
        }
      }
    }
  }
}

function dispatchIfExists (action, actions) {
  if (Object.keys(actions).findIndex(key => key === action) !== -1) {
    store.dispatch(action)
  }
}
