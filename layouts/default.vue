<template>
  <div class="min-h-screen flex flex-col bg-sand">
    <header class="w-full bg-primary text-sand shadow-soft">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-display tracking-wide">Jord by Sandra</NuxtLink>
        <nav class="flex items-center gap-6 text-sm uppercase tracking-[0.08em]">
          <NuxtLink class="hover:text-sand/80" to="/a-propos">À propos</NuxtLink>
          <NuxtLink class="hover:text-sand/80" to="/offres">Offres</NuxtLink>
          <NuxtLink class="hover:text-sand/80" to="/inspirations">Inspirations</NuxtLink>
          <NuxtLink class="hover:text-sand/80" to="/contact">Contact</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-charcoal text-sand py-8 mt-12">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p class="text-sm">© {{ new Date().getFullYear() }} Jord by Sandra. Tous droits réservés.</p>
        <div class="flex items-center gap-4 text-sm">
          <NuxtLink to="/mentions-legales" class="hover:text-sand/80">Mentions légales</NuxtLink>
          <a href="mailto:contact@jordby.com" class="hover:text-sand/80">contact@jordby.com</a>
        </div>
      </div>
    </footer>
  </div>
</template>