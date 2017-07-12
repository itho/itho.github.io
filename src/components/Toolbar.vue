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
  .toolbar__side-icon {
      margin-left: 20px !important;
  }
</style>

<script></script>
