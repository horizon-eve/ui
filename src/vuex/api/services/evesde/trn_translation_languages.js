import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/trn_translation_languages`, {
      params: params })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call trn_translation_languages: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/trn_translation_languages/${id}`, {
    })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call trn_translation_languages: ` + JSON.stringify(error)))
  }
}
