<template>
  <v-container grid-list-md pt-0>
    <v-layout row wrap text-xs-center>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">Technologies</div>
          </v-card-title>
          <v-card-text>
            <p>We love to use the latest technologies to create the most beautiful responsive web and mobile applications.</p>
            <p class="showcase">
              <!-- <a href="https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5"><img src="/static/img/logo-html5.png"/></a> -->
              <a href="https://laravel.com/"><img src="https://camo.githubusercontent.com/5ceadc94fd40688144b193fd8ece2b805d79ca9b/68747470733a2f2f6c61726176656c2e636f6d2f6173736574732f696d672f636f6d706f6e656e74732f6c6f676f2d6c61726176656c2e737667"/></a>
              <a href="https://nodejs.org/en/"><img src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667"/></a>
              <a href="https://vuejs.org/"><img src="https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67"/></a>
            </p>
          </v-card-text>
          <!-- <v-card-title primary-title class="layout justify-center">
            <div class="headline">Where we're based...</div>
          </v-card-title> -->
          <!-- <v-card-text>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d79473.8928119943!2d-0.12860972962646747!3d51.50295699610249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1499893471149" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </v-card-text> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .showcase > a > img {
    height: 80px;
    width: auto;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
