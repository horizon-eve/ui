import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/ali_corporations`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ali_corporations: ` + JSON.stringify(error)))
  }
}
