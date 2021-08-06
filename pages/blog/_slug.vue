<template>
  <div :class="$style['post']">
    <k-header-internal back @back="$router.push({ name: 'blog' })" />
    <k-center>
      <div :class="$style['post-content-wrapper']">
        <div :class="$style['post-image-wrapper']">
          <img :src="post.image" alt="Imagem do post" :class="$style['post-image']" loading="lazy" />
        </div>
        <div :class="$style['post-content']">
          <h1 :class="$style['post-title']">{{ post.title }}</h1>
          <div :class="$style['post-body']">
            <nuxt-content :document="post" />
          </div>
        </div>
      </div>
    </k-center>
  </div>
</template>

<script>
import KHeaderInternal from '@/components/KHeaderInternal'
import KCenter from '@/components/KCenter'

export default {
  components: {
    KHeaderInternal,
    KCenter,
  },

  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .where({ slug: params.slug })
      .fetch()

    return {
      post: posts[0],
    }
  },

  head () {
    const facebookMeta = [
      {
        hid: 'og:title',
        property: 'og:title',
        content: this.post.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.post.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.post.image,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: this.$route.fullPath,
      },
    ]

    const twitterMeta = [
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.post.description,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.post.image,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ]

    return {
      title: `Kofe Design | ${this.post.title}`,
      meta: [
        ...facebookMeta,
        ...twitterMeta,
      ],
    }
  },
}
</script>

<style lang="scss" module>
.post-content-wrapper {
  position: relative;
  margin-bottom: 100px;
  
  &::before {
    content: '';
    position: absolute;
    top: 150px;
    left: 0;
    height: 500px;
    width: 57px;
    background: linear-gradient(180deg, #F0E2BB 0%, #F1E8EB 100%), #F0E2BB;
    border-radius: 2px;
  }
}

.post-image-wrapper {
  height: 300px;
  overflow: hidden;
  margin-bottom: 40px;
}

.post-image {
  height: auto;
  width: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.post-content {
  max-width: 715px;
  margin: 0 auto;
}

.post-title {
  font-size: 40px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0.2em;
  margin-bottom: 30px;
}

.post-body {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;

  p {
    margin-bottom: 20px;
  }
}

@media (max-width: 1120px) {
  .post-back {
    top: 90px;
    left: 0;
  }

  .logo {
    margin-left: 55px;
  }
}

@media (max-width: 1023px) {
  .logo {
    margin-bottom: 50px;
  }

  .post {
    &::before {
      display: none;
    }
  }

  .post-content-wrapper {
    padding-bottom: 40px;
  }

  .post-image-wrapper {
    height: auto;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .post-image {
    width: 100%;
    height: auto;
  }

  .post-content {
    margin: 0 20px;
  }
}
</style>
