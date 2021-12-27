import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/chr_orders`, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-hr-authtoken': store.state.auth.auth_token
      },
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call chr_orders: ` + JSON.stringify(error)))
  }
}
