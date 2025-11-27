<template>
  <article class="group relative overflow-hidden rounded-3xl bg-white border border-sand/60 shadow-soft p-6 flex flex-col gap-4">
    <div class="absolute inset-0 bg-gradient-to-br from-sand/40 via-white to-azure/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
    <div class="flex items-center justify-between gap-4 relative z-10">
      <div>
        <p class="text-xs uppercase tracking-[0.18em] text-azure">Signature</p>
        <h3 class="text-2xl font-display text-primary">{{ title }}</h3>
      </div>
      <span class="inline-flex items-center px-3 py-1 text-xs uppercase tracking-[0.15em] bg-sand text-primary rounded-full shadow-sm">
        PDF
      </span>
    </div>
    <p class="text-base leading-relaxed text-charcoal/90 relative z-10">{{ description }}</p>
    <ul class="space-y-2 text-charcoal/90 list-disc list-inside relative z-10">
      <li v-for="(item, idx) in bullets" :key="idx">{{ item }}</li>
    </ul>
    <div class="flex items-center justify-between pt-2 relative z-10">
      <div class="flex items-center gap-2 text-sm text-azure">
        <span class="h-2 w-2 rounded-full bg-azure" />
        Personnalisation totale
      </div>
      <a
          v-if="pdfUrl"
          :href="pdfUrl"
          class="btn btn-primary"
          download
      >
        Télécharger la brochure
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; description: string; bullets: string[]; pdfUrl?: string }>()
</script>