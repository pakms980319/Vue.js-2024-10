<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/user">user</RouterLink>
    <RouterView />
  </nav>
</template>