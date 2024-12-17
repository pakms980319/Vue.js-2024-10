<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterView name="header" />
    <RouterView />
    <RouterView name="footer" />
  </nav>
</template>