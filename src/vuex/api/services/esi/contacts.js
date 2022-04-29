/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return contacts of an alliance
   * {
   *   "application/json": [
   *     {
   *       "contact_id": 2112625428,
   *       "contact_type": "character",
   *       "standing": 9.9
   *     }
   *   ]
   * }
   */
  get_alliances_alliance_id_contacts (alliance_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_alliances_alliance_id_contacts?alliance_id=${alliance_id}&page=${page}`, {
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
   * Return custom labels for an alliance's contacts
   * {
   *   "application/json": [
   *     {
   *       "label_id": 1,
   *       "label_name": "Alliance Friends"
   *     }
   *   ]
   * }
   */
  get_alliances_alliance_id_contacts_labels (alliance_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_alliances_alliance_id_contacts_labels?alliance_id=${alliance_id}`, {
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
   * Bulk delete contacts
   * .
   */
  delete_characters_character_id_contacts (character_id, contact_ids, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_characters_character_id_contacts?character_id=${character_id}&contact_ids=${contact_ids}`, {
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
   * Return contacts of a character
   * {
   *   "application/json": [
   *     {
   *       "contact_id": 123,
   *       "contact_type": "character",
   *       "is_blocked": true,
   *       "is_watched": true,
   *       "standing": 9.9
   *     }
   *   ]
   * }
   */
  get_characters_character_id_contacts (character_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_contacts?character_id=${character_id}&page=${page}`, {
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
   * Bulk add contacts with same settings
   * .
   */
  post_characters_character_id_contacts (character_id, label_ids, standing, watched, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_contacts?character_id=${character_id}&label_ids=${label_ids}&standing=${standing}&watched=${watched}`, {
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
   * Bulk edit contacts with same settings
   * .
   */
  put_characters_character_id_contacts (character_id, label_ids, standing, watched, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_characters_character_id_contacts?character_id=${character_id}&label_ids=${label_ids}&standing=${standing}&watched=${watched}`, {
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
   * Return custom labels for a character's contacts
   * {
   *   "application/json": [
   *     {
   *       "label_id": 123,
   *       "label_name": "Friends"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_contacts_labels (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_contacts_labels?character_id=${character_id}`, {
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
   * Return contacts of a corporation
   * {
   *   "application/json": [
   *     {
   *       "contact_id": 123,
   *       "contact_type": "character",
   *       "is_watched": true,
   *       "standing": 9.9
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_contacts (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_contacts?corporation_id=${corporation_id}&page=${page}`, {
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
   * Return custom labels for a corporation's contacts
   * {
   *   "application/json": [
   *     {
   *       "label_id": 2,
   *       "label_name": "Corporation Friends"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_contacts_labels (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_contacts_labels?corporation_id=${corporation_id}`, {
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
