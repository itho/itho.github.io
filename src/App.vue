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
      <v-container fluid>
        <v-slide-x-transition mode="out-in">
          <!-- <v-layout column align-center>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout> -->
          <router-view/>
        </v-slide-x-transition>
      </v-container>
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
