<template>
  <div>
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
    <v-flex xs12 class="my-3">
      <div class="text-xs-center">
        <h2 class="headline" style="padding-top: 20px;">Simple and Modern Websites.</h2>
        <!-- <span class="subheading">
          Cras facilisis mi vitae nunc 
        </span> -->
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
                <div class="headline text-xs-center">Modern Design</div>
              </v-card-title>
              <v-card-text>
                Utilising modern and elegant component frameworks, we're able to build you the highest quality interfaces, regardless of your user's devices.
                Experienced in Google's Material Design philosophy as well as Twitter's Bootstrap web UI framework and many others.
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
                Personal contact time with our devs means that you're able to easily communicate exactly what it is you like, want and need.
                We're perfectionists also, so every project will be taken care of to the highest standard and in a time frame that meets your needs.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Completely Customisable</div>
              </v-card-title>
              <v-card-text>
                It's your website, so it should look and feel exaclty how you want it to.
                Every aspect of the final result will be able to be tweaked just to your liking, and we'll ensure that the sites feel great to the touch.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </div>
</template>

<style></style>

<script></script>