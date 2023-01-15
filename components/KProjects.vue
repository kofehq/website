<template>
  <div :class="$style['projects']" data-aos="fade-up">
    <k-center>
      <h2 :class="$style['projects-title']">Projetos</h2>
      <div :class="$style['projects-list']">
        <template v-for="(project, index) in projects">
          <transition
            :key="index"
            :enter-active-class="$style[`${slideEnterDirectionClass}-enter-active`]"
            :leave-active-class="$style[`${slideLeaveDirectionClass}-leave-active`]"
          >
            <div v-if="currentIndex === index" :class="$style['project']">
              <h3 :class="$style['project-title']">{{ project.title }}</h3>
              <img :src="project.image" :alt="project.title" :class="$style['project-image']">
            </div>
          </transition>
        </template>
        <img :src="projects[0].image" alt="Placeholder image" :class="$style['project-image-placeholder']" width="815" height="459" aria-hidden="true">
      </div>
      <div :class="$style['projects-nav']">
        <k-action
          type="button"
          @click="prevSlide"
        >
          <img src="@/assets/btn-prev-left.svg" alt="Seta para esquerda" width="28" height="26">
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
          <img src="@/assets/btn-next-right.svg" alt="Seta para direita" width="28" height="26">
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
    slideEnterDirectionClass () {
      if (this.direction === 'left') {
        return 'slide-left'
      }
      return 'slide-right'
    },

    slideLeaveDirectionClass () {
      if (this.direction === 'left') {
        return 'slide-right'
      }
      return 'slide-left'
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
  margin-bottom: 160px;
}

.projects-title {
  font-size: 60px;
  font-weight: 200;
  line-height: 76px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.projects-list {
  background: url('~@/assets/computer.svg') no-repeat center bottom;
  position: relative;
  padding-top: 75px;
  padding-bottom: 66px;
}

.projects-nav {
  margin: 30px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-nav-list {
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.projects-nav-item {
  width: 10px;
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
  padding-top: 75px;
  height: 100%;
  width: 100%;
}

.project-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1em;
}

.project-image {
  display: block;
  margin: 0 auto;
  width: 740px;
  height: auto;
}

.project-image-placeholder {
  display: block;
  margin: 0 auto;
  visibility: hidden;
  width: 740px;
  height: auto;
}

// .slide-left-enter-active {
//   animation-name: slide-left-in;
//   animation-duration: 0.5s;
//   transform-origin: bottom center;
// }

// @keyframes slide-left-in {
//   0%, 20% {
//     opacity: 0;
//     transform: translateX(50%) scale(0.5);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(0) scale(1);
//   }
// }

// .slide-right-enter-active {
//   animation-name: slide-right-in;
//   animation-duration: 0.5s;
//   transform-origin: bottom center;
// }

// @keyframes slide-right-in {
//   0%, 20% {
//     opacity: 0;
//     transform: translateX(-50%) scale(0.5);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(0) scale(1);
//   }
// }

// .slide-leave-active {
//   animation-name: slide-leave;
//   animation-duration: 0.3s;
//   animation-fill-mode: forwards;
// }

// @keyframes slide-leave {
//   0% {
//     opacity: 1;
//   }
//   50%, 100% {
//     opacity: 0;
//   }
// }

@media (max-width: 1023px) {
  .projects {
    margin-bottom: 100px;
  }

  .projects-title {
    font-size: 50px;
  }

  .projects-list {
    background: none;
    padding-bottom: 0;
    padding-top: 50px;

    &::before {
      content: unset;
    }
  }

  .project {
    padding-top: 50px;
  }

  .project-image {
    width: 100%;
    height: auto;
  }

  .project-image-placeholder {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 767px) {
  .projects-title {
    font-size: 40px;
  }
  
  .project-title {
    font-size: 16px;
  }

  .projects-nav-item {
    margin: 0 5px;
  }
}
</style>
