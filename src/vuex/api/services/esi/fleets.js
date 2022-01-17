/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return the fleet ID the character is in, if any.
   * {
   *   "application/json": {
   *     "fleet_id": 1234567890,
   *     "role": "fleet_commander",
   *     "squad_id": -1,
   *     "wing_id": -1
   *   }
   * }
   */
  get_characters_character_id_fleet (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_fleet?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return details about a fleet
   * {
   *   "application/json": {
   *     "is_free_move": false,
   *     "is_registered": false,
   *     "is_voice_enabled": false,
   *     "motd": "This is an <b>awesome</b> fleet!"
   *   }
   * }
   */
  get_fleets_fleet_id (fleet_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fleets_fleet_id?fleet_id=${fleet_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Update settings about a fleet
   *
   */
  put_fleets_fleet_id (fleet_id, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_fleets_fleet_id?fleet_id=${fleet_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return information about fleet members
   * {
   *   "application/json": [
   *     {
   *       "character_id": 93265215,
   *       "join_time": "2016-04-29T12:34:56Z",
   *       "role": "squad_commander",
   *       "role_name": "Squad Commander (Boss)",
   *       "ship_type_id": 33328,
   *       "solar_system_id": 30003729,
   *       "squad_id": 3129411261968,
   *       "station_id": 61000180,
   *       "takes_fleet_warp": true,
   *       "wing_id": 2073711261968
   *     }
   *   ]
   * }
   */
  get_fleets_fleet_id_members (fleet_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fleets_fleet_id_members?fleet_id=${fleet_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
   *
   */
  post_fleets_fleet_id_members (fleet_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_fleets_fleet_id_members?fleet_id=${fleet_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Kick a fleet member
   *
   */
  delete_fleets_fleet_id_members_member_id (fleet_id, member_id, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_fleets_fleet_id_members_member_id?fleet_id=${fleet_id}&member_id=${member_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Move a fleet member around
   *
   */
  put_fleets_fleet_id_members_member_id (fleet_id, member_id, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_fleets_fleet_id_members_member_id?fleet_id=${fleet_id}&member_id=${member_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Delete a fleet squad, only empty squads can be deleted
   *
   */
  delete_fleets_fleet_id_squads_squad_id (fleet_id, squad_id, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_fleets_fleet_id_squads_squad_id?fleet_id=${fleet_id}&squad_id=${squad_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Rename a fleet squad
   *
   */
  put_fleets_fleet_id_squads_squad_id (fleet_id, squad_id, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_fleets_fleet_id_squads_squad_id?fleet_id=${fleet_id}&squad_id=${squad_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return information about wings in a fleet
   * {
   *   "application/json": [
   *     {
   *       "id": 2073711261968,
   *       "name": "Wing 1",
   *       "squads": [
   *         {
   *           "id": 3129411261968,
   *           "name": "Squad 1"
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  get_fleets_fleet_id_wings (fleet_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fleets_fleet_id_wings?fleet_id=${fleet_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Create a new wing in a fleet
   *
   */
  post_fleets_fleet_id_wings (fleet_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_fleets_fleet_id_wings?fleet_id=${fleet_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
   *
   */
  delete_fleets_fleet_id_wings_wing_id (fleet_id, wing_id, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_fleets_fleet_id_wings_wing_id?fleet_id=${fleet_id}&wing_id=${wing_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Rename a fleet wing
   *
   */
  put_fleets_fleet_id_wings_wing_id (fleet_id, wing_id, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_fleets_fleet_id_wings_wing_id?fleet_id=${fleet_id}&wing_id=${wing_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Create a new squad in a fleet
   *
   */
  post_fleets_fleet_id_wings_wing_id_squads (fleet_id, wing_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_fleets_fleet_id_wings_wing_id_squads?fleet_id=${fleet_id}&wing_id=${wing_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
