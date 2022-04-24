import axios from 'axios'
import config from 'config'

export default {
  create (data, done) {
    return axios.post(`${config.API_BASE_URL}/evesde/sta_services`, data, {
    })
      .then((response) => done(response.data.id))
      .catch((error) => console.error(`Could not call sta_services: ` + JSON.stringify(error)))
  },

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/sta_services`, {
      params: params })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call sta_services: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/sta_services/${id}`, {
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call sta_services: ` + JSON.stringify(error)))
  },

  update (data, done) {
    return axios.patch(`${config.API_BASE_URL}/evesde/sta_services/${data.id}`, data, {
    })
      .then((response) => done(response))
      .catch((error) => console.error(`Could not call sta_services: ` + JSON.stringify(error)))
  },

  upsert (data, done) {
    if (data.id) {
      this.update(data, done)
    } else {
      this.create(data, done)
    }
  }
}
