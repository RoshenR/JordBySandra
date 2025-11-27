<template>
  <section class="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal text-sand">
    <div
        class="absolute inset-0 bg-cover bg-center scale-105 blur-[1px]"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
        aria-hidden="true"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-primary/75 to-charcoal/85" aria-hidden="true"/>

    <div class="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-azure/20 blur-3xl" aria-hidden="true"/>
    <div class="absolute -right-24 bottom-10 w-72 h-72 rounded-full bg-electric/15 blur-3xl" aria-hidden="true"/>

    <div class="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
      <div class="space-y-6">
        <p class="inline-flex items-center gap-3 text-xs tracking-[0.28em] uppercase bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15">
          Travel planner sensible
          <span class="h-1 w-1 rounded-full bg-sand inline-block"/>
          Expéditions sur-mesure
        </p>
        <h1 class="text-5xl md:text-6xl leading-tight font-display drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-sand/90 leading-relaxed max-w-3xl">
          {{ subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
          <NuxtLink to="/offres" class="btn btn-primary shadow-lg shadow-primary/30">
            Explorer les itinéraires
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary border-sand/70 bg-white/10 backdrop-blur-sm">
            Co-créer mon voyage
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <p class="text-3xl font-display">80+</p>
            <p class="text-sm uppercase tracking-[0.12em] text-sand/80">Expériences orchestrées</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <p class="text-3xl font-display">4 continents</p>
            <p class="text-sm uppercase tracking-[0.12em] text-sand/80">Itinéraires immersifs</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <p class="text-3xl font-display">24/7</p>
            <p class="text-sm uppercase tracking-[0.12em] text-sand/80">Suivi concierge</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-br from-sand/15 via-white/5 to-primary/20 rounded-[30px] blur-3xl"
             aria-hidden="true"/>
        <div
            class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-6 shadow-soft space-y-6">
          <div class="flex items-center justify-between">
            <span
                class="px-3 py-1 rounded-full text-xs uppercase tracking-[0.18em] bg-sand/90 text-primary">Travel log</span>
            <span class="text-sm text-sand/80">Curation par Sandra</span>
          </div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-azure"/>
              <div>
                <p class="font-semibold text-lg">Escapade boréale</p>
                <p class="text-sand/80 text-sm">Cabane design en Laponie, sauna privé, chasse aux aurores
                  accompagnée.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-electric"/>
              <div>
                <p class="font-semibold text-lg">Route volcanique</p>
                <p class="text-sand/80 text-sm">Itinéraire slow entre sources chaudes, forêts de brume et tables
                  secrètes.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-sand"/>
              <div>
                <p class="font-semibold text-lg">Parenthèse littorale</p>
                <p class="text-sand/80 text-sm">Criques confidentielles, navigation douce et ateliers d'artisanat
                  local.</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-2">
            <p class="text-sm text-sand/80">Tous les voyages sont dessinés à partir de vos envies.</p>
            <NuxtLink to="/contact" class="text-sm uppercase tracking-[0.16em] text-azure">Parler à Sandra</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; subtitle: string; backgroundImage: string }>()
</script>