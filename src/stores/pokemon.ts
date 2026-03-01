import { defineStore } from 'pinia'

interface Pokemon {
  name: string
  url: string
}

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    results: [] as Pokemon[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async searchPokemon(name: string) {
      if (!name) {
        this.results = []
        return
      }

      try {
        this.loading = true
        this.error = null

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/pokemon/${name}`
        )

        if (!response.ok) {
          throw new Error('Error al buscar Pokémon')
        }

        this.results = await response.json()

      } catch (err: any) {
        this.error = err.message
        this.results = []
      } finally {
        this.loading = false
      }
    }
  }
})
