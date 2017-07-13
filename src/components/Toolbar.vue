<template>
  <v-toolbar fixed="true">
    <v-toolbar-title>itho</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :router="true" :to="{name: 'home'}">Home</v-btn>
      <v-btn flat :router="true" :to="{name: 'about'}">About</v-btn>
      <v-btn flat :router="true" :to="{name: 'portfolio'}">Portfolio</v-btn>
      <v-btn flat :router="true" :to="{name: 'contact'}">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
  .application--light .toolbar {
    background: rgba(255, 255, 255, 0.4);
  }
  .toolbar__title {
    margin-left: 20px;
    color: rgba(255,255,255,.87);
  }
  .toolbar__side-icon {
      margin-left: 20px !important;
  }
  .application--light .toolbar .btn {
    color: rgba(255,255,255,.87);
  }
</style>

<script></script>
