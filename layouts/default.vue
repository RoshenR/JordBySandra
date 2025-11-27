<template>
  <div class="min-h-screen flex flex-col bg-sand">
    <header class="w-full bg-primary text-sand shadow-soft sticky top-0 z-30">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <NuxtLink to="/" class="text-2xl font-display tracking-wide">Jord by Sandra</NuxtLink>
        <nav class="flex items-center gap-6 text-sm uppercase tracking-[0.08em]">
          <NuxtLink class="hover:text-sand/80" to="/a-propos">À propos</NuxtLink>
          <NuxtLink class="hover:text-sand/80" to="/offres">Offres</NuxtLink>
          <NuxtLink class="hover:text-sand/80" to="/inspirations">Inspirations</NuxtLink>
          <NuxtLink class="hover:text-sand/80" to="/contact">Contact</NuxtLink>
        </nav>
        <NuxtLink to="/contact" class="hidden sm:inline-flex btn btn-secondary border-sand/60 bg-white/10">Planifier un voyage</NuxtLink>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-charcoal text-sand py-10 mt-12">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
        <div class="space-y-3">
          <p class="text-lg font-display">Jord by Sandra</p>
          <p class="text-sm text-sand/80">Travel planner dédiée aux expériences immersives, entre nature et design.</p>
          <div class="flex items-center gap-4 text-sm">
            <NuxtLink to="/mentions-legales" class="hover:text-sand/80">Mentions légales</NuxtLink>
            <a href="mailto:contact@jordby.com" class="hover:text-sand/80">contact@jordby.com</a>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
          <div class="flex items-center gap-3 text-sm text-sand/80">
            <span class="h-2 w-2 rounded-full bg-azure" />
            Suivi personnalisé avant, pendant, après.
          </div>
          <NuxtLink to="/contact" class="btn btn-primary">Commencer</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>