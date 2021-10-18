<template>
  <k-center>
    <header :class="$style['header']">
      <k-svg
        name="logo"
        :class="$style['header-logo']"
      />
      <h1 hidden>Kofe Design</h1>
      <img :class="$style['header-image']" src="@/assets/chimp01.png" alt="Desenho de um macaco" width="694" height="800" data-aos="fade-right">
      <h2 :class="$style['header-title']" data-aos="fade-left">Design code &amp; design sprint</h2>
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
  margin-top: -50px;
  margin-bottom: 100px;

  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    z-index: -1;
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
  height: 260px;
  margin-right: 40px;
}

@media (max-width: 1120px) {
  .header-image {
    width: 600px;
    height: auto;
  }
}

@media (max-width: 1023px) {
  .header {
    padding-top: 60px;
    height: auto;
    flex-direction: column;
    justify-content: center;

    &::before {
      top: 100px;
      height: 340px;
      width: 260px;
    }
  }

  .header-logo {
    width: 60px;
    height: auto;
    top: 10px;
    left: auto;
    right: 40px;
  }

  .header-image {
    position: static;
    max-width: 340px;
    width: 100%;
    height: auto;
    margin-right: -50px;
  }

  .header-title {
    margin-right: 0;
    margin-top: 50px;
  }
}

@media (max-width: 767px) {
  .header-image {
    margin-right: 0;
  }
}

@media (max-width: 320px) {
  .header {
    &::before {
      height: 300px;
    }
  }

  .header-title {
    height: auto;
    font-size: 30px;
    text-align: center;
  }
}
</style>
