import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_control_tower_resources`, {
      params: params })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call inv_control_tower_resources: ` + JSON.stringify(error)))
  }
}
