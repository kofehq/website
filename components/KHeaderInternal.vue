<template>
  <header :class="$style['header']">
    <k-center>
      <div :class="$style['header-content']">
        <k-action
          v-if="back"
          tag="button"
          :class="$style['header-back']"
          @click="$emit('back')"
        >
          <img src="@/assets/back.svg" alt="Voltar" width="56" height="55" :class="$style['header-back-image']">
        </k-action>
        <k-menu v-else />
        <k-svg
          name="logo"
          :class="$style['logo']"
        />
      </div>
    </k-center>
  </header>
</template>

<script>
import KCenter from '@/components/KCenter'
import KSvg from '@/components/KSvg'
import KAction from '@/components/KAction'
import KMenu from '@/components/KMenu'

export default {
  components: {
    KCenter,
    KSvg,
    KAction,
    KMenu,
  },

  props: {
    back: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" module>
.header {
  height: 115px;
  padding-top: 36px;
}

.header-content {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.header-back {
  transform: translateX(-76px);
}

@media (max-width: 1250px) {
  .header-back {
    transform: translateX(0);
  }
}

@media (max-width: 767px) {
  .header-back-image {
    width: 40px;
    height: auto;
  }
}
</style>
