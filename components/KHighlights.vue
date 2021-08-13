<template>
  <div :class="$style['highlights']">
    <k-center>
      <h2 :class="$style['highlights-title']" data-aos="fade-down">4 dias de imersão em floripa</h2>
      <template v-for="(highlight, index) in highlights">
        <div :key="index" :class="$style['highlight']" data-aos="fade-up">
          <div :class="$style['highligh-image-wrapper']">
            <img :src="highlight.image" :class="$style['highlight-image']" width="754" height="440" :alt="`Imagem destaque ${index}`">
          </div>
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

  &:nth-child(even) {
    .highligh-image-wrapper::before {
      left: -10px;
    }
  }

  &:nth-child(odd) {
    .highligh-image-wrapper::before {
      right: -10px;
    }
  }
}

.highligh-image-wrapper {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 53px;
    width: 57px;
    height: 317px;
    background: linear-gradient(180deg, #F0E2BB 0%, #FFEDF3 100%);
    border-radius: 2px;
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

@media (max-width: 1023px) {
  .highlight-image {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 767px) {
  .highlights-title {
    font-size: 22px;
    line-height: 70px;
    letter-spacing: 0.1em;
  }

  .highligh-image-wrapper {
    &::before {
      top: 10%;
      height: 80%;
      width: 40px;
    }
  }

  .highlight {
    &:nth-child(even) {
      .highligh-image-wrapper::before {
        left: -5px;
      }
    }

    &:nth-child(odd) {
      .highligh-image-wrapper::before {
        right: -5px;
      }
    }
  }

  .highlight-description {
    font-size: 16px;
  }
}

@media (max-width: 320px) {
  .highlights-title {
    font-size: 18px;
    line-height: 50px;
  }
}
</style>
