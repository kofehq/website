<template>
  <div :class="$style['page']">
    <k-center>
      <k-menu @goTo="scrollToHash" />
    </k-center>
    <k-header />
    <main>
      <k-digital id="inicio" />
      <k-services id="servicos" />
      <k-projects id="projetos" :projects="projects" />
      <k-clients id="clientes" :clients="clients" />
      <k-zaman />
    </main>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'
import KMenu from '@/components/KMenu'
import KHeader from '@/components/KHeader'
import KServices from '@/components/KServices'
import KDigital from '@/components/KDigital'
import KProjects from '@/components/KProjects'
import KZaman from '@/components/KZaman'
import KClients from '@/components/KClients'
import head from '~/mixins/head'

export default {
  components: {
    KCenter,
    KMenu,
    KHeader,
    KServices,
    KDigital,
    KProjects,
    KZaman,
    KClients,
  },

  mixins: [head],

  async asyncData({ $content }) {
    const projects = await $content('projects')
      .only(['title', 'image', 'order'])
      .sortBy('order')
      .fetch()
    const clients = await $content('clients')
      .only(['title', 'image', 'order'])
      .sortBy('order')
      .fetch()

    return {
      projects,
      clients,
    }
  },

  head () {
    return {
      meta: [
        ...this.meta,
      ],
    }
  },

  mounted () {
    this.scrollToHash()
  },

  methods: {
    scrollToHash (hash) {
      const newHash = hash || this.$route.hash
      if (newHash) {
        document.querySelector(newHash).scrollIntoView({
          behavior: "smooth",
          block: 'start'
        })
      }
    }
  }
}
</script>

<style lang="scss" module>
.page {
  padding-top: 55px;
}

@media (max-width: 767px) {
  .page {
    padding-top: 30px;
  }
}
</style>
