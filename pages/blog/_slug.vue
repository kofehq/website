<template>
  <k-center>
    <div :class="$style['post']">
      <k-action
        tag="nuxt-link"
        :to="{ name: 'index' }"
        :class="$style['post-back']"
      >
        <img src="@/assets/back.svg" alt="Voltar" />
      </k-action>
      <k-svg
        name="logo"
        :class="$style['logo']"
      />
      <div :class="$style['post-content-wrapper']">
        <div :class="$style['post-image-wrapper']">
          <img :src="post.image" :class="$style['post-image']" />
        </div>
        <div :class="$style['post-content']">
          <h1 :class="$style['post-title']">{{ post.title }}</h1>
          <div :class="$style['post-body']">
            <nuxt-content :document="post" />
          </div>
        </div>

      </div>
    </div>
  </k-center>
</template>

<script>
import KCenter from '@/components/KCenter'
import KSvg from '@/components/KSvg'
import KAction from '@/components/KAction'

export default {
  components: {
    KCenter,
    KSvg,
    KAction,
  },

  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .where({ slug: params.slug })
      .fetch()

    return {
      post: posts[0],
    }
  }
}
</script>

<style lang="scss" module>
.post {
  padding-top: 80px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 220px;
    left: 0;
    height: 520px;
    width: 57px;
    background: linear-gradient(180deg, #F0E2BB 0%, #F1E8EB 100%), #F0E2BB;
    border-radius: 2px;
  }
}

.logo {
  width: 61px;
  height: 40px;
  margin-left: 35px;
  margin-bottom: 100px;
}

.post-back {
  position: absolute;
  top: 165px;
  left: -28px;
}

.post-content-wrapper {
  border: 1px solid #F0E2BB;
  border-radius: 2px;
  padding-bottom: 100px;
}

.post-image-wrapper {
  height: 300px;
  overflow: hidden;
  margin-bottom: 55px;
  margin-top: -55px;
}

.post-image {
  height: 100%;
  width: auto;
  display: block;
  margin: 0 auto;
}

.post-content {
  max-width: 800px;
  margin: 0 auto;
}

.post-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 63px;
  letter-spacing: 0.2em;
  margin-bottom: 25px;
}

.post-body {
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.1em;

  p {
    margin-bottom: 20px;
  }
}
</style>
