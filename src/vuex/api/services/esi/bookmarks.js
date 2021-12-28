/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * A list of your character's personal bookmarks
   * {
   *   "application/json": [
   *     {
   *       "bookmark_id": 4,
   *       "created": "2016-08-09T11:57:47Z",
   *       "creator_id": 2112625428,
   *       "folder_id": 5,
   *       "item": {
   *         "item_id": 50006722,
   *         "type_id": 29633
   *       },
   *       "label": "Stargate",
   *       "location_id": 30003430,
   *       "notes": "This is a stargate"
   *     },
   *     {
   *       "bookmark_id": 5,
   *       "coordinates": {
   *         "x": -2958928814000,
   *         "y": -338367275823,
   *         "z": 2114538075090
   *       },
   *       "created": "2016-08-09T11:57:47Z",
   *       "creator_id": 2112625428,
   *       "folder_id": 5,
   *       "label": "Random location",
   *       "location_id": 30003430,
   *       "notes": "This is a random location in space"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_bookmarks (character_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/bookmarks/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * A list of your character's personal bookmark folders
   * {
   *   "application/json": [
   *     {
   *       "folder_id": 5,
   *       "name": "Icecream"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_bookmarks_folders (character_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/bookmarks/folders/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * A list of your corporation's bookmarks
   * {
   *   "application/json": [
   *     {
   *       "bookmark_id": 4,
   *       "created": "2016-08-09T11:57:47Z",
   *       "creator_id": 2112625428,
   *       "folder_id": 5,
   *       "item": {
   *         "item_id": 50006722,
   *         "type_id": 29633
   *       },
   *       "label": "Stargate",
   *       "location_id": 30003430,
   *       "notes": "This is a stargate"
   *     },
   *     {
   *       "bookmark_id": 5,
   *       "coordinates": {
   *         "x": -2958928814000,
   *         "y": -338367275823,
   *         "z": 2114538075090
   *       },
   *       "created": "2016-08-09T11:57:47Z",
   *       "creator_id": 2112625428,
   *       "folder_id": 5,
   *       "label": "Random location",
   *       "location_id": 30003430,
   *       "notes": "This is a random location in space"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_bookmarks (corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/bookmarks/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * A list of your corporation's bookmark folders
   * {
   *   "application/json": [
   *     {
   *       "folder_id": 5,
   *       "name": "Important Locations"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_bookmarks_folders (corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/bookmarks/folders/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
