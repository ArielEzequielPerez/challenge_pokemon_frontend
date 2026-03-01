import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonName: ref(''),
    result: [],
  }),
  actions:{
    async searchPokemon(name: string){
      this.pokemonName = name.toLowerCase().trim()
      this.result = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`);
    },

    reset(){
      this.pokemonName = ''
      this.result = []
    }
  },
})
