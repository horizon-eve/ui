/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Returns a character's wallet balance
   * {
   *   "application/json": 29500.01
   * }
   */
  get_characters_character_id_wallet (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_wallet?character_id=${character_id}`, {
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
   * Retrieve the given character's wallet journal going 30 days back
   * {
   *   "application/json": [
   *     {
   *       "amount": -100000,
   *       "balance": 500000.4316,
   *       "context_id": 4,
   *       "context_id_type": "contract_id",
   *       "date": "2018-02-23T14:31:32Z",
   *       "description": "Contract Deposit",
   *       "first_party_id": 2112625428,
   *       "id": 89,
   *       "ref_type": "contract_deposit",
   *       "second_party_id": 1000132
   *     }
   *   ]
   * }
   */
  get_characters_character_id_wallet_journal (character_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_wallet_journal?character_id=${character_id}&page=${page}`, {
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
   * Get wallet transactions of a character
   * {
   *   "application/json": [
   *     {
   *       "client_id": 54321,
   *       "date": "2016-10-24T09:00:00Z",
   *       "is_buy": true,
   *       "is_personal": true,
   *       "journal_ref_id": 67890,
   *       "location_id": 60014719,
   *       "quantity": 1,
   *       "transaction_id": 1234567890,
   *       "type_id": 587,
   *       "unit_price": 1
   *     }
   *   ]
   * }
   */
  get_characters_character_id_wallet_transactions (character_id, from_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_wallet_transactions?character_id=${character_id}&from_id=${from_id}`, {
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
   * Get a corporation's wallets
   * {
   *   "application/json": [
   *     {
   *       "balance": 123.45,
   *       "division": 1
   *     },
   *     {
   *       "balance": 123.45,
   *       "division": 2
   *     },
   *     {
   *       "balance": 123.45,
   *       "division": 3
   *     },
   *     {
   *       "balance": 123.45,
   *       "division": 4
   *     },
   *     {
   *       "balance": 123.45,
   *       "division": 5
   *     },
   *     {
   *       "balance": 123.45,
   *       "division": 6
   *     },
   *     {
   *       "balance": 123.45,
   *       "division": 7
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_wallets (corporation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_wallets?corporation_id=${corporation_id}`, {
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
   * Retrieve the given corporation's wallet journal for the given division going 30 days back
   * {
   *   "application/json": [
   *     {
   *       "amount": -1000,
   *       "balance": 100000,
   *       "context_id": 2112625428,
   *       "context_id_type": "character_id",
   *       "date": "2016-10-24T09:00:00Z",
   *       "description": "CCP Zoetrope transferred cash from C C P's corporate account to CCP SnowedIn's account",
   *       "first_party_id": 109299958,
   *       "id": 1234567890,
   *       "ref_type": "corporation_account_withdrawal",
   *       "second_party_id": 95538921
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_wallets_division_journal (corporation_id, division, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_wallets_division_journal?corporation_id=${corporation_id}&division=${division}&page=${page}`, {
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
   * Get wallet transactions of a corporation
   * {
   *   "application/json": [
   *     {
   *       "client_id": 54321,
   *       "date": "2016-10-24T09:00:00Z",
   *       "is_buy": true,
   *       "journal_ref_id": 67890,
   *       "location_id": 60014719,
   *       "quantity": 1,
   *       "transaction_id": 1234567890,
   *       "type_id": 587,
   *       "unit_price": 1
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_wallets_division_transactions (corporation_id, division, from_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_wallets_division_transactions?corporation_id=${corporation_id}&division=${division}&from_id=${from_id}`, {
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
