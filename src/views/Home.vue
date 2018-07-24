<template>
  <div class="home">
    <!-- <BrandBanner/> -->
    <WebApps/>
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import BrandBanner from '@/components/BrandBanner.vue';
import WebApps from '@/components/WebApps.vue';

@Component({
  components: {
    HelloWorld,
    WebApps,
  },
})
export default class Home extends Vue {}
</script>
