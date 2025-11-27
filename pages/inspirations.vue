<template>
  <section class="max-w-6xl mx-auto px-6 py-16 space-y-10">
    <header class="space-y-3">
      <p class="text-sm uppercase tracking-[0.25em] text-charcoal/60">Inspirations</p>
      <h1 class="text-4xl font-display text-primary">Atmosphères et récits</h1>
      <p class="text-lg text-charcoal/80 leading-relaxed">
        Une sélection d'univers qui nourrissent la démarche Jord by Sandra : nature, lumière, matières et rencontres.
      </p>
    </header>
    <InspirationsGrid :items="items" />
  </section>
</template>

<script setup lang="ts">
import InspirationsGrid from '@/components/InspirationsGrid.vue'

const items = [
  {
    title: 'Aurores et indigos',
    description: 'Jeux d' + "'" + 'ombre et de lumière, palettes froides et éclats électriques pour insuffler du mystère.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Feu camp',
    description: 'Moments collectifs autour des flammes, récits partagés et silence vibrant.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Brume matinale',
    description: 'Textures douces, matières naturelles et respiration ample pour inviter à la contemplation.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Bois et pierre',
    description: 'Assemblages brut et raffiné, contrastes tactiles pour une expérience ancrée.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Eau calme',
    description: 'Rythmes lents, reflets et ondulations pour apaiser et aligner.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Forêt boréale',
    description: 'Sentiers humides, parfums résineux et clairières secrètes.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  }
]
</script>