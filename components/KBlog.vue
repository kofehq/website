<template>
  <div :class="$style['blog']">
    <k-center>
      <h3 :class="$style['blog-title']">Últimos posts</h3>
      <div :class="$style['blog-list']">
        <template v-for="(post, index) in posts">
          <div :key="index" :class="$style['blog-post']">
            <div :class="$style['blog-post-image-wrapper']">
              <img :src="post.image" alt="" :class="$style['blog-post-image']">
            </div>
            <div :class="$style['blog-post-content']">
              <h4 :class="$style['blog-post-title']">{{ post.title }}</h4>
              <div :class="$style['blog-post-description']">
                <p>{{ post.description }}</p>
              </div>
              <k-action
                type="button"
                color="primary"
              >
                Ler mais
              </k-action>
            </div>
          </div>

        </template>
      </div>
    </k-center>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'
import KAction from '@/components/KAction'

export default {
  components: {
    KCenter,
    KAction,
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
  font-weight: 200;
  font-size: 40px;
  line-height: 63px;
  letter-spacing: 0.5em;
  margin-bottom: 40px;
  text-transform: uppercase;
}

.blog-list {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.blog-post {
  border: 1px solid #F0E2BB;
  border-radius: 2px;
  position: relative;

  &:first-child {
    margin-right: 80px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -57px;
    bottom: 0;
    width: 57px;
    background: linear-gradient(180deg, #F0E2BB 0%, #F1E8EB 100%);
    border-radius: 2px;
  }
}

.blog-post-image-wrapper {
  height: 170px;
  overflow: hidden;
}

.blog-post-content {
  padding: 30px 75px;
}

.blog-post-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.2em;
  margin-bottom: 5px;
}

.blog-post-description {
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}
</style>
