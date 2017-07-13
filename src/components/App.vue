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
          <v-container fluid>
              <v-layout row>
                  <v-flex xs12 md8 offset-md2>
                      <v-slide-x-transition mode="out-in">
                          <router-view></router-view>
                      </v-slide-x-transition>
                  </v-flex>
              </v-layout>
          </v-container>
      </main>
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
    background: rgba(255, 255, 255, 0.4);
  }
  .toolbar__title {
    margin-left: 20px;
    color: rgba(255,255,255,.87);
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
