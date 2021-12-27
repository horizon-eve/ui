import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/dgm_dynamic_item_type_items`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call dgm_dynamic_item_type_items: ` + JSON.stringify(error)))
  }
}
