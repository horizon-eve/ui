import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  create (data, done) {
    return axios.post(`${config.API_BASE_URL}/itemlists`, data, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => {
        try {
          done(response.data.id)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call itemlists: ` + JSON.stringify(error)))
  },

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/itemlists`, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-hr-authtoken': store.state.auth.auth_token
      },
      params: params })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call itemlists: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/itemlists/${id}`, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call itemlists: ` + JSON.stringify(error)))
  },

  update (data, done) {
    return axios.patch(`${config.API_BASE_URL}/itemlists/${data.id}`, data, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call itemlists: ` + JSON.stringify(error)))
  },

  upsert (data, done) {
    if (data.id) {
      this.update(data, done)
    } else {
      this.create(data, done)
    }
  }
}
