<script setup lang="ts">
import pokemonState from '@/store/pokemonState';
</script>
<template>

  <div class="body-container">
    <FormKit label="Vacation" type="text" placeholder="Ej: Pikachu" />
  </div>
</template>
<style scoped>
.body-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>