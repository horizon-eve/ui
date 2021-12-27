import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/con_public_item_contracts`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call con_public_item_contracts: ` + JSON.stringify(error)))
  }
}
