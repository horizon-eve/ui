/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Get a list of npc corporations
   * {
   *   "application/json": [
   *     1000001,
   *     1000002,
   *     1000003
   *   ]
   * }
   */
  get_corporations_npccorps (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_npccorps`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Public information about a corporation
   * {
   *   "application/json": {
   *     "alliance_id": 434243723,
   *     "ceo_id": 180548812,
   *     "creator_id": 180548812,
   *     "date_founded": "2004-11-28T16:42:51Z",
   *     "description": "This is a corporation description, it's basically just a string",
   *     "member_count": 656,
   *     "name": "C C P",
   *     "tax_rate": 0.256,
   *     "ticker": "-CCP-",
   *     "url": "http://www.eveonline.com"
   *   }
   * }
   */
  get_corporations_corporation_id (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id?corporation_id=${corporation_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of all the alliances a corporation has been a member of
   * {
   *   "application/json": [
   *     {
   *       "alliance_id": 99000006,
   *       "is_deleted": true,
   *       "record_id": 23,
   *       "start_date": "2016-10-25T14:46:00Z"
   *     },
   *     {
   *       "record_id": 1,
   *       "start_date": "2015-07-06T20:56:00Z"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_alliancehistory (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_alliancehistory?corporation_id=${corporation_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Returns a list of blueprints the corporation owns
   * {
   *   "application/json": [
   *     {
   *       "item_id": 1000000010495,
   *       "location_flag": "CorpSAG1",
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
  get_corporations_corporation_id_blueprints (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_blueprints?corporation_id=${corporation_id}&page=${page}`, {
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
   * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
   * {
   *   "application/json": [
   *     {
   *       "action": "set_password",
   *       "character_id": 2112625428,
   *       "container_id": 1000000012279,
   *       "container_type_id": 17365,
   *       "location_flag": "CorpSAG1",
   *       "location_id": 1000000012278,
   *       "logged_at": "2017-10-10T14:00:00Z",
   *       "password_type": "general"
   *     },
   *     {
   *       "action": "lock",
   *       "character_id": 2112625428,
   *       "container_id": 1000000012279,
   *       "container_type_id": 17365,
   *       "location_flag": "CorpSAG1",
   *       "location_id": 1000000012278,
   *       "logged_at": "2017-10-11T12:04:33Z",
   *       "quantity": 30,
   *       "type_id": 1230
   *     },
   *     {
   *       "action": "configure",
   *       "character_id": 2112625428,
   *       "container_id": 1000000012279,
   *       "container_type_id": 17365,
   *       "location_flag": "CorpSAG2",
   *       "location_id": 1000000012278,
   *       "logged_at": "2017-10-11T12:06:29Z",
   *       "new_config_bitmask": 31,
   *       "old_config_bitmask": 23
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_containers_logs (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_containers_logs?corporation_id=${corporation_id}&page=${page}`, {
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
   * Return corporation hangar and wallet division names, only show if a division is not using the default name
   * {
   *   "application/json": {
   *     "hangar": [
   *       {
   *         "division": 1,
   *         "name": "Awesome Hangar 1"
   *       }
   *     ],
   *     "wallet": [
   *       {
   *         "division": 1,
   *         "name": "Rich Wallet 1"
   *       }
   *     ]
   *   }
   * }
   */
  get_corporations_corporation_id_divisions (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_divisions?corporation_id=${corporation_id}`, {
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
   * Return a corporation's facilities
   * {
   *   "application/json": [
   *     {
   *       "facility_id": 123,
   *       "system_id": 45678,
   *       "type_id": 2502
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_facilities (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_facilities?corporation_id=${corporation_id}`, {
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
   * Get the icon urls for a corporation
   * {
   *   "application/json": {
   *     "px128x128": "https://images.evetech.net/corporations/1000010/logo?tenant=tranquility&size=128",
   *     "px256x256": "https://images.evetech.net/corporations/1000010/logo?tenant=tranquility&size=256",
   *     "px64x64": "https://images.evetech.net/corporations/1000010/logo?tenant=tranquility&size=64"
   *   }
   * }
   */
  get_corporations_corporation_id_icons (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_icons?corporation_id=${corporation_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Returns a corporation's medals
   * {
   *   "application/json": [
   *     {
   *       "created_at": "2017-10-10T14:00:00Z",
   *       "creator_id": 46578,
   *       "description": "An Awesome Medal",
   *       "medal_id": 123,
   *       "title": "Awesome Medal"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_medals (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_medals?corporation_id=${corporation_id}&page=${page}`, {
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
   * Returns medals issued by a corporation
   * {
   *   "application/json": [
   *     {
   *       "character_id": 45678,
   *       "issued_at": "2017-10-10T14:00:00Z",
   *       "issuer_id": 67890,
   *       "medal_id": 123,
   *       "reason": "Awesome Reason",
   *       "status": "private"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_medals_issued (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_medals_issued?corporation_id=${corporation_id}&page=${page}`, {
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
   * Return the current member list of a corporation, the token's character need to be a member of the corporation.
   * {
   *   "application/json": [
   *     90000001,
   *     90000002
   *   ]
   * }
   */
  get_corporations_corporation_id_members (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_members?corporation_id=${corporation_id}`, {
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
   * Return a corporation's member limit, not including CEO himself
   * {
   *   "application/json": 40
   * }
   */
  get_corporations_corporation_id_members_limit (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_members_limit?corporation_id=${corporation_id}`, {
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
   * Returns a corporation's members' titles
   * {
   *   "application/json": [
   *     {
   *       "character_id": 12345,
   *       "titles": []
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_members_titles (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_members_titles?corporation_id=${corporation_id}`, {
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
   * Returns additional information about a corporation's members which helps tracking their activities
   * {
   *   "application/json": [
   *     {
   *       "character_id": 2112000001,
   *       "location_id": 30003657,
   *       "logoff_date": "2017-08-03T14:31:16Z",
   *       "logon_date": "2017-08-03T14:22:03Z",
   *       "ship_type_id": 22464,
   *       "start_date": "2017-07-10T14:46:00Z"
   *     },
   *     {
   *       "character_id": 2112000002,
   *       "location_id": 30003657,
   *       "logoff_date": "2017-07-25T11:07:40Z",
   *       "logon_date": "2017-07-25T10:54:00Z",
   *       "ship_type_id": 670,
   *       "start_date": "2017-07-10T14:50:00Z"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_membertracking (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_membertracking?corporation_id=${corporation_id}`, {
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
   * Return the roles of all members if the character has the personnel manager role or any grantable role.
   * {
   *   "application/json": [
   *     {
   *       "character_id": 1000171,
   *       "roles": [
   *         "Director",
   *         "Station_Manager"
   *       ]
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_roles (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_roles?corporation_id=${corporation_id}`, {
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
   * Return how roles have changed for a coporation's members, up to a month
   * {
   *   "application/json": [
   *     {
   *       "changed_at": "2016-10-25T14:46:00Z",
   *       "character_id": 12345,
   *       "issuer_id": 45678,
   *       "new_roles": [
   *         "Station_Manager"
   *       ],
   *       "old_roles": [
   *         "Diplomat"
   *       ],
   *       "role_type": "roles"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_roles_history (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_roles_history?corporation_id=${corporation_id}&page=${page}`, {
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
   * Return the current shareholders of a corporation.
   * {
   *   "application/json": [
   *     {
   *       "share_count": 580,
   *       "shareholder_id": 98000001,
   *       "shareholder_type": "corporation"
   *     },
   *     {
   *       "share_count": 20,
   *       "shareholder_id": 2112000003,
   *       "shareholder_type": "character"
   *     },
   *     {
   *       "share_count": 300,
   *       "shareholder_id": 2112000004,
   *       "shareholder_type": "character"
   *     },
   *     {
   *       "share_count": 100,
   *       "shareholder_id": 2112000001,
   *       "shareholder_type": "character"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_shareholders (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_shareholders?corporation_id=${corporation_id}&page=${page}`, {
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
   * Return corporation standings from agents, NPC corporations, and factions
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
  get_corporations_corporation_id_standings (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_standings?corporation_id=${corporation_id}&page=${page}`, {
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
   * Returns list of corporation starbases (POSes)
   * {
   *   "application/json": [
   *     {
   *       "starbase_id": 12345,
   *       "system_id": 123456,
   *       "type_id": 456
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_starbases (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_starbases?corporation_id=${corporation_id}&page=${page}`, {
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
   * Returns various settings and fuels of a starbase (POS)
   * {
   *   "application/json": {
   *     "allow_alliance_members": false,
   *     "allow_corporation_members": true,
   *     "anchor": "config_starbase_equipment_role",
   *     "attack_if_at_war": true,
   *     "attack_if_other_security_status_dropping": false,
   *     "fuel_bay_take": "config_starbase_equipment_role",
   *     "fuel_bay_view": "config_starbase_equipment_role",
   *     "offline": "config_starbase_equipment_role",
   *     "online": "config_starbase_equipment_role",
   *     "unanchor": "config_starbase_equipment_role",
   *     "use_alliance_standings": false
   *   }
   * }
   */
  get_corporations_corporation_id_starbases_starbase_id (corporation_id, starbase_id, system_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_starbases_starbase_id?corporation_id=${corporation_id}&starbase_id=${starbase_id}&system_id=${system_id}`, {
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
   * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
   * {
   *   "application/json": [
   *     {
   *       "corporation_id": 667531913,
   *       "name": "example name",
   *       "profile_id": 11237,
   *       "reinforce_hour": 22,
   *       "state": "shield_vulnerable",
   *       "structure_id": 1021975535893,
   *       "system_id": 30004763,
   *       "type_id": 35833
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_structures (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_structures?corporation_id=${corporation_id}&page=${page}`, {
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
   * Returns a corporation's titles
   * {
   *   "application/json": [
   *     {
   *       "name": "Awesome Title",
   *       "roles": [
   *         "Hangar_Take_6",
   *         "Hangar_Query_2"
   *       ],
   *       "title_id": 1
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_titles (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_titles?corporation_id=${corporation_id}`, {
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
