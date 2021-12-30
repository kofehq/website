<template>
  <div :class="$style['testimonial']" data-aos="fade-up">
    <k-center>
      <h2 :class="$style['testimonial-title']">Feedback dos clientes</h2>
      <div :class="$style['testimonial-list']" :style="listStylesObj">
        <div :class="$style['testimonial-nav']">
          <k-action
            type="button"
            :class="$style['testimonial-nav-left']"
            @click="prevSlide"
          >
            <img src="@/assets/btn-prev.svg" alt="Seta para esquerda" width="26" height="28">
          </k-action>
          <div :class="$style['testimonial-nav-list']">
            <template v-for="(testimonial, index) in testimonials">
              <div
                :key="index"
                :class="[$style['testimonial-nav-item'], {
                  [$style['is-current']]: currentIndex === index
                }]">
              </div>
            </template>
          </div>
          <k-action
            type="button"
            :class="$style['testimonial-nav-right']"
            @click="nextSlide"
          >
            <img src="@/assets/btn-next.svg" alt="Seta para a direita" width="26" height="28">
          </k-action>
        </div>
        <template v-for="(testimonial, index) in testimonials">
          <transition
            :key="index"
            name="slide"
            :enter-active-class="$style[`${slideDirectionClass}-enter-active`]"
            :leave-active-class="$style['slide-leave-active']"
          >
            <div v-if="currentIndex === index" ref="testimonial" :class="$style['testimonial-item']">
              <div :class="$style['testimonial-user']">
                <div :class="$style['testimonial-user-image-wrapper']">
                  <img :src="testimonial.image" :alt="`Foto de ${testimonial.name}`" :class="$style['testimonial-user-image']" width="80" height="80">
                </div>
                <span :class="$style['testimonial-user-name']">{{ testimonial.name }}</span>
                <span :class="$style['testimonial-user-company']">{{ testimonial.company }}</span>
              </div>
              <p :class="$style['testimonial-text']">{{ testimonial.content }}</p>
            </div>
          </transition>
        </template>
      </div>
    </k-center>
  </div>
</template>

<script>
import KAction from '@/components/KAction'
import KCenter from '@/components/KCenter'

export default {
  components: {
    KAction,
    KCenter,
  },

  props: {
    testimonials: {
      type: Array,
      default: () => ([])
    },
  },

  data () {
    return {
      height: null,
      currentIndex: 0,
      direction: null,
    }
  },

  computed: {
    slideDirectionClass () {
      if (this.direction === 'top') {
        return 'slide-top'
      }
      return 'slide-bottom'
    },

    totalItems () {
      return this.testimonials.length
    },

    listStylesObj () {
      return {
        height: `${this.height}px`
      }
    },
  },

  mounted () {
    this.checkHeight()
  },

  methods: {
    nextSlide () {
      this.direction = 'bottom'
      if (this.currentIndex < this.totalItems - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
      this.$nextTick(this.checkHeight)
    },

    prevSlide () {
      this.direction = 'top'
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.totalItems - 1
      }
      this.$nextTick(this.checkHeight)
    },

    checkHeight () {
      this.height = this.$refs.testimonial[0].offsetHeight
    },
  }
}
</script>

<style lang="scss" module>
.testimonial {
  margin-bottom: 200px;
}

.testimonial-title {
  font-size: 30px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 55px;
}

.testimonial-nav {
  position: absolute;
  top: 50%;
  left: 300px;
  z-index: 20;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.testimonial-nav-list {
  margin: 10px 0;
}

.testimonial-nav-item {
  width: 2px;
  height: 10px;
  background: rgba(#FFBE2E, 0.3);
  border-radius: 2px;
  margin: 10px 0;
  transition: background-color 0.5s;

  &.is-current {
    background: #89536B;
  }
}

.testimonial-list {
  min-height: 250px;
  position: relative;
  transition: height 400ms;
}

.testimonial-item {
  position: absolute;
  top: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
}

.testimonial-user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 250px;
  margin-right: 120px;
  flex-shrink: 0;
}

.testimonial-user-image-wrapper {
  background: url('~@/assets/testimonial-image.png') no-repeat;
  width: 95px;
  height: 93px;
  padding: 5px 8px;
  text-align: center;
  margin-bottom: 25px;
}

.testimonial-user-image {
  width: 80px;
  height: 80px;
}

.testimonial-user-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-align: right;
}

.testimonial-user-company {
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-align: right;
}

.testimonial-text {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.1em;
  max-width: 700px;
}

.slide-top-enter-active {
  animation-name: slide-top-in;
  animation-duration: 0.5s;
}

@keyframes slide-top-in {
  0%, 20% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
}

.slide-bottom-enter-active {
  animation-name: slide-bottom-in;
  animation-duration: 0.5s;
}

@keyframes slide-bottom-in {
  0%, 20% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
}

.slide-leave-active {
  animation-name: slide-leave;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes slide-leave {
  0% {
    opacity: 1;
  }
  20%, 100% {
    opacity: 0;
  }
}

@media (max-width: 1023px) {
  .testimonial-nav {
    left: 230px;
  }

  .testimonial-user {
    width: 180px;
  }

  .testimonial-text {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .testimonial {
    margin-bottom: 100px;
  }

  .testimonial-nav {
    flex-direction: row;
    height: auto;
    top: 190px;
    left: 0;
    right: 0;
    transform: none;
  }

  .testimonial-nav-left {
    transform: rotate(-90deg);
  }

  .testimonial-nav-right {
    transform: rotate(-90deg);
  }

  .testimonial-nav-list {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }

  .testimonial-nav-item {
    width: 10px;
    height: 2px;
    margin: 0 10px;
  }

  .testimonial-list {
    height: auto;
    overflow: hidden;
  }

  .testimonial-item {
    flex-direction: column;
    top: 0;
    transform: none;
  }

  .testimonial-user {
    align-items: center;
    justify-content: center;
    margin-right: 0;
    margin-bottom: 100px;
    width: 250px;
  }

  .testimonial-user-company {
    text-align: center;
  }

  .slide-top-enter-active {
    animation-name: slide-left-in;
    animation-duration: 0.5s;
  }

  @keyframes slide-left-in {
    0%, 20% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .slide-bottom-enter-active {
    animation-name: slide-right-in;
    animation-duration: 0.5s;
  }

  @keyframes slide-right-in {
    0%, 20% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
