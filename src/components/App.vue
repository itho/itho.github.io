<template>
    <v-app light>
      <div id="poly"></div>
      <app-toolbar></app-toolbar>
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
</style>

<script>
  import AppToolbar from './Toolbar.vue';

  export default {
      components: {
          AppToolbar
      }
  }
</script>
