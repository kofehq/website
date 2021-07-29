<template>
  <div>
    <k-header />
    <main>
      <k-digital />
      <k-services />
      <k-design-sprint />
      <k-highlights :highlights="highlights" />
      <k-testimonial :testimonials="testimonials" />
      <k-projects :projects="projects" />
      <k-clients :clients="clients" />
      <k-zaman />
      <k-blog :posts="posts" />
    </main>
  </div>
</template>

<script>
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
  }
}
</script>
