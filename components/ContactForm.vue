<template>
  <form @submit.prevent="submit" class="bg-white rounded-3xl shadow-soft border border-sand/60 p-8 space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <label class="flex flex-col gap-2 text-sm uppercase tracking-[0.12em] text-charcoal/70">
        Nom complet
        <input
            v-model="form.name"
            type="text"
            required
            class="rounded-xl border border-sand/80 px-4 py-3 bg-sand/40 focus:border-primary focus:ring-primary focus:ring-2 outline-none"
            placeholder="Votre nom"
        />
      </label>
      <label class="flex flex-col gap-2 text-sm uppercase tracking-[0.12em] text-charcoal/70">
        Email
        <input
            v-model="form.email"
            type="email"
            required
            class="rounded-xl border border-sand/80 px-4 py-3 bg-sand/40 focus:border-primary focus:ring-primary focus:ring-2 outline-none"
            placeholder="vous@email.com"
        />
      </label>
    </div>
    <label class="flex flex-col gap-2 text-sm uppercase tracking-[0.12em] text-charcoal/70">
      Sujet
      <select
          v-model="form.subject"
          required
          class="rounded-xl border border-sand/80 px-4 py-3 bg-sand/40 focus:border-primary focus:ring-primary focus:ring-2 outline-none"
      >
        <option disabled value="">Sélectionner</option>
        <option>Coaching</option>
        <option>Atelier</option>
        <option>Conférence</option>
        <option>Autre</option>
      </select>
    </label>
    <label class="flex flex-col gap-2 text-sm uppercase tracking-[0.12em] text-charcoal/70">
      Message
      <textarea
          v-model="form.message"
          rows="6"
          required
          class="rounded-xl border border-sand/80 px-4 py-3 bg-sand/40 focus:border-primary focus:ring-primary focus:ring-2 outline-none"
          placeholder="Racontez votre projet..."
      />
    </label>
    <div class="flex items-center justify-between">
      <p class="text-sm text-charcoal/70">Réponse sous 48h ouvrées.</p>
      <button type="submit" class="btn btn-primary" :disabled="status === 'loading'">
        {{ status === 'loading' ? 'Envoi...' : 'Envoyer' }}
      </button>
    </div>
    <p v-if="status === 'success'" class="text-green-700 text-sm">Votre message a été envoyé. Merci !</p>
    <p v-if="status === 'error'" class="text-red-700 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

const submit = async () => {
  status.value = 'loading'
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form }
    })
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    status.value = 'error'
    console.error(error)
  }
}
</script>