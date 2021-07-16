<template>
  <div :class="$style['page']">
    <k-header />
    <main :class="$style['main']">
      <k-services />
      <k-digital />
      <k-design-sprint :testimonials="testimonials" />
      <k-projects />
      <k-zaman />
      <k-clients />
      <k-blog :posts="posts" />
    </main>
    <k-footer />
  </div>
</template>

<script>
import KHeader from '@/components/KHeader'
import KServices from '@/components/KServices'
import KDigital from '@/components/KDigital'
import KDesignSprint from '@/components/KDesignSprint'
import KProjects from '@/components/KProjects'
import KZaman from '@/components/KZaman'
import KClients from '@/components/KClients'
import KBlog from '@/components/KBlog'
import KFooter from '@/components/KFooter'

export default {
  components: {
    KHeader,
    KServices,
    KDigital,
    KDesignSprint,
    KProjects,
    KZaman,
    KClients,
    KBlog,
    KFooter,
  },

  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'image', 'slug'])
      .sortBy('updatedAt')
      .limit(2)
      .fetch()
    const testimonials = await $content('testimonial')
      .only(['name', 'company', 'content', 'image', 'order'])
      .sortBy('order')
      .fetch()

    return {
      posts,
      testimonials,
    }
  }
}
</script>

<style lang="scss" module>
.page {}

.main {}
</style>
