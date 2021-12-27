import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/industry_activities`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call industry_activities: ` + JSON.stringify(error)))
  }
}
