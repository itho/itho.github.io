<template>
  <div id="app">
    <div id="flow">
      <span class="flow-1"></span>
      <span class="flow-2"></span>
      <span class="flow-3"></span>
    </div>

    <nav class="navbar is-transparent is-primary has-background-dark">
      <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://itho.co">
          <b>itho</b>
        </a>
        <!-- <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div> -->
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <!-- <div class="navbar-start">
          <a class="navbar-item" href="https://itho.co/">
            Home
          </a>
        </div> -->

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Web Apps
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <a @click="goTo('webapps')" class="navbar-item">
                Overview
              </a>
              <hr class="dropdown-divider">
              <a class="navbar-item" href="https://around.itho.co" target="_blank">
                Around
              </a>
              <a class="navbar-item" href="https://cryptotracker.itho.co" target="_blank">
                CryptoTracker
              </a>
              <a class="navbar-item" href="https://github.com/itho/hackerrank.js" target="_blank">
                HackerRank.js
              </a>
              <a class="navbar-item" href="https://github.com/itho/mevn-boilerplate" target="_blank">
                MEVN-boilerplate
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Games
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <a @click="goTo('games')" class="navbar-item">
                Overview
              </a>
              <hr class="dropdown-divider">
              <a class="navbar-item is-disabled has-text-grey-lighter" disabled>
                Aurora
              </a>
            </div>
          </div>
          <a @click="goTo('contact')" class="navbar-item">
            Contact
          </a>
        </div>
      </div>
      </div>
    </nav>

    <router-view/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          The source code linked is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a> unless otherwise stated.
        </p>
        <p>
          &copy; {{ new Date().getFullYear() }} itho.co
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AppFooter
  },
})
export default class App extends Vue {
  goTo (el: string) {
    var target = document.getElementById(el);
    if (target)
      animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 350, true);
  }
}

function animate(elem: any, style: any, unit: any, from: any, to: any, time: any, prop: any) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 10);
    if (prop) {
          elem[style] = from+unit;
    } else {
          elem.style[style] = from+unit;
    }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

// html { background: #283048; }
// body { background: linear-gradient(90deg,#859398,#283048); }

html, body, #app {
  background: #252830;
}

a {
  color: #87b1e3;
}

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.social-item {
  font-size: 14pt;
  padding: 10px;
}
.social-icon {
  fill: grey;
  width: 30px;
  height: auto;
  vertical-align: middle;
  margin-right: 10px;
}
.social-link {
  vertical-align: middle;
}

#flow span {
display: block;
width: 200vw;
height: 200vw;
position: absolute;
top: -150vw;
left: -85vw;
border-radius: 90vw;
opacity: 0.6;
}

// tablet
@media screen and (min-width: 769px) {
  #flow span {
    top: -125vw;
    left: -90vw;
  }
}
// desktop
@media screen and (min-width: 1000px) {
  #flow span {
    top: -150vw;
    left: -90vw;
  }
}
// widescreen
@media screen and (min-width: 1192px) {
  #flow span {
    top: -165vw;
    left: -85vw;
  }
}

.flow-1 {
background: #3281ff;
// background: #00B4DB;
-webkit-animation: rotating 20s linear infinite;
-moz-animation: rotating 20s linear infinite;
-ms-animation: rotating 20s linear infinite;
-o-animation: rotating 20s linear infinite;
animation: rotating 20s linear infinite;
}
.flow-2 {
background: #f442ee;
// background: #f953c6;
position: absolute;
-webkit-animation: rotating 15s linear infinite;
-moz-animation: rotating 15s linear infinite;
-ms-animation: rotating 15s linear infinite;
-o-animation: rotating 15s linear infinite;
animation: rotating 15s linear infinite;
}
.flow-3 {
background: #42eef4;
// background: #78ffd6;
position: absolute;
-webkit-animation: rotating 7s linear infinite;
-moz-animation: rotating 7s linear infinite;
-ms-animation: rotating 7s linear infinite;
-o-animation: rotating 7s linear infinite;
animation: rotating 7s linear infinite;
}
@-webkit-keyframes rotating {
from {
-ms-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-webkit-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
}
to {
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-o-transform: rotate(360deg);
transform: rotate(360deg);
}
}
@keyframes rotating {
from {
-ms-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-webkit-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
}
to {
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-o-transform: rotate(360deg);
transform: rotate(360deg);
}
}
.rotating {
-webkit-animation: rotating 2s linear infinite;
-moz-animation: rotating 2s linear infinite;
-ms-animation: rotating 2s linear infinite;
-o-animation: rotating 2s linear infinite;
animation: rotating 2s linear infinite;
}

.footer {
  background: #434857;
  color: whitesmoke;
}
</style>
