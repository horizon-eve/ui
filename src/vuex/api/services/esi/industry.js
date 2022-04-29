/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * List industry jobs placed by a character
   * {
   *   "application/json": [
   *     {
   *       "activity_id": 1,
   *       "blueprint_id": 1015116533326,
   *       "blueprint_location_id": 60006382,
   *       "blueprint_type_id": 2047,
   *       "cost": 118.01,
   *       "duration": 548,
   *       "end_date": "2014-07-19T15:56:14Z",
   *       "facility_id": 60006382,
   *       "installer_id": 498338451,
   *       "job_id": 229136101,
   *       "licensed_runs": 200,
   *       "output_location_id": 60006382,
   *       "runs": 1,
   *       "start_date": "2014-07-19T15:47:06Z",
   *       "station_id": 60006382,
   *       "status": "active"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_industry_jobs (character_id, include_completed, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_industry_jobs?character_id=${character_id}&include_completed=${include_completed}`, {
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
   * Paginated record of all mining done by a character for the past 30 days
   * {
   *   "application/json": [
   *     {
   *       "date": "2017-09-19",
   *       "quantity": 7004,
   *       "solar_system_id": 30003707,
   *       "type_id": 17471
   *     },
   *     {
   *       "date": "2017-09-18",
   *       "quantity": 5199,
   *       "solar_system_id": 30003707,
   *       "type_id": 17471
   *     }
   *   ]
   * }
   */
  get_characters_character_id_mining (character_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_mining?character_id=${character_id}&page=${page}`, {
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
   * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
   * {
   *   "application/json": [
   *     {
   *       "chunk_arrival_time": "2017-10-17T11:00:59Z",
   *       "extraction_start_time": "2017-10-11T10:37:04Z",
   *       "moon_id": 40307229,
   *       "natural_decay_time": "2017-10-17T14:00:59Z",
   *       "structure_id": 1000000010579
   *     }
   *   ]
   * }
   */
  get_corporation_corporation_id_mining_extractions (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporation_corporation_id_mining_extractions?corporation_id=${corporation_id}&page=${page}`, {
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
   * Paginated list of all entities capable of observing and recording mining for a corporation
   * {
   *   "application/json": [
   *     {
   *       "last_updated": "2017-09-19",
   *       "observer_id": 1,
   *       "observer_type": "structure"
   *     }
   *   ]
   * }
   */
  get_corporation_corporation_id_mining_observers (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporation_corporation_id_mining_observers?corporation_id=${corporation_id}&page=${page}`, {
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
   * Paginated record of all mining seen by an observer
   * {
   *   "application/json": [
   *     {
   *       "character_id": 95465499,
   *       "last_updated": "2017-09-19",
   *       "quantity": 500,
   *       "recorded_corporation_id": 109299958,
   *       "type_id": 1230
   *     }
   *   ]
   * }
   */
  get_corporation_corporation_id_mining_observers_observer_id (corporation_id, observer_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporation_corporation_id_mining_observers_observer_id?corporation_id=${corporation_id}&observer_id=${observer_id}&page=${page}`, {
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
   * List industry jobs run by a corporation
   * {
   *   "application/json": [
   *     {
   *       "activity_id": 1,
   *       "blueprint_id": 1015116533326,
   *       "blueprint_location_id": 60006382,
   *       "blueprint_type_id": 2047,
   *       "cost": 118.01,
   *       "duration": 548,
   *       "end_date": "2014-07-19T15:56:14Z",
   *       "facility_id": 60006382,
   *       "installer_id": 498338451,
   *       "job_id": 229136101,
   *       "licensed_runs": 200,
   *       "location_id": 60006382,
   *       "output_location_id": 60006382,
   *       "runs": 1,
   *       "start_date": "2014-07-19T15:47:06Z",
   *       "status": "active"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_industry_jobs (corporation_id, include_completed, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_industry_jobs?corporation_id=${corporation_id}&include_completed=${include_completed}&page=${page}`, {
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
   * Return a list of industry facilities
   * {
   *   "application/json": [
   *     {
   *       "facility_id": 60012544,
   *       "owner_id": 1000126,
   *       "region_id": 10000001,
   *       "solar_system_id": 30000032,
   *       "tax": 0.1,
   *       "type_id": 2502
   *     }
   *   ]
   * }
   */
  get_industry_facilities (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_industry_facilities`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return cost indices for solar systems
   * {
   *   "application/json": [
   *     {
   *       "cost_indices": [
   *         {
   *           "activity": "invention",
   *           "cost_index": 0.0048
   *         }
   *       ],
   *       "solar_system_id": 30011392
   *     }
   *   ]
   * }
   */
  get_industry_systems (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_industry_systems`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
