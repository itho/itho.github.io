<template>
  <v-app>
    <v-toolbar app fixed>
      <v-toolbar-title @click="$vuetify.goTo(0)" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="$vuetify.goTo('#about', {offset: -100})">About</v-btn>
        <v-btn flat @click="$vuetify.goTo('#portfolio', {offset: -100})">Portfolio</v-btn>
        <v-btn flat @click="$vuetify.goTo('#contact')">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content v-scroll="onScroll">
      <poly-background/>

      <v-container fluid>
        <v-layout>
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
            <v-jumbotron height="450px">
              <v-container fill-height>
                <v-layout align-center text-xs-center white--text>
                  <v-flex>
                    <h3 class="display-3">itho</h3>
                    <span class="subheading">Web &amp; Mobile Development.</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-jumbotron>

            <home-view id="home"/>
            <about-view id="about"/>
            <portfolio-view id="portfolio"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
    <v-fab-transition>
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="accent"
        v-show="offsetTop > 100"
        @click="$vuetify.goTo(0)"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>

    <!-- <v-footer app absolute>
      <v-spacer/>
      <span class="pl-2">&copy; {{ new Date().getFullYear() }} itho.co</span>
      <v-spacer/>
    </v-footer> -->

    <v-footer app absolute id="contact">
      <v-layout row wrap ma-0>
        <v-flex xs12 sm3 pa-4 dark white--text style="background: #5B647F;">
          <v-list dense class="transparent white--text">
            <v-list-tile avatar v-for="item in socials" :key="item.title" :href="item.url">
              <v-list-tile-action>
                <v-icon v-html="item.icon" color="white"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex xs12 sm3 pa-4 dark white--text style="background: #404964;">
          <!-- <h3>Please feel free to get in contact...<br></h3> -->
          <v-list dense class="transparent white--text">
            <v-list-tile avatar href="mailto:contact@itho.co">
              <v-list-tile-action>
                <v-icon color="white">email</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>contact@itho.co</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex xs12 hidden-xs-only sm3 pa-4 dark white--text style="background: #404964;">&nbsp;</v-flex>
        <v-flex xs12 hidden-xs-only sm3 pa-4 dark white--text style="background: #404964;">&nbsp;</v-flex>
        <v-flex xs12 text-xs-center pa-3 dark white--text style="background: #283048;">
          <span class="pl-2">&copy; {{ new Date().getFullYear() }} itho.co</span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style>
  body,
  .theme--light .toolbar,
  .application .theme--light.toolbar {
    background-color: ghostwhite;
  }
  .transparent {
    background: inherit;
    background-color: inherit;
  }
  .theme--light .card,
  .application .theme--light.card {
    background-color: rgba(255,255,255,0.75);
  }
  #portfolio {
    margin-bottom: 200px;
  }
</style>

<script>
  import HomeView from '@/views/Home'
  import AboutView from '@/views/About'
  import PortfolioView from '@/views/Portfolio'
  import ContactView from '@/views/Contact'
  import PolyBackground from '@/components/Poly.vue'

  export default {
    components: {
      HomeView,
      AboutView,
      PortfolioView,
      ContactView,
      PolyBackground
    },
    data () {
      return {
        title: 'itho',
        offsetTop: 0,
        socials: [
          { title: 'GitHub', url: 'https://www.github.com/itho/', icon: 'fa-github' },
          { title: 'Facebook', url: 'https://www.facebook.com/ieuan', icon: 'fa-facebook' },
          { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ieuan-thomas-187a5576', icon: 'fa-linkedin' }
        ]
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    }
  }
</script>
