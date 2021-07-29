<template>
  <div :class="$style['projects']">
    <k-center>
      <div :class="$style['projects-list']">
        <template v-for="(project, index) in projects">
          <transition
            :key="index"
            name="slide"
            :duration="1500"
            :enter-active-class="$style[`${slideDirectionClass}-enter-active`]"
            :leave-active-class="$style['slide-leave-active']"
          >
            <div v-if="currentIndex === index" :class="$style['project']">
              <h4 :class="$style['project-title']">{{ project.title }}</h4>
              <img :src="project.image" :alt="project.title" :class="$style['project-image']">
            </div>
          </transition>
        </template>
      </div>
      <div :class="$style['projects-nav']">
        <k-action
          type="button"
          @click="prevSlide"
        >
          <img src="@/assets/btn-prev-left.svg" alt="">
        </k-action>
        <div :class="$style['projects-nav-list']">
          <template v-for="(project, index) in projects">
            <div
              :key="index"
              :class="[$style['projects-nav-item'], {
                [$style['is-current']]: currentIndex === index
              }]">
            </div>
          </template>
        </div>
        <k-action
          type="button"
          @click="nextSlide"
        >
          <img src="@/assets/btn-next-right.svg" alt="">
        </k-action>
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
    projects: {
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
      if (this.direction === 'left') {
        return 'slide-left'
      }
      return 'slide-right'
    },

    totalItems () {
      return this.projects.length
    },
  },

  methods: {
    nextSlide () {
      this.direction = 'right'
      if (this.currentIndex < this.totalItems - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },

    prevSlide () {
      this.direction = 'left'
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.totalItems - 1
      }
    }
  },
}
</script>

<style lang="scss" module>
.projects {
  margin-bottom: 125px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 460px;
    background: radial-gradient(100% 100% at 50% 0%, #F1E8EB 0%, #F8F9F9 100%), #F8F9F9;
  }
}

.projects-list {
  background: url('~@/assets/computer.svg') no-repeat center bottom;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.projects-nav {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-nav-list {
  margin: 0 100px;
  display: flex;
  align-items: center;
}

.projects-nav-item {
  width: 30px;
  height: 2px;
  background: rgba(#FFBE2E, 0.3);
  border-radius: 2px;
  margin: 0 7px;
  transition: background-color 0.5s;

  &.is-current {
    background: #89536B;
  }
}

.project {
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
}

.project-title {
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 55px;
}

.project-image {
  display: block;
  margin: 0 auto;
  transform: translateX(-38px);
}

.slide-left-enter-active {
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

.slide-right-enter-active {
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
