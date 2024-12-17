<script setup>
  import { RouterLink, RouterView } from 'vue-router';

  // product/1, product/2, product/3 (동적 경로 매핑)
</script>
<template>
    <nav>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink> <br />
      <RouterLink :to="{ name : 'About' }">About</RouterLink> <br />
      <RouterLink :to="{ name : 'Product', params : { id : 1 }, query : { lang : 'ko' } }">Product</RouterLink>
    </nav>
    <RouterView />
</template>