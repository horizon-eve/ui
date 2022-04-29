/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
   * {
   *   "application/json": [
   *     {
   *       "from": 90000001,
   *       "is_read": true,
   *       "labels": [
   *         3
   *       ],
   *       "mail_id": 7,
   *       "recipients": [
   *         {
   *           "recipient_id": 90000002,
   *           "recipient_type": "character"
   *         }
   *       ],
   *       "subject": "Title for EVE Mail",
   *       "timestamp": "2015-09-30T16:07:00Z"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_mail (character_id, labels, last_mail_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_mail?character_id=${character_id}&labels=${labels}&last_mail_id=${last_mail_id}`, {
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
   * Create and send a new mail
   * .
   */
  post_characters_character_id_mail (character_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_mail?character_id=${character_id}`, {
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
   * Return a list of the users mail labels, unread counts for each label and a total unread count.
   * {
   *   "application/json": {
   *     "labels": [
   *       {
   *         "color": "#660066",
   *         "label_id": 16,
   *         "name": "PINK",
   *         "unread_count": 4
   *       },
   *       {
   *         "color": "#ffffff",
   *         "label_id": 17,
   *         "name": "WHITE",
   *         "unread_count": 1
   *       }
   *     ],
   *     "total_unread_count": 5
   *   }
   * }
   */
  get_characters_character_id_mail_labels (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_mail_labels?character_id=${character_id}`, {
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
   * Create a mail label
   * .
   */
  post_characters_character_id_mail_labels (character_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_mail_labels?character_id=${character_id}`, {
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
   * Delete a mail label
   * .
   */
  delete_characters_character_id_mail_labels_label_id (character_id, label_id, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_characters_character_id_mail_labels_label_id?character_id=${character_id}&label_id=${label_id}`, {
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
   * Return all mailing lists that the character is subscribed to
   * {
   *   "application/json": [
   *     {
   *       "mailing_list_id": 1,
   *       "name": "test_mailing_list"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_mail_lists (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_mail_lists?character_id=${character_id}`, {
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
   * Delete a mail
   * .
   */
  delete_characters_character_id_mail_mail_id (character_id, mail_id, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_characters_character_id_mail_mail_id?character_id=${character_id}&mail_id=${mail_id}`, {
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
   * Return the contents of an EVE mail
   * {
   *   "application/json": {
   *     "body": "blah blah blah",
   *     "from": 90000001,
   *     "labels": [
   *       2,
   *       32
   *     ],
   *     "read": true,
   *     "subject": "test",
   *     "timestamp": "2015-09-30T16:07:00Z"
   *   }
   * }
   */
  get_characters_character_id_mail_mail_id (character_id, mail_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_mail_mail_id?character_id=${character_id}&mail_id=${mail_id}`, {
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
   * Update metadata about a mail
   * .
   */
  put_characters_character_id_mail_mail_id (character_id, mail_id, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_characters_character_id_mail_mail_id?character_id=${character_id}&mail_id=${mail_id}`, {
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
