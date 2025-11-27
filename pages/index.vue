<template>
  <div class="space-y-16 pb-16">
    <HeroSection
        title="Éveiller les sens, embrasser la nature"
        subtitle="Des expériences immersives où la brume, le feu et l'aurore se rencontrent pour révéler l'essence de votre projet."
        backgroundImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
    />

    <section class="max-w-6xl mx-auto px-6 space-y-8">
      <div class="space-y-3">
        <p class="text-sm uppercase tracking-[0.25em] text-charcoal/60">Manifesto</p>
        <h2 class="text-4xl font-display text-primary">Minimalisme poétique</h2>
        <p class="text-lg text-charcoal/80 leading-relaxed">
          Jord by Sandra imagine des espaces et expériences qui honorent la lenteur, la matière et le souffle du vivant. Une approche sensible qui unit design, accompagnement et inspiration.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 space-y-8">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-display text-primary">Offres signature</h2>
        <NuxtLink to="/offres" class="text-sm uppercase tracking-[0.18em] text-azure">Voir tout</NuxtLink>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <OfferCard
            title="Coaching sensible"
            description="Un accompagnement sur-mesure pour reconnecter votre projet à l'essentiel et révéler sa poésie."
            :bullets="['Écoute active et cadrage', 'Moodboards intuitifs', 'Feuille de route claire']"
            pdf-url="/documents/coaching.pdf"
        />
        <OfferCard
            title="Retraite créative"
            description="Une immersion entre terre et brume pour catalyser vos idées dans un cadre inspirant."
            :bullets="['Lieu secret en nature', 'Ateliers sensoriels', 'Moments feu de camp']"
            pdf-url="/documents/retraite.pdf"
        />
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-display text-primary">Inspirations</h2>
        <NuxtLink to="/inspirations" class="text-sm uppercase tracking-[0.18em] text-azure">Découvrir</NuxtLink>
      </div>
      <InspirationsGrid :items="inspirations" />
    </section>

    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <div class="rounded-3xl bg-primary text-sand p-10 md:p-12 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="space-y-3 max-w-2xl">
          <h2 class="text-3xl font-display">Prêt à créer ensemble ?</h2>
          <p class="text-lg text-sand/90">Partagez votre intention et imaginons une expérience sur-mesure.</p>
        </div>
        <NuxtLink to="/contact" class="btn btn-secondary border-sand">Écrire à Sandra</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const inspirations = [
  {
    title: 'Brume nordique',
    description: 'Palette douce, rythmes lents et textures organiques pour une immersion apaisante.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Feu intérieur',
    description: 'Chaleur maîtrisée, lueur dansante et récits autour des flammes.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Aurore boréale',
    description: 'Vibrations indigo et bleu électrique pour des moments suspendus.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  }
]
</script>