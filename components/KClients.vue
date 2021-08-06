<template>
  <div :class="$style['clients']">
    <h3 :class="$style['clients-title']">Clientes</h3>
    <k-center>
      <div :class="$style['clients-list']">
        <template v-for="(client, index) in clients">
          <div :key="index" :class="$style['client-item']">
            <img :src="client.image" :alt="client.title">
          </div>
        </template>
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

  props: {
    clients: {
      type: Array,
      default: () => ([])
    },
  }
}
</script>

<style lang="scss" module>
.clients {
  margin-bottom: 150px;
}

.clients-title {
  font-size: 30px;
  font-weight: 300;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 50px;
}

.clients-list {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}

.client-item {
  height: 140px;
  width: calc(100% / 5);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1023px) {
  .clients-list {
    flex-direction: column;
    justify-content: center;
  }

  .client-item {
    margin-bottom: 20px;
  }
}
</style>
