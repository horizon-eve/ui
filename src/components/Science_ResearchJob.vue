<template>
<div class="col-sm-4 col-md-1" style="width: 11%">
  <h4 class="text-center">color</h4>

  <div class="user-header text-center">
    <img v-bind:src="`https://images.evetech.net/Character/${user.character_id}_128.jpg`" class="img-circle" alt="User Image">
    <a class="users-list-name" href="#">{{ character.name }}</a>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">Science: 1</span>
    <span class="users-list-date">Research: 2</span>
    <span class="users-list-date">Metallurgy: 3</span>
    <span class="users-list-date">Scientific Networking: 1</span>
    <span class="users-list-date">Advanced Industry: 1</span>
    <span class="users-list-date">Laboratory Operation: 4</span>
    <span class="users-list-date">Advanced Laboratory Operation: 5</span>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
  <div class="box-default margin-bottom">
    <span class="users-list-date">1600mm Steel Plates I Blueprint</span>
    <span class="users-list-date">Material Efficiency Research</span>
    <span class="users-list-date">Job Runs: 10</span>
    <span class="users-list-date">2D 12:56:30</span>
    <div class="progress progress-xs">
      <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import moment from 'moment'

export default {
  name: 'va-navibar',
  computed: {
    ...mapGetters([
      'user'
    ]),
    ...mapState([
      'character'
    ])
  },
  methods: {
    df (d) {
      return moment(d).format('MM/DD/YYYY hh:mm')
    }
  }
}

</script>

