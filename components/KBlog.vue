<template>
  <div>
    <k-center>
      <h3 :class="$style['blog-title']">Últimos posts</h3>
      <div :class="$style['blog-list']">
        <template v-for="(post, index) in posts">
          <div :key="index" :class="$style['blog-item']" data-aos="fade-up" :data-aos-delay="`${200 * index}`">
            <k-blog-post :post="post" />
          </div>
        </template>
      </div>
      <div v-if="posts.length > 2" :class="$style['blog-actions']" data-aos="fade-up">
        <k-action
          tag="nuxt-link"
          color="primary"
          :to="{
            name: 'blog',
          }"
        >
          Ver todos
        </k-action>
      </div>

    </k-center>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'
import KAction from '@/components/KAction'
import KBlogPost from '@/components/KBlogPost'

export default {
  components: {
    KCenter,
    KAction,
    KBlogPost,
  },

  props: {
    posts: {
      type: Array,
      default: () => ([])
    },
  },
}
</script>

<style lang="scss" module>
.blog-title {
  font-size: 30px;
  font-weight: 200;
  line-height: 38px;
  letter-spacing: 0.2em;
  margin-bottom: 45px;
  text-align: center;
  text-transform: uppercase;
}

.blog-list {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.blog-item {
  flex: 1;
  max-width: calc(50% - 20px);

  &:first-child {
    margin-right: 20px;
  }
}

.blog-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}

@media (max-width: 1023px) {
  .blog-list {
    flex-direction: column;
    align-items: center;
  }

  .blog-item {
    max-width: none;

    &:first-child {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
}
</style>
