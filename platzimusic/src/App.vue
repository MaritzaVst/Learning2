<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Platzi Music
    h2 *TopList {{ selectedCountry }}*
    select(v-model='selectedCountry')
      option(v-for="option in options" :value="option.value") {{ option.name }}
    spinner(v-show='loading')
    ul(v-show="!loading")
      artist(v-for="artist in artists" v-bind:artist="artist" :key="artist.name")
</template>

<script>
  import Artist from './components/Artist.vue'
  import getArtists from './api'
  import Spinner from './components/Spinner.vue'


  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        options: [
          {name: 'España', value: 'spain'},
          {name: 'Perú', value: 'peru'},
          {name: 'Colombia', value: 'colombia'}
        ],
        selectedCountry: 'peru',
        artists: [],
        loading: true
      }
    },
    components: {
      Artist,
      Spinner
    },
    methods: {
      refreshArtist: function(){
        const self = this;
        this.loading = true
        getArtists(this.selectedCountry)
        .then(function(artists){
          self.artists = artists
          self.loading = false
        })
      }
    },
    mounted: function() {
      this.refreshArtist()
    },
    watch: {
      selectedCountry: function(){
        this.refreshArtist()
      }
    }
  }
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

  h1, h2
    font-weight normal
  
  h2
    font-size 18px
  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983
</style>
