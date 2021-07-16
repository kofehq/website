<template>
  <div :class="$style['clients']">
    <h3 :class="$style['clients-title']">Clientes</h3>
    <k-center>
      <div :class="$style['clients-list']">
        <img src="@/assets/clients/detran.png" alt="Detran" :class="$style['clients-logo']">
        <img src="@/assets/clients/bdr.png" alt="BDR" :class="$style['clients-logo']">
        <img src="@/assets/clients/s7.png" alt="S7" :class="$style['clients-logo']">
        <img src="@/assets/clients/mobiliza.png" alt="Mobiliza" :class="$style['clients-logo']">
        <img src="@/assets/clients/tivit.png" alt="Tivit" :class="$style['clients-logo']">
        <img src="@/assets/clients/dot.png" alt="DOT" :class="$style['clients-logo']">
      </div>
    </k-center>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'

export default {
  components: {
    KCenter,
  },
}
</script>

<style lang="scss" module>
.clients {
  margin-bottom: 150px;
}

.clients-title {
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 55px;
}

.clients-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 1023px) {
  .clients-list {
    flex-direction: column;
    justify-content: center;
  }

  .clients-logo {
    margin-bottom: 20px;
  }
}
</style>
