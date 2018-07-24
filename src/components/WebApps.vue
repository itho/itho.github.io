<template>
  <section id="webapps" class="section">
    <div class="container">
      <h1 class="title has-text-light">{{ title }}</h1>
      <h2 class="subtitle has-text-light" v-html="description"></h2>
      <card-layout :items="webapps"/>
    </div>
  </section>
</template>

<script lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    CardLayout,
  },
})
export default class WebApps extends Vue {
  private title: string = 'Web Apps';
  private description: string = 'A range of simple utilities to complex proof of concepts & progressive web apps.';
  private webapps: any = [
    {
      title: 'Around',
      type: 'Web / Mobile (PWA)',
      description: 'A truly social network for discovering what\'s around you.',
      imageUrl: 'https://around.itho.co/static/img/icons/android-chrome-192x192.png',
      url: 'https://around.itho.co',
    },
    {
      title: 'CryptoTracker',
      type: 'Web / Mobile (PWA)',
      description: 'A Vue.js project to track and manage crypto investments.',
      imageUrl: 'https://cryptotracker.itho.co/static/images/launcher-icon-192.png',
      url: 'https://cryptotracker.itho.co',
    },
    {
      title: 'HackerRank.js',
      type: 'Web / Local',
      description: 'A JavaScript framework for running HackerRank challenges on your local machine.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
      url: 'https://github.com/itho/hackerrank.js',
    },
    {
      title: 'MEVN-Boilerplate',
      type: 'Web / Local',
      description: 'MongoDB, Express, Vue.js & Node.js boilerplate for bootstrapping PWA development.',
      imageUrl: 'https://itho.co/img/icons/mevn-boilerplate.png',
      url: 'https://github.com/itho/mevn-boilerplate',
    },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
