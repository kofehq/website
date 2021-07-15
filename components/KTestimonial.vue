<template>
  <div :class="$style['testimonial']">
    <div :class="$style['testimonial-nav']">
      <button
        type="button"
        :class="$style['testimonial-nav-button']"
        @click="prevSlide"
      >
        <img src="@/assets/btn-prev.svg" alt="">
      </button>
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
      <button
        type="button"
        :class="$style['testimonial-nav-button']"
        @click="nextSlide"
      >
        <img src="@/assets/btn-next.svg" alt="">
      </button>
    </div>
    <div :class="$style['testimonial-list']">
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
              <img :src="testimonial.image" alt="" :class="$style['testimonial-user-image']">
              <span :class="$style['testimonial-user-name']">{{ testimonial.name }}</span>
              <span :class="$style['testimonial-user-company']">{{ testimonial.company }}</span>
            </div>
            <p :class="$style['testimonial-text']">{{ testimonial.content }}</p>
          </div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
export default {
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
  width: 870px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.testimonial-nav {
  position: absolute;
  top: 50%;
  left: 235px;
  z-index: 20;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-nav-button {
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 0;
}

.testimonial-nav-list {
  margin: 55px 0;
}

.testimonial-nav-item {
  width: 2px;
  height: 30px;
  background: rgba(#FFBE2E, 0.3);
  border-radius: 2px;
  margin: 7px 0;
  transition: background-color 0.5s;

  &.is-current {
    background: #89536B;
  }
}

.testimonial-list {
  height: 100%;
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
  width: 200px;
  margin-right: 95px;
}

.testimonial-user-image {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.testimonial-user-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.2em;
}

.testimonial-user-company {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0.2em;
}

.testimonial-text {
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.2em;
  max-width: 580px;
}

.slide-top-enter-active {
  animation-name: slide-top-in;
  animation-duration: 0.3s;
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
  animation-duration: 0.3s;
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
