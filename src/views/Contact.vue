<template>
  <v-container fluid>
    <v-layout row wrap text-xs-center>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">Contact us...</div>
          </v-card-title>
          <v-card-text>
            <p>Professional web and cross platform mobile development.<br>
            Please get in contact if you would like to discuss any opportunities.</p>
            <p>Email: <a href="mailto:contact@itho.co">contact@itho.co</a></p>
            
            <v-btn id="twitter" icon href="https://twitter.com/ieuauauauauauan">
              <v-icon>fa-twitter</v-icon>
            </v-btn>
            <v-btn id="linkedin" icon href="https://www.linkedin.com/in/ieuan-thomas-187a5576">
              <v-icon>fa-linkedin</v-icon>
            </v-btn>
            <v-btn id="facebook" icon href="https://www.facebook.com/ieuan">
              <v-icon>fa-facebook</v-icon>
            </v-btn>
            <v-btn id="google-plus" icon href="https://plus.google.com/u/0/111160770619114139671">
              <v-icon>fa-google-plus</v-icon>
            </v-btn>
            <v-btn id="github" icon href="https://github.com/itho/">
              <v-icon>fa-github</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .btn {
    color: slategrey !important;
  }
  #twitter:hover > div > i { color: #1da1f2 !important; }
  #linkedin:hover > div > i { color: #007bb6 !important; }
  #facebook:hover > div > i { color: #3b5998 !important; }
  #google-plus:hover > div > i { color: #d34836 !important; }
  #github:hover > div > i { color: #000000 !important; }
</style>
