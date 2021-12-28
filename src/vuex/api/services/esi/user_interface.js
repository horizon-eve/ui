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
    return axios.post(`${config.API_BASE_URL}/esi/latest/ui/autopilot/waypoint/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Open the contract window inside the client
   *
   */
  post_ui_openwindow_contract (contract_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/ui/openwindow/contract/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Open the information window for a character, corporation or alliance inside the client
   *
   */
  post_ui_openwindow_information (target_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/ui/openwindow/information/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Open the market details window for a specific typeID inside the client
   *
   */
  post_ui_openwindow_marketdetails (type_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/ui/openwindow/marketdetails/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Open the New Mail window, according to settings from the request if applicable
   *
   */
  post_ui_openwindow_newmail (done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/ui/openwindow/newmail/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
