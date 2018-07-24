<template>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class AppFooter extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
