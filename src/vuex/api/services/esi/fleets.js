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
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/fleet/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Update settings about a fleet
   *
   */
  put_fleets_fleet_id (fleet_id, done) {
    return axios.put(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/members/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
   *
   */
  post_fleets_fleet_id_members (fleet_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/members/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Kick a fleet member
   *
   */
  delete_fleets_fleet_id_members_member_id (fleet_id, member_id, done) {
    return axios.delete(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/members/${member_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Move a fleet member around
   *
   */
  put_fleets_fleet_id_members_member_id (fleet_id, member_id, done) {
    return axios.put(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/members/${member_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Delete a fleet squad, only empty squads can be deleted
   *
   */
  delete_fleets_fleet_id_squads_squad_id (fleet_id, squad_id, done) {
    return axios.delete(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/squads/${squad_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Rename a fleet squad
   *
   */
  put_fleets_fleet_id_squads_squad_id (fleet_id, squad_id, done) {
    return axios.put(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/squads/${squad_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/wings/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Create a new wing in a fleet
   *
   */
  post_fleets_fleet_id_wings (fleet_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/wings/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
   *
   */
  delete_fleets_fleet_id_wings_wing_id (fleet_id, wing_id, done) {
    return axios.delete(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/wings/${wing_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Rename a fleet wing
   *
   */
  put_fleets_fleet_id_wings_wing_id (fleet_id, wing_id, done) {
    return axios.put(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/wings/${wing_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Create a new squad in a fleet
   *
   */
  post_fleets_fleet_id_wings_wing_id_squads (fleet_id, wing_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/fleets/${fleet_id}/wings/${wing_id}/squads/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
