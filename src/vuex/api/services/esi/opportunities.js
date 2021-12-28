/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return a list of tasks finished by a character
   * {
   *   "application/json": [
   *     {
   *       "completed_at": "2016-04-29T12:34:56Z",
   *       "task_id": 1
   *     }
   *   ]
   * }
   */
  get_characters_character_id_opportunities (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/opportunities/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of opportunities groups
   * {
   *   "application/json": [
   *     100,
   *     101,
   *     102,
   *     103
   *   ]
   * }
   */
  get_opportunities_groups (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/opportunities/groups/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return information of an opportunities group
   * {
   *   "application/json": {
   *     "connected_groups": [
   *       100
   *     ],
   *     "description": "As a capsuleer...",
   *     "group_id": 103,
   *     "name": "Welcome to New Eden",
   *     "notification": "Completed:<br>Welcome to New Eden",
   *     "required_tasks": [
   *       19
   *     ]
   *   }
   * }
   */
  get_opportunities_groups_group_id (group_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/opportunities/groups/${group_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of opportunities tasks
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3,
   *     4
   *   ]
   * }
   */
  get_opportunities_tasks (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/opportunities/tasks/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return information of an opportunities task
   * {
   *   "application/json": {
   *     "description": "To use station services...",
   *     "name": "Dock in the station",
   *     "notification": "Completed:<br>Docked in a station!",
   *     "task_id": 10
   *   }
   * }
   */
  get_opportunities_tasks_task_id (task_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/opportunities/tasks/${task_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
