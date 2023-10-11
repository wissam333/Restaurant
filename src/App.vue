<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <AppNavbar></AppNavbar>
  <router-view></router-view>
</template>
<style lang="scss" scoped></style>
