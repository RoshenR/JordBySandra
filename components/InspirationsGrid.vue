<template>
  <section class="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
    <article
        v-for="(item, index) in items"
        :key="index"
        class="group bg-white rounded-3xl overflow-hidden border border-sand/60 shadow-soft flex flex-col hover:-translate-y-1 transition-transform duration-300"
    >
      <div class="relative h-52 overflow-hidden">
        <div
            class="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
            :style="{ backgroundImage: `url(${item.image})` }"
            role="img"
            :aria-label="item.title"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" aria-hidden="true" />
        <div class="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/85 text-xs uppercase tracking-[0.18em] text-primary">
          Moodboard
        </div>
      </div>
      <div class="p-6 space-y-3 flex-1 flex flex-col">
        <h3 class="text-xl font-display text-primary flex items-center gap-2">
          {{ item.title }}
          <span class="inline-flex h-2 w-2 rounded-full bg-azure" />
        </h3>
        <p class="text-charcoal/90 leading-relaxed flex-1">{{ item.description }}</p>
        <span class="text-xs uppercase tracking-[0.18em] text-azure">Nature • Brume • Feu</span>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
interface InspirationItem {
  title: string
  description: string
  image: string
}

const props = defineProps<{ items: InspirationItem[] }>()
</script>