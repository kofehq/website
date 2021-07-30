<template>
  <div :class="$style['page']">
    <k-center>
      <k-menu />
    </k-center>
    <k-header />
    <main>
      <k-digital />
      <k-services ref="servicos" />
      <k-design-sprint ref="design" />
      <k-highlights :highlights="highlights" />
      <k-testimonial :testimonials="testimonials" />
      <k-projects ref="projetos" :projects="projects" />
      <k-clients ref="clientes" :clients="clients" />
      <k-zaman />
      <k-blog ref="blog" :posts="posts" />
    </main>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'
import KMenu from '@/components/KMenu'
import KHeader from '@/components/KHeader'
import KServices from '@/components/KServices'
import KDigital from '@/components/KDigital'
import KDesignSprint from '@/components/KDesignSprint'
import KHighlights from '@/components/KHighlights'
import KTestimonial from '@/components/KTestimonial'
import KProjects from '@/components/KProjects'
import KZaman from '@/components/KZaman'
import KClients from '@/components/KClients'
import KBlog from '@/components/KBlog'

export default {
  components: {
    KCenter,
    KMenu,
    KHeader,
    KServices,
    KDigital,
    KDesignSprint,
    KHighlights,
    KTestimonial,
    KProjects,
    KZaman,
    KClients,
    KBlog,
  },

  async asyncData({ $content }) {
    const highlights = await $content('highlights')
      .only(['description', 'image', 'order'])
      .sortBy('order')
      .fetch()
    const testimonials = await $content('testimonial')
      .only(['name', 'company', 'content', 'image', 'order'])
      .sortBy('order')
      .fetch()
    const projects = await $content('projects')
      .only(['title', 'image', 'order'])
      .sortBy('order')
      .fetch()
    const clients = await $content('clients')
      .only(['title', 'image', 'order'])
      .sortBy('order')
      .fetch()
    const posts = await $content('blog')
      .only(['title', 'description', 'image', 'slug'])
      .sortBy('updatedAt')
      .limit(2)
      .fetch()

    return {
      highlights,
      testimonials,
      projects,
      posts,
      clients,
    }
  },

  watch: {
    '$route' () {
      this.scrollToHash()
    }
  },

  mounted () {
    this.scrollToHash()
  },

  methods: {
    scrollToHash () {
      if (this.$route.hash) {
      const hash = this.$route.hash.replace('#', '')
      const element = this.$refs[hash].$el
      const topPosition = element.getBoundingClientRect().top
  
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      })
    }
    }
  }
}
</script>

<style lang="scss" module>
.page {
  padding-top: 30px;
}
</style>
