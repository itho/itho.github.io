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
            
            <v-btn icon id="btn-twitter" href="https://twitter.com/ieuauauauauauan">
              <v-icon class="fab fa-twitter"></v-icon>
            </v-btn>
            <v-btn icon id="btn-linkedin" href="https://www.linkedin.com/in/ieuan-thomas-187a5576">
              <v-icon class="fab fa-linkedin"></v-icon>
            </v-btn>
            <v-btn icon id="btn-facebook" href="https://www.facebook.com/ieuan">
              <v-icon class="fab fa-facebook"></v-icon>
            </v-btn>
            <v-btn icon id="btn-google-plus" href="https://plus.google.com/u/0/111160770619114139671">
              <v-icon class="fab fa-google-plus"></v-icon>
            </v-btn>
            <v-btn icon id="btn-github" href="https://github.com/itho/">
              <v-icon class="fab fa-github"></v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .fab {
    font-size: 24pt;
    padding-left: 10px;
    padding-right: 10px;
    color: slategrey !important;
  }
  #btn-twitter:hover > div > i { color: #1da1f2 !important; }
  #btn-linkedin:hover > div > i { color: #007bb6 !important; }
  #btn-facebook:hover > div > i { color: #3b5998 !important; }
  #btn-google-plus:hover > div > i { color: #d34836 !important; }
  #btn-github:hover > div > i { color: #000000 !important; }
</style>
