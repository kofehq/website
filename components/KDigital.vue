<template>
  <k-center>  
    <div :class="$style['digital']">
      <h3 :class="$style['digital-title']">Interfaces digitais</h3>
      <p :class="$style['digital-description']">Projetamos interfaces digitais para sistemas, plataformas, aplicativos, websites, soluções educacionais e mais!</p>
    </div>
  </k-center>
</template>

<script>
import KCenter from '@/components/KCenter'

export default {
  components: {
    KCenter,
  }
}
</script>

<style lang="scss" module>
.digital {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('~@/assets/pc.png') no-repeat right center;
  margin-bottom: 120px;
}

.digital-title {
  font-family: $font-primary;
  font-weight: 300;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.25em;
  color: rgba(#5A223B, 0.8);
  margin-bottom: 10px;
  text-transform: uppercase;
  max-width: 420px;
}

.digital-description {
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.1em;
  color: rgba(#58223A, 0.8);
  max-width: 300px;
}
</style>
