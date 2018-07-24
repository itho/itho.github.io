<template>
  <section id="games" class="section">
    <div class="container">
      <h1 class="title has-text-light">{{ title }}</h1>
      <h2 class="subtitle has-text-light" v-html="description"></h2>
      <card-layout :items="games"/>
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
export default class Games extends Vue {
  private title: string = 'Games';
  private description: string = 'Web games written in <strong style="color: #f953c6;">JavaScript</strong> & mobile games in <strong style="color: #f953c6;">C#</strong> with Unity.';
  private games: any = [
    {
      title: 'Aurora',
      type: 'Android / iOS',
      description: 'Coming soon, this game is a challenging journey through the beauty of colour...',
      imageUrl: null,
      url: null,
    },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
