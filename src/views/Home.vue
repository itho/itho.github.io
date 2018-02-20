<template>
  <v-container grid-list-md>
    <v-layout row wrap text-xs-center>
      <v-flex xs12 sm4 v-for="(item, i) in items" :key="i">
        <v-card class="pa-3" style="height: 100%;">
          <v-card-text class="text-xs-center">
            <v-icon v-html="item.icon" x-large class="blue--text text--lighten-2"></v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div v-text="item.title" class="headline text-xs-center"></div>
          </v-card-title>
          <v-card-text v-text="item.text"></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Modern Designas', icon: 'color_lens', text: "Utilising modern and elegant component frameworks, we're able to build you the highest quality interfaces, regardless of your user's devices. Experienced in Google's Material Design philosophy as well as Twitter's Bootstrap web UI framework and many others." },
          { title: 'Fast development', icon: 'flash_on', text: "Personal contact time with our devs means that you're able to easily communicate exactly what it is you like, want and need. We're perfectionists also, so every project will be taken care of to the highest standard and in a time frame that meets your needs." },
          { title: 'Completely Customisable', icon: 'build', text: "It's your website, so it should look and feel exaclty how you want it to. Every aspect of the final result will be able to be tweaked just to your liking, and we'll ensure that the sites feel great to the touch." }
        ]
      }
    }
  }
</script>
