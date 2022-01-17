/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Set a solar system as autopilot waypoint
   *
   */
  post_ui_autopilot_waypoint (add_to_beginning, clear_other_waypoints, destination_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_ui_autopilot_waypoint?add_to_beginning=${add_to_beginning}&clear_other_waypoints=${clear_other_waypoints}&destination_id=${destination_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Open the contract window inside the client
   *
   */
  post_ui_openwindow_contract (contract_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_ui_openwindow_contract?contract_id=${contract_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Open the information window for a character, corporation or alliance inside the client
   *
   */
  post_ui_openwindow_information (target_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_ui_openwindow_information?target_id=${target_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Open the market details window for a specific typeID inside the client
   *
   */
  post_ui_openwindow_marketdetails (type_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_ui_openwindow_marketdetails?type_id=${type_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Open the New Mail window, according to settings from the request if applicable
   *
   */
  post_ui_openwindow_newmail (done) {
    return axios.post(`${config.ESI_BASE_URL}/post_ui_openwindow_newmail`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
