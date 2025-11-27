<template>
  <article class="bg-white rounded-3xl shadow-soft p-6 flex flex-col gap-4 border border-sand/60">
    <div class="flex items-center justify-between gap-4">
      <h3 class="text-2xl font-display text-primary">{{ title }}</h3>
      <span class="inline-flex items-center px-3 py-1 text-xs uppercase tracking-[0.15em] bg-sand text-primary rounded-full">
        Signature
      </span>
    </div>
    <p class="text-base leading-relaxed text-charcoal/90">{{ description }}</p>
    <ul class="space-y-2 text-charcoal/90 list-disc list-inside">
      <li v-for="(item, idx) in bullets" :key="idx">{{ item }}</li>
    </ul>
    <div class="flex items-center justify-end pt-2">
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