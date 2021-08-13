<template>
  <div :class="$style['clients']">
    <h3 :class="$style['clients-title']" data-aos="fade-down">Clientes</h3>
    <k-center>
      <div :class="$style['clients-list']">
        <template v-for="(client, index) in clients">
          <div :key="index" :class="$style['client-item']" data-aos="fade-up" :data-aos-delay="`${200 * index}`">
            <img :src="client.image" :alt="client.title" :class="$style['client-image']">
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
  .client-item {
    width: calc(100% / 3);
  }
}

@media (max-width: 767px) {
  .client-item {
    width: calc(100% / 2);
  }

  .client-image {
    max-width: 90%;
    height: auto;
  }
}

@media (max-width: 320px) {
  .client-item {
    width: 100%;
  }

  .client-image {
    max-width: 100%;
  }
}
</style>
