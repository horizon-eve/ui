/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * Get a list of dogma attribute ids
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_dogma_attributes (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/dogma/attributes/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get information on a dogma attribute
   * {
   *   "application/json": {
   *     "attribute_id": 20,
   *     "default_value": 1,
   *     "description": "Factor by which topspeed increases.",
   *     "display_name": "Maximum Velocity Bonus",
   *     "high_is_good": true,
   *     "icon_id": 1389,
   *     "name": "speedFactor",
   *     "published": true,
   *     "unit_id": 124
   *   }
   * }
   */
  get_dogma_attributes_attribute_id (attribute_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/dogma/attributes/${attribute_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
   * {
   *   "application/json": {
   *     "created_by": 2112625428,
   *     "dogma_attributes": [
   *       {
   *         "attribute_id": 9,
   *         "value": 350
   *       }
   *     ],
   *     "dogma_effects": [
   *       {
   *         "effect_id": 508,
   *         "is_default": false
   *       }
   *     ],
   *     "mutator_type_id": 47845,
   *     "source_type_id": 33103
   *   }
   * }
   */
  get_dogma_dynamic_items_type_id_item_id (item_id, type_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/dogma/dynamic/items/${type_id}/${item_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get a list of dogma effect ids
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_dogma_effects (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/dogma/effects/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get information on a dogma effect
   * {
   *   "application/json": {
   *     "description": "Requires a high power slot.",
   *     "display_name": "High power",
   *     "effect_category": 0,
   *     "effect_id": 12,
   *     "icon_id": 293,
   *     "name": "hiPower",
   *     "post_expression": 131,
   *     "pre_expression": 131,
   *     "published": true
   *   }
   * }
   */
  get_dogma_effects_effect_id (effect_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/dogma/effects/${effect_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
