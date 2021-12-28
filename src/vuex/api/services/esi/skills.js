/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return attributes of a character
   * {
   *   "application/json": {
   *     "charisma": 20,
   *     "intelligence": 20,
   *     "memory": 20,
   *     "perception": 20,
   *     "willpower": 20
   *   }
   * }
   */
  get_characters_character_id_attributes (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/attributes/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * List the configured skill queue for the given character
   * {
   *   "application/json": [
   *     {
   *       "finish_date": "2016-06-29T10:47:00Z",
   *       "finished_level": 3,
   *       "queue_position": 0,
   *       "skill_id": 1,
   *       "start_date": "2016-06-29T10:46:00Z"
   *     },
   *     {
   *       "finish_date": "2016-07-15T10:47:00Z",
   *       "finished_level": 4,
   *       "queue_position": 1,
   *       "skill_id": 1,
   *       "start_date": "2016-06-29T10:47:00Z"
   *     },
   *     {
   *       "finish_date": "2016-08-30T10:47:00Z",
   *       "finished_level": 2,
   *       "queue_position": 2,
   *       "skill_id": 2,
   *       "start_date": "2016-07-15T10:47:00Z"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_skillqueue (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/skillqueue/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * List all trained skills for the given character
   * {
   *   "application/json": {
   *     "skills": [
   *       {
   *         "active_skill_level": 3,
   *         "skill_id": 1,
   *         "skillpoints_in_skill": 10000,
   *         "trained_skill_level": 4
   *       },
   *       {
   *         "active_skill_level": 1,
   *         "skill_id": 2,
   *         "skillpoints_in_skill": 10000,
   *         "trained_skill_level": 1
   *       }
   *     ],
   *     "total_sp": 20000
   *   }
   * }
   */
  get_characters_character_id_skills (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/skills/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
