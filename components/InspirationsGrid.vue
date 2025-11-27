<template>
  <section class="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
    <article
        v-for="(item, index) in items"
        :key="index"
        class="bg-white rounded-3xl overflow-hidden border border-sand/60 shadow-soft flex flex-col"
    >
      <div
          class="h-48 bg-cover bg-center"
          :style="{ backgroundImage: `url(${item.image})` }"
          role="img"
          :aria-label="item.title"
      />
      <div class="p-6 space-y-3 flex-1 flex flex-col">
        <h3 class="text-xl font-display text-primary">{{ item.title }}</h3>
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