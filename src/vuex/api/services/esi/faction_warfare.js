/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Statistical overview of a character involved in faction warfare
   * {
   *   "application/json": {
   *     "enlisted_on": "2017-10-17T00:00:00Z",
   *     "faction_id": 500001,
   *     "kills": {
   *       "last_week": 893,
   *       "total": 684350,
   *       "yesterday": 136
   *     },
   *     "victory_points": {
   *       "last_week": 102640,
   *       "total": 52658260,
   *       "yesterday": 15980
   *     }
   *   }
   * }
   */
  get_characters_character_id_fw_stats (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_fw_stats?character_id=${character_id}`, {
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
   * Statistics about a corporation involved in faction warfare
   * {
   *   "application/json": {
   *     "enlisted_on": "2017-10-17T00:00:00Z",
   *     "faction_id": 500001,
   *     "kills": {
   *       "last_week": 893,
   *       "total": 684350,
   *       "yesterday": 136
   *     },
   *     "pilots": 28863,
   *     "victory_points": {
   *       "last_week": 102640,
   *       "total": 52658260,
   *       "yesterday": 15980
   *     }
   *   }
   * }
   */
  get_corporations_corporation_id_fw_stats (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_fw_stats?corporation_id=${corporation_id}`, {
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
   * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
   * {
   *   "application/json": {
   *     "kills": {
   *       "active_total": [
   *         {
   *           "amount": 832273,
   *           "faction_id": 500004
   *         },
   *         {
   *           "amount": 687915,
   *           "faction_id": 500001
   *         }
   *       ],
   *       "last_week": [
   *         {
   *           "amount": 730,
   *           "faction_id": 500001
   *         },
   *         {
   *           "amount": 671,
   *           "faction_id": 500004
   *         }
   *       ],
   *       "yesterday": [
   *         {
   *           "amount": 100,
   *           "faction_id": 500001
   *         },
   *         {
   *           "amount": 50,
   *           "faction_id": 500004
   *         }
   *       ]
   *     },
   *     "victory_points": {
   *       "active_total": [
   *         {
   *           "amount": 53130500,
   *           "faction_id": 500001
   *         },
   *         {
   *           "amount": 50964263,
   *           "faction_id": 500004
   *         }
   *       ],
   *       "last_week": [
   *         {
   *           "amount": 97360,
   *           "faction_id": 500001
   *         },
   *         {
   *           "amount": 84980,
   *           "faction_id": 500004
   *         }
   *       ],
   *       "yesterday": [
   *         {
   *           "amount": 5000,
   *           "faction_id": 500002
   *         },
   *         {
   *           "amount": 3500,
   *           "faction_id": 500003
   *         }
   *       ]
   *     }
   *   }
   * }
   */
  get_fw_leaderboards (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fw_leaderboards`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
   * {
   *   "application/json": {
   *     "kills": {
   *       "active_total": [
   *         {
   *           "amount": 10000,
   *           "character_id": 2112625428
   *         },
   *         {
   *           "amount": 8500,
   *           "character_id": 95465499
   *         }
   *       ],
   *       "last_week": [
   *         {
   *           "amount": 100,
   *           "character_id": 2112625428
   *         },
   *         {
   *           "amount": 70,
   *           "character_id": 95465499
   *         }
   *       ],
   *       "yesterday": [
   *         {
   *           "amount": 34,
   *           "character_id": 2112625428
   *         },
   *         {
   *           "amount": 20,
   *           "character_id": 95465499
   *         }
   *       ]
   *     },
   *     "victory_points": {
   *       "active_total": [
   *         {
   *           "amount": 1239158,
   *           "character_id": 2112625428
   *         },
   *         {
   *           "amount": 1139029,
   *           "character_id": 95465499
   *         }
   *       ],
   *       "last_week": [
   *         {
   *           "amount": 2660,
   *           "character_id": 2112625428
   *         },
   *         {
   *           "amount": 2000,
   *           "character_id": 95465499
   *         }
   *       ],
   *       "yesterday": [
   *         {
   *           "amount": 620,
   *           "character_id": 2112625428
   *         },
   *         {
   *           "amount": 550,
   *           "character_id": 95465499
   *         }
   *       ]
   *     }
   *   }
   * }
   */
  get_fw_leaderboards_characters (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fw_leaderboards_characters`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
   * {
   *   "application/json": {
   *     "kills": {
   *       "active_total": [
   *         {
   *           "amount": 81692,
   *           "corporation_id": 1000180
   *         },
   *         {
   *           "amount": 76793,
   *           "corporation_id": 1000182
   *         }
   *       ],
   *       "last_week": [
   *         {
   *           "amount": 290,
   *           "corporation_id": 1000180
   *         },
   *         {
   *           "amount": 169,
   *           "corporation_id": 1000182
   *         }
   *       ],
   *       "yesterday": [
   *         {
   *           "amount": 51,
   *           "corporation_id": 1000180
   *         },
   *         {
   *           "amount": 39,
   *           "corporation_id": 1000182
   *         }
   *       ]
   *     },
   *     "victory_points": {
   *       "active_total": [
   *         {
   *           "amount": 18640927,
   *           "corporation_id": 1000180
   *         },
   *         {
   *           "amount": 18078265,
   *           "corporation_id": 1000181
   *         }
   *       ],
   *       "last_week": [
   *         {
   *           "amount": 91980,
   *           "corporation_id": 1000180
   *         },
   *         {
   *           "amount": 58920,
   *           "corporation_id": 1000181
   *         }
   *       ],
   *       "yesterday": [
   *         {
   *           "amount": 12600,
   *           "corporation_id": 1000180
   *         },
   *         {
   *           "amount": 8240,
   *           "corporation_id": 1000181
   *         }
   *       ]
   *     }
   *   }
   * }
   */
  get_fw_leaderboards_corporations (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fw_leaderboards_corporations`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Statistical overviews of factions involved in faction warfare
   * {
   *   "application/json": [
   *     {
   *       "faction_id": 500001,
   *       "kills": {
   *         "last_week": 893,
   *         "total": 684350,
   *         "yesterday": 136
   *       },
   *       "pilots": 28863,
   *       "systems_controlled": 20,
   *       "victory_points": {
   *         "last_week": 102640,
   *         "total": 52658260,
   *         "yesterday": 15980
   *       }
   *     }
   *   ]
   * }
   */
  get_fw_stats (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fw_stats`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * An overview of the current ownership of faction warfare solar systems
   * {
   *   "application/json": [
   *     {
   *       "contested": "uncontested",
   *       "occupier_faction_id": 500001,
   *       "owner_faction_id": 500001,
   *       "solar_system_id": 30002096,
   *       "victory_points": 60,
   *       "victory_points_threshold": 3000
   *     }
   *   ]
   * }
   */
  get_fw_systems (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fw_systems`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Data about which NPC factions are at war
   * {
   *   "application/json": [
   *     {
   *       "against_id": 500002,
   *       "faction_id": 500001
   *     }
   *   ]
   * }
   */
  get_fw_wars (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_fw_wars`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
