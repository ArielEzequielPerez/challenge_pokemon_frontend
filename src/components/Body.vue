<script setup lang="ts">
import { usePokemonStore } from '@/stores/usePokemonStore'
import { ref, watch } from 'vue'
import Card from './Card.vue'
import type { Pokemon } from '@/type/type'

const store = usePokemonStore()

const search = ref('')
let timeout: ReturnType<typeof setTimeout>

watch(search, (newValue) => {
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    store.searchPokemon(newValue.trim().toLowerCase())
  }, 400)
})
</script>
<template>
  <div class="body-container">
    <div class="card">
      <h2>Buscar Pokémon</h2>
      <FormKit
        type="text"
        name="pokemon"
        placeholder="Ej: Pikachu"
        v-model="search"
      />
    </div>
    <div class="pokemon-grid">
      <Card v-for="pokemon in store.results" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
</template>
<style scoped>
.body-container {
  flex: 1;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #e4e8f0);
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

:deep(.formkit-input) {
  border-radius: 8px;
  padding: 0.7rem;
  border: 1px solid #ddd;
  transition: 0.2s;
}

:deep(.formkit-input:focus) {
  border-color: #ef5350;
  box-shadow: 0 0 0 3px rgba(239, 83, 80, 0.2);
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 1rem;
}
</style>
