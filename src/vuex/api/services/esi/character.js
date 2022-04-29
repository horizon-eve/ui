/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Bulk lookup of character IDs to corporation, alliance and faction
   * {
   *   "application/json": [
   *     {
   *       "alliance_id": 434243723,
   *       "character_id": 95538921,
   *       "corporation_id": 109299958
   *     }
   *   ]
   * }
   */
  post_characters_affiliation (done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_affiliation`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Public information about a character
   * {
   *   "application/json": {
   *     "birthday": "2015-03-24T11:37:00Z",
   *     "bloodline_id": 3,
   *     "corporation_id": 109299958,
   *     "description": "",
   *     "gender": "male",
   *     "name": "CCP Bartender",
   *     "race_id": 2,
   *     "title": "All round pretty awesome guy"
   *   }
   * }
   */
  get_characters_character_id (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id?character_id=${character_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
   * {
   *   "application/json": [
   *     {
   *       "agent_id": 3009358,
   *       "points_per_day": 53.5346162146776,
   *       "remainder_points": 53604.0634303189,
   *       "skill_type_id": 11450,
   *       "started_at": "2017-03-23T14:47:00Z"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_agents_research (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_agents_research?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return a list of blueprints the character owns
   * {
   *   "application/json": [
   *     {
   *       "item_id": 1000000010495,
   *       "location_flag": "Hangar",
   *       "location_id": 60014719,
   *       "material_efficiency": 0,
   *       "quantity": 1,
   *       "runs": -1,
   *       "time_efficiency": 0,
   *       "type_id": 691
   *     }
   *   ]
   * }
   */
  get_characters_character_id_blueprints (character_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_blueprints?character_id=${character_id}&page=${page}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of all the corporations a character has been a member of
   * {
   *   "application/json": [
   *     {
   *       "corporation_id": 90000001,
   *       "is_deleted": true,
   *       "record_id": 500,
   *       "start_date": "2016-06-26T20:00:00Z"
   *     },
   *     {
   *       "corporation_id": 90000002,
   *       "record_id": 501,
   *       "start_date": "2016-07-26T20:00:00Z"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_corporationhistory (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_corporationhistory?character_id=${character_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost
   * .
   */
  post_characters_character_id_cspa (character_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_cspa?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return a character's jump activation and fatigue information
   * {
   *   "application/json": {
   *     "jump_fatigue_expire_date": "2017-07-06T15:47:00Z",
   *     "last_jump_date": "2017-07-05T15:47:00Z",
   *     "last_update_date": "2017-07-05T15:42:00Z"
   *   }
   * }
   */
  get_characters_character_id_fatigue (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_fatigue?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return a list of medals the character has
   * {
   *   "application/json": [
   *     {
   *       "corporation_id": 98000001,
   *       "date": "2017-03-16T15:01:45Z",
   *       "description": "For 33 corp!",
   *       "graphics": [
   *         {
   *           "color": -1,
   *           "graphic": "caldari.1_1",
   *           "layer": 0,
   *           "part": 1
   *         },
   *         {
   *           "color": -330271,
   *           "graphic": "caldari.1_2",
   *           "layer": 1,
   *           "part": 1
   *         },
   *         {
   *           "color": -1,
   *           "graphic": "compass.1_2",
   *           "layer": 0,
   *           "part": 2
   *         }
   *       ],
   *       "issuer_id": 2112000002,
   *       "medal_id": 3,
   *       "reason": "Thanks!",
   *       "status": "private",
   *       "title": "33 tester medal"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_medals (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_medals?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return character notifications
   * {
   *   "application/json": [
   *     {
   *       "is_read": true,
   *       "notification_id": 1,
   *       "sender_id": 1000132,
   *       "sender_type": "corporation",
   *       "text": "amount: 3731016.4000000004\\nitemID: 1024881021663\\npayout: 1\\n",
   *       "timestamp": "2017-08-16T10:08:00Z",
   *       "type": "InsurancePayoutMsg"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_notifications (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_notifications?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return notifications about having been added to someone's contact list
   * {
   *   "application/json": [
   *     {
   *       "message": "hello friend :3",
   *       "notification_id": 1,
   *       "send_date": "2017-08-16T10:08:00Z",
   *       "sender_character_id": 95465499,
   *       "standing_level": 1.5
   *     }
   *   ]
   * }
   */
  get_characters_character_id_notifications_contacts (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_notifications_contacts?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get portrait urls for a character
   * {
   *   "application/json": {
   *     "px128x128": "https://images.evetech.net/characters/95465499/portrait?tenant=tranquility&size=128",
   *     "px256x256": "https://images.evetech.net/characters/95465499/portrait?tenant=tranquility&size=256",
   *     "px512x512": "https://images.evetech.net/characters/95465499/portrait?tenant=tranquility&size=512",
   *     "px64x64": "https://images.evetech.net/characters/95465499/portrait?tenant=tranquility&size=64"
   *   }
   * }
   */
  get_characters_character_id_portrait (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_portrait?character_id=${character_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Returns a character's corporation roles
   * {
   *   "application/json": {
   *     "roles": [
   *       "Director",
   *       "Station_Manager"
   *     ]
   *   }
   * }
   */
  get_characters_character_id_roles (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_roles?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return character standings from agents, NPC corporations, and factions
   * {
   *   "application/json": [
   *     {
   *       "from_id": 3009841,
   *       "from_type": "agent",
   *       "standing": 0.1
   *     },
   *     {
   *       "from_id": 1000061,
   *       "from_type": "npc_corp",
   *       "standing": 0
   *     },
   *     {
   *       "from_id": 500003,
   *       "from_type": "faction",
   *       "standing": -1
   *     }
   *   ]
   * }
   */
  get_characters_character_id_standings (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_standings?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Returns a character's titles
   * {
   *   "application/json": [
   *     {
   *       "name": "Awesome Title",
   *       "title_id": 1
   *     }
   *   ]
   * }
   */
  get_characters_character_id_titles (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_titles?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
