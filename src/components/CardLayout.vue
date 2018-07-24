<template>
  <div class="columns is-multiline">
    <div v-for="(item, i) in items" :key="i" class="column is-6">
      <article @click="open(item.url)" class="button is-light card media" style="height: auto; white-space: inherit; padding: 15px;">
        <figure class="media-left">
          <p v-if="item.imageUrl" class="image is-128x128">
            <img :src="item.imageUrl">
          </p>
          <p v-else class="image is-128x128" style="text-align: center; line-height: 128px; font-weight: 800; color: grey;">
            coming soon...
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ item.title }}</strong><br>
              <small>{{ item.type }}</small>
              <br>
              {{ item.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
    <div id="coming-soon">
      <div class="notification is-info">
        <!-- <button class="delete"></button> -->
        Coming soon...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Item {
  title: string
  type: string
  description: string
  imageUrl: string
  url: string
}

@Component
export default class CardLayout extends Vue {
  @Prop() items!: Item[]

  open (url: string) {
    if (url) {
      window.open(url);
    } else {
      let toast = document.getElementById('coming-soon');
      if (toast) {
        toast.classList.toggle('is-active');
        setTimeout(function(){ if (toast) toast.classList.toggle('is-active'); }, 3000);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#coming-soon {
  visibility: hidden;
  opacity: 0;
  width: 100%;
  position: fixed;
  bottom: 15px;
  left: 0;
  z-index: 100;
  transition: visibility 0s, opacity 0.5s linear;
}
#coming-soon.is-active {
  visibility: visible;
  opacity: 1;
}
#coming-soon .notification {
  // margin: auto;
  margin-left: 15px;
  padding: 0.75rem 1.5rem .75rem 1.5rem;
  width: 250px;
}
</style>
