<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <app-navbar/> -->
    <!-- <router-view/> -->

    <div id="flow">
      <span class="flow-1"></span>
      <span class="flow-2"></span>
      <span class="flow-3"></span>
    </div>

    <nav class="navbar is-transparent is-primary has-background-dark">
      <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
          <b>itho</b>
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <!-- <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div> -->

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Web Apps
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <a class="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Games
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <a class="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div>
          <a class="navbar-item" href="https://bulma.io/">
            Contact
          </a>
        </div>
      </div>
      </div>
    </nav>

    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            itho
          </h1>
          <h2 class="subtitle">
            Web app and game development
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title has-text-light">Web Apps</h1>
        <h2 class="subtitle has-text-light">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title has-text-light">Games</h1>
        <h2 class="subtitle has-text-light">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="/img/profile/background.jpg" alt="Background">
                </figure>
              </div>
              <div class="card-content" style="text-align: center;">
                <figure class="image" style="height: 60%; width: 60%; margin: auto; margin-top: -50%; margin-bottom: 15px; border: 3px solid white; border-radius: 50%;">
                  <img src="/img/profile/ieuan.jpg" alt="Ieuan Thomas" style="border-radius: 50%;">
                </figure>

                <p class="title is-8">Ieuan Thomas</p>
                <p class="subtitle is-6">@itho</p>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a href="#">#css</a>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <h1>Contact</h1>
            <ul>
              <li class="social-item">
                <svg class="social-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm32 1056v-436q-31 35-64 55-34 22-132.5 85t-151.5 99q-98 69-164 69t-164-69q-47-32-142-92.5t-142-92.5q-12-8-33-27t-31-27v436q0 40 28 68t68 28h832q40 0 68-28t28-68zm0-573q0-41-27.5-70t-68.5-29h-832q-40 0-68 28t-28 68q0 37 30.5 76.5t67.5 64.5q47 32 137.5 89t129.5 83q3 2 17 11.5t21 14 21 13 23.5 13 21.5 9.5 22.5 7.5 20.5 2.5 20.5-2.5 22.5-7.5 21.5-9.5 23.5-13 21-13 21-14 17-11.5l267-174q35-23 66.5-62.5t31.5-73.5z"/>
                </svg>
                <a class="social-link" href="mailto:contact@itho.co">contact@itho.co</a>
              </li>
              <li class="social-item">
                <svg class="social-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M647 1200q4-6-3-13-9-7-14-2-4 6 3 13 9 7 14 2zm-28-41q-5-7-12-4-6 4 0 12 7 8 12 5 6-4 0-13zm-41-40q2-4-5-8-7-2-8 2-3 5 4 8 8 2 9-2zm21 23q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2zm86 75q2-7-9-11-9-3-13 4-2 7 9 11 9 3 13-4zm42 3q0-8-12-8-10 0-10 8t11 8 11-8zm39-7q-2-7-13-5t-9 9q2 8 12 6t10-10zm642-317q0-212-150-362t-362-150-362 150-150 362q0 167 98 300.5t252 185.5q18 3 26.5-5t8.5-20q0-52-1-95-6 1-15.5 2.5t-35.5 2-48-4-43.5-20-29.5-41.5q-23-59-57-74-2-1-4.5-3.5l-8-8-7-9.5 4-7.5 19.5-3.5q6 0 15 2t30 15.5 33 35.5q16 28 37.5 42t43.5 14 38-3.5 30-9.5q7-47 33-69-49-6-86-18.5t-73-39-55.5-76-19.5-119.5q0-79 53-137-24-62 5-136 19-6 54.5 7.5t60.5 29.5l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26 57-9q29 74 5 136 53 58 53 137 0 57-14 100.5t-35.5 70-53.5 44.5-62.5 26-68.5 12q35 31 35 95 0 40-.5 89t-.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5zm256-480v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/>
                </svg>
                <a class="social-link" href="https://www.github.com/itho">GitHub</a>
              </li>
              <li class="social-item">
                <svg class="social-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"/>
                </svg>
                <a class="social-link" href="https://www.facebook.com/ieuan">Facebook</a>
              </li>
              <li class="social-item">
                <svg class="social-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/>
                </svg>
                <a class="social-link" href="https://www.linkedin.com/in/ieuan-thomas">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://itho.co">Ieuan Thomas</a>. The source code linked is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a> unless otherwise stated.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
// import AppNavbar from '@/components/Navbar.vue';
import { Component, Vue } from 'vue-property-decorator';

// @Component({
//   components: {
//     AppNavbar
//   },
// })
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

// html { background: #283048; }
// body { background: linear-gradient(90deg,#859398,#283048); }

html, body, #app {
  background: #252830;
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
top: -155vw;
left: -90vw;
border-radius: 90vw;
opacity: 0.6;
}
.flow-1 {
background: #3281ff;
-webkit-animation: rotating 20s linear infinite;
-moz-animation: rotating 20s linear infinite;
-ms-animation: rotating 20s linear infinite;
-o-animation: rotating 20s linear infinite;
animation: rotating 20s linear infinite;
}
.flow-2 {
background: #f442ee;
position: absolute;
-webkit-animation: rotating 15s linear infinite;
-moz-animation: rotating 15s linear infinite;
-ms-animation: rotating 15s linear infinite;
-o-animation: rotating 15s linear infinite;
animation: rotating 15s linear infinite;
}
.flow-3 {
background: #42eef4;
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
</style>
