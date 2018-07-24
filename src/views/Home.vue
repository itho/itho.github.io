<template>
  <div class="home">
    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            itho
          </h1>
          <h2 class="subtitle" style="color: darkorange; mix-blend-mode: exclusion;">
            Web app &amp; game development
          </h2>
        </div>
      </div>
    </section>

    <web-apps/>
    <games/>
    <contact-us/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WebApps from '@/components/WebApps.vue';
import Games from '@/components/Games.vue';
import ContactUs from '@/components/ContactUs.vue';

@Component({
  components: {
    WebApps,
    Games,
    ContactUs,
  },
})
export default class Home extends Vue {}
</script>
