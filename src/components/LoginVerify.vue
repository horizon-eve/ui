<template>
</template>
<script>
  import config from '../config'
  import router from '../router'
  import axios from 'axios'

  export default {
    mounted () {
      let login = JSON.parse(localStorage.getItem('login'))
      if (login) {
        if (login.verify) {
          axios.post(config.AUTH_BASE_URL + '/login/verify', {
            verify: login.verify
          })
            .then(function (response) {
              let auth = response.data
              if (auth) {
                localStorage.setItem('auth', JSON.stringify(auth))
                localStorage.removeItem('login')
                router.push(login.callback ? login.callback : '/')
              } else {
                router.push('/login')
              }
            })
            .catch(function (error) {
              console.log(error)
              router.push('/login')
            })
        }
      } else {
        router.push('/login')
      }
    }
  }
</script>
