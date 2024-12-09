<script>
  import MixLayout from './components/MixLayout.vue';
  export default {
    components: {
      MixLayout,
    },
  }
</script>
<template>
  <MixLayout>
    <template #header>
      <header>
        <h1>Header</h1>
      </header>
    </template>
    <!-- Default -->
    <main>
      <h1>Main</h1>
    </main>
    <template #footer>
      <footer>
        <h1>Footer</h1>
      </footer>
    </template>
  </MixLayout>
</template>