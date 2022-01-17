/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
   * {
   *   "application/json": [
   *     {
   *       "event_date": "2016-06-26T20:00:00Z",
   *       "event_id": 1386435,
   *       "event_response": "accepted",
   *       "importance": 0,
   *       "title": "o7 The EVE Online Show"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_calendar (character_id, from_event, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_calendar?character_id=${character_id}&from_event=${from_event}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get all the information for a specific event
   * {
   *   "application/json": {
   *     "date": "2016-06-26T21:00:00Z",
   *     "duration": 60,
   *     "event_id": 1386435,
   *     "importance": 1,
   *     "owner_id": 1,
   *     "owner_name": "EVE System",
   *     "owner_type": "eve_server",
   *     "response": "Undecided",
   *     "text": "o7: The EVE Online Show features latest developer news, fast paced action, community overviews and a lot more with CCP Guard and CCP Mimic. Join the thrilling o7 live broadcast at 20:00 EVE time (=UTC) on <a href=\"http://www.twitch.tv/ccp\">EVE TV</a>. Don't miss it!",
   *     "title": "o7 The EVE Online Show"
   *   }
   * }
   */
  get_characters_character_id_calendar_event_id (character_id, event_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_calendar_event_id?character_id=${character_id}&event_id=${event_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Set your response status to an event
   *
   */
  put_characters_character_id_calendar_event_id (character_id, event_id, done) {
    return axios.put(`${config.ESI_BASE_URL}/put_characters_character_id_calendar_event_id?character_id=${character_id}&event_id=${event_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get all invited attendees for a given event
   * {
   *   "application/json": [
   *     {
   *       "character_id": 2112625428,
   *       "event_response": "accepted"
   *     },
   *     {
   *       "character_id": 95465499,
   *       "event_response": "tentative"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_calendar_event_id_attendees (character_id, event_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_calendar_event_id_attendees?character_id=${character_id}&event_id=${event_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
