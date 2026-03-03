<script lang="ts" setup>
import type { Pokemon } from '@/type/type'
import { computed } from 'vue'

const { pokemon } = defineProps<{
  pokemon: Pokemon
}>()

const formattedName = computed(() => {
  return pokemon.name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})
</script>

<template>
  <div class="card">
    <div class="image-container">
      <img :src="pokemon.image" :alt="pokemon.name" />
    </div>
    <p>{{ formattedName }}</p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.image-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.06);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
  border: 3px solid #f5d742;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
