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
          <img src="@/assets/mail.svg" alt="" :class="$style['footer-mail-icon']">
          <span :class="$style['footer-mail-text']">hello@kofe.work</span>
        </div>
        <div :class="$style['footer-address']">
          <img src="@/assets/pin.svg" alt="" :class="$style['footer-address-icon']">
          <span :class="$style['footer-address-text']">Rafael Bandeira, 328 <br>Florianópolis, SC Brasil</span>
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

.footer-mail {
  display: flex;
  align-items: center;
}

.footer-mail-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2em;
  margin-left: 20px;
}

.footer-address {
  display: flex;
  align-items: center;
}

.footer-address-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.2em;
  margin-left: 20px;
}

@media (max-width: 1023px) {
  .footer {
    height: auto;
    padding: 100px 0;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-logo-wrapper,
  .footer-mail {
    margin-bottom: 30px;
  }
}
</style>
