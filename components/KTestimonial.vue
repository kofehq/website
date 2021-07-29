<template>
  <div :class="$style['testimonial']">
    <k-center>
      <h2 :class="$style['testimonial-title']">Feedback dos clientes</h2>
      <div :class="$style['testimonial-list']">
        <div :class="$style['testimonial-nav']">
          <k-action
            type="button"
            @click="prevSlide"
          >
            <img src="@/assets/btn-prev.svg" alt="">
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
            @click="nextSlide"
          >
            <img src="@/assets/btn-next.svg" alt="">
          </k-action>
        </div>
        <template v-for="(testimonial, index) in testimonials">
          <transition
            :key="index"
            name="slide"
            :duration="1500"
            :enter-active-class="$style[`${slideDirectionClass}-enter-active`]"
            :leave-active-class="$style['slide-leave-active']"
          >
            <div v-if="currentIndex === index" :class="$style['testimonial-item']">
              <div :class="$style['testimonial-user']">
                <div :class="$style['testimonial-user-image-wrapper']">
                  <img :src="testimonial.image" alt="" :class="$style['testimonial-user-image']">
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
    }
  },

  methods: {
    nextSlide () {
      this.direction = 'bottom'
      if (this.currentIndex < this.totalItems - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },

    prevSlide () {
      this.direction = 'top'
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.totalItems - 1
      }
    }
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
  justify-content: space-between;
  height: 200px;
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
  height: 200px;
  position: relative;
}

.testimonial-item {
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
}

.testimonial-user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 250px;
  margin-right: 120px;
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
}

.testimonial-user-company {
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.2em;
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
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-bottom-enter-active {
  animation-name: slide-bottom-in;
  animation-duration: 0.5s;
}

@keyframes slide-bottom-in {
  0%, 20% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
  50%, 100% {
    opacity: 0;
  }
}
</style>
