<template>
  <section class="max-w-6xl mx-auto px-6 py-16 space-y-10">
    <header class="space-y-3">
      <p class="text-sm uppercase tracking-[0.25em] text-charcoal/60">Offres</p>
      <h1 class="text-4xl font-display text-primary">Créations sur-mesure</h1>
      <p class="text-lg text-charcoal/80 leading-relaxed">
        Coaching, ateliers et retraites pour révéler l'âme de votre projet avec douceur et audace.
      </p>
    </header>
    <div class="grid md:grid-cols-2 gap-6">
      <OfferCard
          title="Coaching sensible"
          description="Sessions individuelles pour clarifier votre intention, définir une esthétique et un déroulé expérientiel."
          :bullets="[
    'Diagnostic initial',
    'Direction artistique',
    'Livret d\'accompagnement'
  ]"
          pdf-url="/documents/coaching.pdf"
      />
      <OfferCard
          title="Atelier création"
          description="Une journée de co-création pour aligner votre équipe autour d'un récit commun."
          :bullets="[
    'Warm-up sensoriel',
    'Prototypage créatif',
    'Plan d\'action'
  ]"
          pdf-url="/documents/atelier.pdf"
      />
      <OfferCard
          title="Retraite créative"
          description="Trois jours en nature pour ouvrir le champ des possibles et nourrir l'inspiration."
          :bullets="['Lieu secret', 'Cérémonies autour du feu', 'Accompagnement individuel']"
          pdf-url="/documents/retraite.pdf"
      />
      <OfferCard
          title="Conférence inspirante"
          description="Un talk sensoriel sur le minimalisme poétique et la puissance de la lenteur."
          :bullets="['Storytelling visuel', 'Moments interactifs', 'Échanges Q&A']"
          pdf-url="/documents/conference.pdf"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import OfferCard from '@/components/OfferCard.vue'
</script>