<template>
  <div :class="$style['highlights']">
    <k-center>
      <h2 :class="$style['highlights-title']">4 dias de imersão em floripa</h2>
      <template v-for="(highlight, index) in highlights">
        <div :key="index" :class="$style['highlight']">
          <img :src="highlight.image" :class="$style['highlight-image']" width="754" height="440" :alt="`Imagem destaque ${index}`">
          <p :class="$style['highlight-description']">{{ highlight.description }}</p>
        </div>
      </template>
    </k-center>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'

export default {
  components: {
    KCenter,
  },

  props: {
    highlights: {
      type: Array,
      default: () => ([])
    },
  },
}
</script>

<style lang="scss" module>
.highlights {
  margin-bottom: 120px;
}

.highlights-title {
  font-size: 30px;
  font-weight: 300;
  line-height: 92px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.highlight {
  max-width: 755px;
  margin: 0 auto 60px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 53px;
    width: 57px;
    height: 317px;
    background: linear-gradient(180deg, #F0E2BB 0%, #FFEDF3 100%);
    border-radius: 2px;
  }

  &:nth-child(even) {
    &::before {
      left: -10px;
    }
  }

  &:nth-child(odd) {
    &::before {
      right: -10px;
    }
  }
}

.highlight-image {
  display: block;
}

.highlight-description {
  max-width: 715px;
  margin: 0 auto;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.1em;
}
</style>
