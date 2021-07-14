<template>
  <footer :class="$style['footer']">
    <k-center>
      <div :class="$style['footer-content']">
        <div :class="$style['footer-logo-wrapper']">
          <k-svg
            name="logo"
            :class="$style['footer-logo']"
          />
          <span :class="$style['footer-logo-text']">studio</span>
        </div>
        <div :class="$style['footer-mail']">
          <img src="" alt="" :class="$style['footer-mail-icon']">
          <span :class="$style['footer-mail-text']"></span>
        </div>
        <div :class="$style['footer-address']">
          <img src="" alt="" :class="$style['footer-address-icon']">
          <span :class="$style['footer-address-text']"></span>
        </div>
      </div>
    </k-center>
  </footer>
</template>

<script>
import KSvg from '@/components/KSvg'
import KCenter from '@/components/KCenter'

export default {
  components: {
    KSvg,
    KCenter,
  }
}
</script>

<style lang="scss" module>
.footer {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(241, 232, 235, 0.5) 99.99%, #FFFFFF 100%);
  height: 400px;
  padding-top: 220px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo-wrapper {
  display: flex;
  align-items: center;
}

.footer-logo {
  color: #5A223B;
}

.footer-logo-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.45em;
  margin-left: 30px;
}
</style>
