<template>
  <div class="space-y-16 pb-16">
    <HeroSection
        title="Éveiller les sens, tracer des voyages sur-mesure"
        subtitle="Travel planner dédiée aux âmes curieuses : des itinéraires immersifs qui marient nature, design et rencontres confidentielles."
        backgroundImage="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80"
    />

    <section class="max-w-6xl mx-auto px-6 space-y-10">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div class="space-y-3 max-w-2xl">
          <p class="text-sm uppercase tracking-[0.25em] text-charcoal/60">Manifesto</p>
          <h2 class="text-4xl font-display text-primary">Minimalisme poétique</h2>
          <p class="text-lg text-charcoal/80 leading-relaxed">
            Jord by Sandra imagine des voyages qui honorent la lenteur, la matière et le souffle du vivant. Chaque itinéraire est co-créé avec vous, rythmé par des adresses sensibles, des artisans et des paysages brumeux.
          </p>
        </div>
        <div class="bg-white rounded-3xl shadow-soft border border-sand/70 p-6 grid sm:grid-cols-2 gap-4 w-full lg:max-w-md">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.16em] text-azure">Approche</p>
            <p class="text-xl font-display text-primary">Design & Care</p>
            <p class="text-sm text-charcoal/70">Moodboards, carnet de route, concierge discret.</p>
          </div>
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.16em] text-azure">Rythme</p>
            <p class="text-xl font-display text-primary">Slow & Intense</p>
            <p class="text-sm text-charcoal/70">Moments phares et respirations choisies.</p>
          </div>
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.16em] text-azure">Engagement</p>
            <p class="text-xl font-display text-primary">Local & Humain</p>
            <p class="text-sm text-charcoal/70">Rencontres, circuits courts, immersion.</p>
          </div>
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.16em] text-azure">Sur-mesure</p>
            <p class="text-xl font-display text-primary">Intuitif</p>
            <p class="text-sm text-charcoal/70">Votre récit devient la ligne directrice.</p>
          </div>
        </div>
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
            description="Un accompagnement sur-mesure pour reconnecter votre projet voyage à l'essentiel et révéler sa poésie."
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

    <section class="max-w-6xl mx-auto px-6 space-y-8">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-display text-primary">Processus sur-mesure</h2>
        <span class="text-sm uppercase tracking-[0.18em] text-charcoal/60">De l'intention à l'itinéraire</span>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-3xl border border-sand/70 p-6 shadow-soft space-y-3">
          <p class="text-xs uppercase tracking-[0.16em] text-azure">Étape 1</p>
          <h3 class="text-xl font-display text-primary">Immersion</h3>
          <p class="text-charcoal/80">Appel d'intention, sélection des envies, inspirations visuelles et sensorielles.</p>
        </div>
        <div class="bg-white rounded-3xl border border-sand/70 p-6 shadow-soft space-y-3">
          <p class="text-xs uppercase tracking-[0.16em] text-azure">Étape 2</p>
          <h3 class="text-xl font-display text-primary">Design</h3>
          <p class="text-charcoal/80">Moodboard, itinéraire détaillé, adresses confidentielles, pré-réservations.</p>
        </div>
        <div class="bg-white rounded-3xl border border-sand/70 p-6 shadow-soft space-y-3">
          <p class="text-xs uppercase tracking-[0.16em] text-azure">Étape 3</p>
          <h3 class="text-xl font-display text-primary">Accompagnement</h3>
          <p class="text-charcoal/80">Conciergerie discrète, ajustements live, carnet numérique partagé.</p>
        </div>
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