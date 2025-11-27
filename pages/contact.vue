<template>
  <section class="max-w-5xl mx-auto px-6 py-16 space-y-10">
    <header class="space-y-3">
      <p class="text-sm uppercase tracking-[0.25em] text-charcoal/60">Contact</p>
      <h1 class="text-4xl font-display text-primary">Écrire à Sandra</h1>
      <p class="text-lg text-charcoal/80 leading-relaxed">
        Partagez votre intention, une idée d'atelier ou un rêve de retraite. Chaque message reçoit une réponse attentive.
      </p>
    </header>
    <ContactForm />
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>