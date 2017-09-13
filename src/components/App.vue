<template>
    <v-app light>
      <div id="poly"></div>
      <v-navigation-drawer temporary light :mini-variant.sync="nav.mini" v-model="nav.drawer" overflow>
        <v-list class="pt-0">
          <v-divider></v-divider>
          <v-list-tile v-for="item in nav.items" :key="item" :router="true" :to="{name: item.route}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed="true">
        <v-toolbar-title>itho</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="nav.drawer = !nav.drawer"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat :router="true" :to="{name: 'home'}">Home</v-btn>
          <v-btn flat :router="true" :to="{name: 'about'}">About</v-btn>
          <v-btn flat :router="true" :to="{name: 'portfolio'}">Portfolio</v-btn>
          <v-btn flat :router="true" :to="{name: 'contact'}">Contact</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <main>
        <section>
          <v-parallax src="assets/hero.jpeg" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <h1 class="white--text mb-2 display-3">itho</h1>
              <div class="headline mb-3 text-xs-center">Web &amp; Mobile Solutions.</div>
              <v-btn
                class="blue mt-5"
                dark
                large
                :to="{name: 'contact'}"
              >
                Get In Touch!
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <!-- <v-container fluid>
            <v-layout row>
                <v-flex xs12 md8 offset-md2>
                    <v-slide-x-transition mode="out-in">
                        <router-view></router-view>
                    </v-slide-x-transition>
                </v-flex>
            </v-layout>
        </v-container> -->

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
            class="white--bg"
          >
            <v-slide-x-transition mode="out-in">
                <router-view></router-view>
            </v-slide-x-transition>

            <!-- <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">The best way to start developing</h2>
                <span class="subheading">
                  Cras facilisis mi vitae nunc 
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Material Design</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Fast development</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Completely Open Sourced</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex> -->


          </v-layout>
        </section>

        <!-- <v-footer class="grey lighten-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="ml-3">
                Made with
                <v-icon class="teal--text">code</v-icon>
                by <a href="https://github.com/itho" target="_blank">itho</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer> -->
      </main>
      <v-footer class="grey lighten-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="ml-3">
                Made with
                <v-icon class="teal--text">code</v-icon>
                by <a href="https://github.com/itho" target="_blank">itho</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      <!-- <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>© {{ new Date().getFullYear() }}</div>
      </v-footer> -->
    </v-app>
</template>

<style>
  #poly {
    background: radial-gradient(ellipse at center, #292b37 40%, black 100%);
    background: #292b37;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }
  .menu__content {
      background: #303030;
  }
  .application--light {
    background: transparent;
  }
  .application--light .toolbar {
    /*background: rgba(255, 255, 255, 0.4);*/
  }
  .toolbar__title {
    margin-left: 20px;
    /*color: rgba(255,255,255,.87);*/
  }
  .toolbar__side-icon {
      margin-left: 20px !important;
  }
  .application--light .toolbar .btn {
    color: rgba(255,255,255,.87);
  }
  .application--light .toolbar .btn.btn--icon {
    color: rgba(255,255,255,.87);
  }
  aside > ul > li {
    padding-top: 20px;
  }
  .white--bg {
    background: rgba(255,255,255,1);
  }
</style>

<script>
  //import AppToolbar from './Toolbar.vue';

  export default {
    data: () => ({
      nav: {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', route: 'home' },
          { title: 'About', icon: 'help', route: 'about' },
          { title: 'Portfolio', icon: 'list', route: 'portfolio' },
          { title: 'Contact', icon: 'feedback', route: 'contact' }
        ],
        mini: false,
        right: null
      }
    })
    // components: {
    //   AppToolbar
    // }
  }
</script>
