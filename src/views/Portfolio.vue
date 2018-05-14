<template>
  <v-container grid-list-md pt-0>
    <v-layout row wrap text-xs-center>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">Projects</div>
          </v-card-title>
          <v-card-text class="pb-5">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex md4><img src="/static/img/mevn-boilerplate.png" style="height: 192px; width: auto;"/></v-flex>
                <v-flex md8 text-xs-left style="margin: auto;">
                  <div class="headline">mevn-boilerplate</div>
                  <a href="https://mevn-boilerplate.itho.co">mevn-boilerplate.itho.co</a>
                  <div><br>mevn-boilerplate is a full stack boilerplate for building progressive web apps in Vue.js with a MongoDB and Express JavaScript back-end.</div>
                </v-flex>

                <v-flex md4><img src="https://cryptotracker.itho.co/static/images/launcher-icon-192.png"/></v-flex>
                <v-flex md8 text-xs-left style="margin: auto;">
                  <div class="headline">CryptoTracker</div>
                  <a href="https://cryptotracker.itho.co">cryptotracker.itho.co</a>
                  <div><br>CryptoTracker is an asset management tool for cryptocurrencies written in Vue.js and using Google Firebase as an authenication and database platform.</div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
