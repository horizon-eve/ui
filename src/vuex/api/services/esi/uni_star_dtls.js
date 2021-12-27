import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/uni_star_dtls`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call uni_star_dtls: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/uni_star_dtls/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call uni_star_dtls: ` + JSON.stringify(error)))
  }
}
