import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/ram_assembly_line_types`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ram_assembly_line_types: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/ram_assembly_line_types/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ram_assembly_line_types: ` + JSON.stringify(error)))
  }
}
