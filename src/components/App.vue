<template>
    <v-app dark>
      <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
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
                  <v-flex xs12 md10 offset-md1>
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
    .menu__content {
        background: #303030;
    }
</style>

<script>
    export default {
        data: function() {
            return {
                user: []
            };
        },
    }
</script>
