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
    return axios.get(`${config.API_BASE_URL}/esi/latest/alliances/${alliance_id}/contacts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/alliances/${alliance_id}/contacts/labels/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Bulk delete contacts
   *
   */
  delete_characters_character_id_contacts (character_id, contact_ids, done) {
    return axios.delete(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contacts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contacts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Bulk add contacts with same settings
   *
   */
  post_characters_character_id_contacts (character_id, label_ids, standing, watched, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contacts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Bulk edit contacts with same settings
   *
   */
  put_characters_character_id_contacts (character_id, label_ids, standing, watched, done) {
    return axios.put(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contacts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contacts/labels/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/contacts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/contacts/labels/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
