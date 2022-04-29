/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Get all character ancestries
   * {
   *   "application/json": [
   *     {
   *       "bloodline_id": 1,
   *       "description": "Acutely aware of the small population...",
   *       "id": 12,
   *       "name": "Tube Child",
   *       "short_description": "Manufactured citizens of the State."
   *     }
   *   ]
   * }
   */
  get_universe_ancestries (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_ancestries`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on an asteroid belt
   * {
   *   "application/json": {
   *     "name": "Tanoo I - Asteroid Belt 1",
   *     "position": {
   *       "x": 161967513600,
   *       "y": 21288837120,
   *       "z": -73505464320
   *     },
   *     "system_id": 30000001
   *   }
   * }
   */
  get_universe_asteroid_belts_asteroid_belt_id (asteroid_belt_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_asteroid_belts_asteroid_belt_id?asteroid_belt_id=${asteroid_belt_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of bloodlines
   * {
   *   "application/json": [
   *     {
   *       "bloodline_id": 1,
   *       "charisma": 6,
   *       "corporation_id": 1000006,
   *       "description": "The Deteis are regarded as ...",
   *       "intelligence": 7,
   *       "memory": 7,
   *       "name": "Deteis",
   *       "perception": 5,
   *       "race_id": 1,
   *       "ship_type_id": 601,
   *       "willpower": 5
   *     }
   *   ]
   * }
   */
  get_universe_bloodlines (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_bloodlines`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of item categories
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_universe_categories (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_categories`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information of an item category
   * {
   *   "application/json": {
   *     "category_id": 6,
   *     "groups": [
   *       25,
   *       26,
   *       27
   *     ],
   *     "name": "Ship",
   *     "published": true
   *   }
   * }
   */
  get_universe_categories_category_id (category_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_categories_category_id?category_id=${category_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of constellations
   * {
   *   "application/json": [
   *     20000001,
   *     20000002
   *   ]
   * }
   */
  get_universe_constellations (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_constellations`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a constellation
   * {
   *   "application/json": {
   *     "constellation_id": 20000009,
   *     "name": "Mekashtad",
   *     "position": {
   *       "x": 67796138757472320,
   *       "y": -70591121348560960,
   *       "z": -59587016159270070
   *     },
   *     "region_id": 10000001,
   *     "systems": [
   *       20000302,
   *       20000303
   *     ]
   *   }
   * }
   */
  get_universe_constellations_constellation_id (constellation_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_constellations_constellation_id?constellation_id=${constellation_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of factions
   * {
   *   "application/json": [
   *     {
   *       "corporation_id": 456,
   *       "description": "blah blah",
   *       "faction_id": 1,
   *       "is_unique": true,
   *       "name": "Faction",
   *       "size_factor": 1,
   *       "solar_system_id": 123,
   *       "station_count": 1000,
   *       "station_system_count": 100
   *     }
   *   ]
   * }
   */
  get_universe_factions (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_factions`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of graphics
   * {
   *   "application/json": [
   *     10,
   *     4106
   *   ]
   * }
   */
  get_universe_graphics (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_graphics`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a graphic
   * {
   *   "application/json": {
   *     "graphic_file": "res:/dx9/model/worldobject/planet/moon.red",
   *     "graphic_id": 10
   *   }
   * }
   */
  get_universe_graphics_graphic_id (graphic_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_graphics_graphic_id?graphic_id=${graphic_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of item groups
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_universe_groups (page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_groups?page=${page}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on an item group
   * {
   *   "application/json": {
   *     "category_id": 6,
   *     "group_id": 25,
   *     "name": "Frigate",
   *     "published": true,
   *     "types": [
   *       587,
   *       586,
   *       585
   *     ]
   *   }
   * }
   */
  get_universe_groups_group_id (group_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_groups_group_id?group_id=${group_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
   * {
   *   "application/json": {
   *     "characters": [
   *       {
   *         "id": 95465499,
   *         "name": "CCP Bartender"
   *       },
   *       {
   *         "id": 2112625428,
   *         "name": "CCP Zoetrope"
   *       }
   *     ],
   *     "systems": [
   *       {
   *         "id": 30000142,
   *         "name": "Jita"
   *       }
   *     ]
   *   }
   * }
   */
  post_universe_ids (done) {
    return axios.post(`${config.ESI_BASE_URL}/post_universe_ids`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a moon
   * {
   *   "application/json": {
   *     "moon_id": 40000042,
   *     "name": "Akpivem I - Moon 1",
   *     "position": {
   *       "x": 58605102008,
   *       "y": -3066616285,
   *       "z": -55193617920
   *     },
   *     "system_id": 30000003
   *   }
   * }
   */
  get_universe_moons_moon_id (moon_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_moons_moon_id?moon_id=${moon_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
   * {
   *   "application/json": [
   *     {
   *       "category": "character",
   *       "id": 95465499,
   *       "name": "CCP Bartender"
   *     },
   *     {
   *       "category": "solar_system",
   *       "id": 30000142,
   *       "name": "Jita"
   *     }
   *   ]
   * }
   */
  post_universe_names (done) {
    return axios.post(`${config.ESI_BASE_URL}/post_universe_names`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a planet
   * {
   *   "application/json": {
   *     "name": "Akpivem III",
   *     "planet_id": 40000046,
   *     "position": {
   *       "x": -189226344497,
   *       "y": 9901605317,
   *       "z": -254852632979
   *     },
   *     "system_id": 30000003,
   *     "type_id": 13
   *   }
   * }
   */
  get_universe_planets_planet_id (planet_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_planets_planet_id?planet_id=${planet_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of character races
   * {
   *   "application/json": [
   *     {
   *       "alliance_id": 500001,
   *       "description": "Founded on the tenets of patriotism and hard work...",
   *       "name": "Caldari",
   *       "race_id": 1
   *     }
   *   ]
   * }
   */
  get_universe_races (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_races`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of regions
   * {
   *   "application/json": [
   *     11000001,
   *     11000002
   *   ]
   * }
   */
  get_universe_regions (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_regions`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a region
   * {
   *   "application/json": {
   *     "constellations": [
   *       20000302,
   *       20000303
   *     ],
   *     "description": "It has long been an established fact of civilization...",
   *     "name": "Metropolis",
   *     "region_id": 10000042
   *   }
   * }
   */
  get_universe_regions_region_id (region_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_regions_region_id?region_id=${region_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a stargate
   * {
   *   "application/json": {
   *     "destination": {
   *       "stargate_id": 50000056,
   *       "system_id": 30000001
   *     },
   *     "name": "Stargate (Tanoo)",
   *     "position": {
   *       "x": -101092761600,
   *       "y": 5279539200,
   *       "z": 1550503403520
   *     },
   *     "stargate_id": 50000342,
   *     "system_id": 30000003,
   *     "type_id": 29624
   *   }
   * }
   */
  get_universe_stargates_stargate_id (stargate_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_stargates_stargate_id?stargate_id=${stargate_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a star
   * {
   *   "application/json": {
   *     "age": 9398686722,
   *     "luminosity": 0.06615000218153,
   *     "name": "BKG-Q2 - Star",
   *     "radius": 346600000,
   *     "solar_system_id": 30004333,
   *     "spectral_class": "K2 V",
   *     "temperature": 3953,
   *     "type_id": 45033
   *   }
   * }
   */
  get_universe_stars_star_id (star_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_stars_star_id?star_id=${star_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a station
   * {
   *   "application/json": {
   *     "max_dockable_ship_volume": 50000000,
   *     "name": "Jakanerva III - Moon 15 - Prompt Delivery Storage",
   *     "office_rental_cost": 10000,
   *     "owner": 1000003,
   *     "position": {
   *       "x": 165632286720,
   *       "y": 2771804160,
   *       "z": -2455331266560
   *     },
   *     "race_id": 1,
   *     "reprocessing_efficiency": 0.5,
   *     "reprocessing_stations_take": 0.05,
   *     "services": [
   *       "courier-missions",
   *       "reprocessing-plant",
   *       "market",
   *       "repair-facilities",
   *       "fitting",
   *       "news",
   *       "storage",
   *       "insurance",
   *       "docking",
   *       "office-rental",
   *       "loyalty-point-store",
   *       "navy-offices"
   *     ],
   *     "station_id": 60000277,
   *     "system_id": 30000148,
   *     "type_id": 1531
   *   }
   * }
   */
  get_universe_stations_station_id (station_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_stations_station_id?station_id=${station_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * List all public structures
   * {
   *   "application/json": [
   *     1020988381992,
   *     1020988381991
   *   ]
   * }
   */
  get_universe_structures (filter, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_structures?filter=${filter}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
   * {
   *   "application/json": {
   *     "name": "V-3YG7 VI - The Capital",
   *     "owner_id": 109299958,
   *     "solar_system_id": 30000142
   *   }
   * }
   */
  get_universe_structures_structure_id (structure_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_structures_structure_id?structure_id=${structure_id}`, {
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
   * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
   * {
   *   "application/json": [
   *     {
   *       "ship_jumps": 42,
   *       "system_id": 30002410
   *     }
   *   ]
   * }
   */
  get_universe_system_jumps (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_system_jumps`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
   * {
   *   "application/json": [
   *     {
   *       "npc_kills": 0,
   *       "pod_kills": 24,
   *       "ship_kills": 42,
   *       "system_id": 30002410
   *     }
   *   ]
   * }
   */
  get_universe_system_kills (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_system_kills`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of solar systems
   * {
   *   "application/json": [
   *     30000001,
   *     30000002
   *   ]
   * }
   */
  get_universe_systems (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_systems`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a solar system.
   * {
   *   "application/json": {
   *     "constellation_id": 20000001,
   *     "name": "Akpivem",
   *     "planets": [
   *       {
   *         "moons": [
   *           40000042
   *         ],
   *         "planet_id": 40000041
   *       },
   *       {
   *         "planet_id": 40000043
   *       }
   *     ],
   *     "position": {
   *       "x": -91174141133075340,
   *       "y": 43938227486247170,
   *       "z": -56482824383339900
   *     },
   *     "security_class": "B",
   *     "security_status": 0.8462923765182495,
   *     "star_id": 40000040,
   *     "stargates": [
   *       50000342
   *     ],
   *     "system_id": 30000003
   *   }
   * }
   */
  get_universe_systems_system_id (system_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_systems_system_id?system_id=${system_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get a list of type ids
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_universe_types (page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_types?page=${page}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get information on a type
   * {
   *   "application/json": {
   *     "description": "The Rifter is a...",
   *     "group_id": 25,
   *     "name": "Rifter",
   *     "published": true,
   *     "type_id": 587
   *   }
   * }
   */
  get_universe_types_type_id (type_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_types_type_id?type_id=${type_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
