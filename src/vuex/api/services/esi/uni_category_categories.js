import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/uni_category_categories`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call uni_category_categories: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/uni_category_categories/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call uni_category_categories: ` + JSON.stringify(error)))
  }
}
