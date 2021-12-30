<template>
  <div :class="$style['blog']">
    <k-header-internal />
    <k-center>
      <div :class="$style['blog-list']">
        <template v-for="(post, index) in filterPosts">
          <k-blog-post :key="index" :post="post" :class="$style['blog-post']" />
        </template>
      </div>
      <div :class="$style['blog-actions']">
        <k-action
          v-if="showLoadMore"
          tag="button"
          color="primary"
          @click="loadMore"
        >
          Carregar mais
        </k-action>
      </div>

    </k-center>
  </div>
</template>

<script>
import KHeaderInternal from '@/components/KHeaderInternal'
import KCenter from '@/components/KCenter'
import KAction from '@/components/KAction'
import KBlogPost from '@/components/KBlogPost'
import head from '~/mixins/head'

export default {
  components: {
    KHeaderInternal,
    KCenter,
    KAction,
    KBlogPost,
  },

  mixins: [head],

  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'image', 'slug'])
      .sortBy('updatedAt')
      .fetch()

    return {
      posts,
    }
  },

  data () {
    return {
      limit: 10,
    }
  },

  head () {
    return {
      title: 'Kofe Design | Blog',
      meta: [
        ...this.meta,
      ]
    }
  },

  computed: {
    filterPosts () {
      return this.posts.slice(0, this.limit)
    },

    showLoadMore () {
      return this.posts.length > this.limit
    },
  },

  methods: {
    loadMore () {
      this.limit = this.limit + 10
    },
  },
}
</script>

<style lang="scss" module>
.blog-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 35px;
}

.blog-post {
  margin-bottom: 20px;
}

.blog-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}

@media (max-width: 1023px) {
  .blog-list {
    display: block;
  }
}
</style>
