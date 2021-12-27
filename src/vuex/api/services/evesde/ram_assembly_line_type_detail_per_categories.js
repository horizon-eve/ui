import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/ram_assembly_line_type_detail_per_categories`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ram_assembly_line_type_detail_per_categories: ` + JSON.stringify(error)))
  }
}
