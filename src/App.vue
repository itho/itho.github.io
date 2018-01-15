<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      v-model="nav.drawer"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in nav.items"
          :key="i"
          exact
          :to="{name: item.route}">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="nav.drawer = !nav.drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'home'}">Home</v-btn>
        <v-btn flat :to="{name: 'about'}">About</v-btn>
        <v-btn flat :to="{name: 'portfolio'}">Portfolio</v-btn>
        <v-btn flat :to="{name: 'contact'}">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <poly-background/>
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
      
      <v-slide-x-transition mode="out-in">
        <router-view/>
      </v-slide-x-transition>
    </v-content>
    
    <v-footer app absolute>
      <span class="pl-2">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import PolyBackground from '@/components/Poly.vue'

  export default {
    components: {
      PolyBackground
    },
    data () {
      return {
        title: 'itho',
        nav: {
          drawer: false,
          items: [
            { title: 'Home', icon: 'home', route: 'home' },
            { title: 'About', icon: 'help', route: 'about' },
            { title: 'Portfolio', icon: 'list', route: 'portfolio' },
            { title: 'Contact', icon: 'feedback', route: 'contact' }
          ],
          mini: false,
          right: null
        }
      }
    }
  }
</script>
