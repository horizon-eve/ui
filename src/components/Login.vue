<template>
  <div class="hold-transition">
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html"><b>RED</b> HORIZON</a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form id="login" method="POST" v-bind:action="authHref" v-on:submit="submit()">
          <input type="hidden" name="verify" v-model="login.verify">
          <input type="hidden" name="callback" v-model="callback">
          <input type="hidden" name="scope" :value="scope">
          <input type="submit" value=""
                 style="background-image: url(//web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-white-large.png); border: solid 0px #000000; width: 270px; height: 45px;" />
        </form>
      </div>
      <!-- /.login-box-body -->
    </div>
  </div>
</template>
<script>
  import config from '../config'

  export default {
    data () {
      return {
        login: {
          callback: null,
          verify: null
        },
        scope: config.scopes,
        authHref: config.AUTH_BASE_URL + '/login/user',
        callback: window.location.origin + '/login/verify'
      }
    },
    methods: {
      random15 () {
        return Math.random().toString(36).substr(2, 16)
      },

      submit () {
        this.login = JSON.parse(localStorage.getItem('login'))
        this.login.verify = this.random15() + this.random15()
        localStorage.setItem('login', JSON.stringify(this.login))
      }
    }
  }
</script>
