import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/lty_store_corporation_offers`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call lty_store_corporation_offers: ` + JSON.stringify(error)))
  }
}
