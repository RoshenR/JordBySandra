<template>
  <section class="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-charcoal text-sand">
    <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
        aria-hidden="true"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-primary/70 to-charcoal/80" aria-hidden="true" />
    <div class="relative max-w-5xl mx-auto px-6 py-20 text-center space-y-8">
      <p class="text-sm tracking-[0.25em] uppercase text-sand/80">Immersion naturelle</p>
      <h1 class="text-5xl md:text-6xl leading-tight">{{ title }}</h1>
      <p class="text-lg md:text-xl text-sand/90 leading-relaxed max-w-3xl mx-auto">{{ subtitle }}</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
        <NuxtLink to="/offres" class="btn btn-primary">Explorer les offres</NuxtLink>
        <NuxtLink to="/contact" class="btn btn-secondary">Rencontrer Sandra</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; subtitle: string; backgroundImage: string }>()
</script>