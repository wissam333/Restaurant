<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <AppNavbar></AppNavbar>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
<style lang="scss" scoped></style>
