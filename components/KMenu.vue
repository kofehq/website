<template>
  <div :class="$style['menu-wrapper']">
    <k-action :class="$style['menu-btn']" @click="showMenu = true">
      <img src="@/assets/menu.svg" alt="Menu" width="56" height="55" :class="$style['menu-btn-image']" />
    </k-action>
    <transition
      :enter-class="$style['menu-enter']"
      :enter-active-class="$style['menu-enter-active']"
      :leave-to-class="$style['menu-leave']"
      :leave-active-class="$style['menu-leave-active']"
      :duration="{ enter: 2000, leave: 0 }"
    >
      <div
        v-if="showMenu"
        ref="menu"
        :class="$style['menu']"
      >
        <div :class="$style['menu-header']">
          <k-action
            :class="$style['menu-close']"
            @click="showMenu = false"
          >
            <img src="@/assets/close.svg" alt="Fechar" width="32" height="32">
          </k-action>
        </div>
        <div :class="$style['menu-list']">
          <div
            :class="$style['menu-item']"
            :style="{ '--animation-order': 1 }"
          >
            <k-action
              :class="$style['menu-link']"
              @click="goTo('#servicos')"
            >
              Serviços  
            </k-action>
          </div>
          <div
            :class="$style['menu-item']"
            :style="{ '--animation-order': 2 }"
          >
            <k-action
              :class="$style['menu-link']"
              @click="goTo('#design')"
            >
              Design sprints  
            </k-action>
          </div>
          <div
            :class="$style['menu-item']"
            :style="{ '--animation-order': 3 }"
          >
            <k-action
              :class="$style['menu-link']"
              @click="goTo('#projetos')"
            >
              Projetos  
            </k-action>
          </div>
          <div
            :class="$style['menu-item']"
            :style="{ '--animation-order': 4 }"
          >
            <k-action
              :class="$style['menu-link']"
              @click="goTo('#clientes')"
            >
              Clientes  
            </k-action>
          </div>
          <div
            :class="$style['menu-item']"
            :style="{ '--animation-order': 5 }"
          >
            <k-action
              tag="nuxt-link"
              :class="$style['menu-link']"
              :to="{ name: 'blog' }"
            >
              Blog  
            </k-action>
          </div>
          <div
            :class="$style['menu-social-media']"
            :style="{ '--animation-order': 6 }"
          >
            <k-action
              tag="a"
              url="https://open.spotify.com/playlist/1AyhlPw1mGsdrDou0LeOyz?si=b663cfe38a794201"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/spotify.svg" alt="Spotify" :class="$style['menu-social-image']" width="27" height="26">
            </k-action>
            <k-action
              tag="a"
              url="https://www.instagram.com/kofe.design/"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/instagram.svg" alt="Instagram" :class="$style['menu-social-image']" width="26" height="26">
            </k-action>
            <k-action
              tag="a"
              url="https://www.facebook.com/kofe.design/"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/facebook.svg" alt="Facebook" :class="$style['menu-social-image']" width="26" height="26">
            </k-action>
            <k-action
              tag="a"
              url="https://www.linkedin.com/company/kofedesign/"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/linkedin.svg" alt="Linkedin" :class="$style['menu-social-image']" width="27" height="26">
            </k-action>
            <k-action
              tag="a"
              url="https://api.whatsapp.com/send?phone=5548991409750&text=Ol%C3%A1!%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Kofe.%20Poderiam%20me%20ajudar%3F"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/whatsapp.svg" alt="Whatsapp" :class="$style['menu-social-image']" width="27" height="27">
            </k-action>
            <k-action
              tag="a"
              url="mailto:atelie@kofe.design"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/mail.svg" alt="Email" :class="$style['menu-social-image']" width="26" height="18">
            </k-action>
            <k-action
              tag="a"
              url="https://goo.gl/maps/t7jo9jXGKzrxe7dE8"
              target="_blank"
              :class="$style['menu-social-link']"
            >
              <img src="@/assets/pin.svg" alt="Pin" :class="$style['menu-social-image']" width="23" height="27">
            </k-action>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import KAction from '@/components/KAction'

export default {
  components: {
    KAction,
  },

  data () {
    return {
      showMenu: false,
    }
  },

  watch: {
    showMenu () {
      if (this.showMenu) {
        this.$nextTick(() => {
          disableBodyScroll(this.$refs.menu)
        })
      } else {
        clearAllBodyScrollLocks()
      }
    }
  },

  methods: {
    goTo (hash) {
      clearAllBodyScrollLocks()
      this.showMenu = false
      this.$router.push({
        name: 'index',
        hash,
      })
    }
  }
}
</script>

<style lang="scss" module>
.menu-btn {
  position: fixed;
  top: 36px;
  z-index: 999;
  transform: translateX(-76px);
}

.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(180deg, rgba(240, 226, 187, 0.95) 0%, rgba(255, 237, 243, 0.95) 101.22%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-header {
  position: absolute;
  top: 36px;
  left: 50%;
  width: 100%;
  max-width: 1080px;
  transform: translateX(-50%);
}

.menu-close {
  transform: translateX(-76px);
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-list {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
}

.menu-item {
  margin-bottom: 25px;
}

.menu-link {
  font-size: 60px;
  font-weight: 200;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(#5A223B, 0.8);
}

.menu-social-media {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.menu-social-link {
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

.menu-enter-active {
  .menu-close {
    transform: translateX(-76px);
    opacity: 1;
    transition: all 0.5s;
  }

  .menu-item {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.5s;
    transition-delay: calc(300ms + (var(--animation-order) * 100ms));
  }

  .menu-social-media {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.5s;
    transition-delay: calc(300ms + (var(--animation-order) * 100ms));
  }
}

.menu-enter {
  .menu-close {
    transform: translateX(-160px);
    opacity: 0;
  }

  .menu-item {
    transform: translateY(30px);
    opacity: 0;
  }

  .menu-social-media {
    transform: translateY(30px);
    opacity: 0;
  }
}

@media (max-width: 1250px) {
  .menu-btn {
    transform: translateX(0);
  }

  .menu-close {
    transform: translateX(0);
  }

  .menu-enter-active {
    .menu-close {
      transform: translateX(0);
      opacity: 1;
      transition: all 0.5s;
    }
  }

  .menu-enter {
    .menu-close {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
}

@media (max-width: 1120px) {
  .menu-header {
    left: 20px;
    right: 20px;
    transform: none;
  }
}

@media (max-width: 767px) {
  .menu-wrapper {
    min-height: 42px;
  }

  .menu-close {
    width: 40px;
    height: 40px;
  }

  .menu-btn-image {
    width: 40px;
    height: auto;
  }

  .menu-list {
    margin-top: 60px;
    padding-left: 25px;
  }

  .menu-link {
    font-size: 40px;
  }

  .menu-social-media {
    max-width: 70%;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .menu-social-link {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

@media (max-width: 320px) {
  .menu-link {
    font-size: 30px;
  }
}
</style>
