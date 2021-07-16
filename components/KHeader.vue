<template>
  <k-center>
    <header :class="$style['header']">
      <k-svg
        name="logo"
        :class="$style['header-logo']"
      />
      <img :class="$style['header-image']" src="@/assets/chimp01.png" alt="">
      <h2 :class="$style['header-title']">Design code & design sprint</h2>
    </header>
  </k-center>
</template>

<script>
import KCenter from '@/components/KCenter'
import KSvg from '@/components/KSvg'

export default {
  components: {
    KCenter,
    KSvg,
  }
}
</script>

<style lang="scss" module>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 800px;
  margin-bottom: 100px;

  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    height: 710px;
    width: 540px;
    background: linear-gradient(180deg, #F0E2BB 0%, #F1E8EB 100%);
    border-radius: 6px;
  }
}

.header-logo {
  position: absolute;
  top: 120px;
  left: 40px;
  width: 93px;
  height: 60px;
  color: #89536B;
}

.header-image {
  position: absolute;
  top: 0;
  left: 80px;
}

.header-title {
  font-family: $font-primary;
  font-size: 40px;
  font-weight: 300;
  line-height: 64px;
  letter-spacing: 0.8em;
  color: #89536B;
  text-transform: uppercase;
  max-width: 310px;
  margin-right: 40px;
}
</style>
