<template>
  <div :class="$style['services']">
    <k-center>
      <h3 :class="$style['services-title']">Serviços</h3>
      <div :class="$style['services-list']">
        <div :class="$style['service-item']" data-aos="fade-up">
          <img src="@/assets/clock.svg" alt="Relógio" :class="$style['service-icon']" width="42" height="41">
          <h4 :class="$style['service-title']">Design</h4>
          <div :class="$style['service-description']">
            <p>Design que busca a convergência entre os objetivos de negócio e a experiência dos clientes.</p>
          </div>
        </div>
        <div :class="$style['service-item']" data-aos="fade-up" data-aos-delay="300">
          <img src="@/assets/clock.svg" alt="Relógio" :class="$style['service-icon']" width="42" height="41">
          <h4 :class="$style['service-title']">Sprints</h4>
          <div :class="$style['service-description']">
            <p>Para construir e validar ideias antes de investir no desenvolvimento de produtos ou serviços.</p>
          </div>
        </div>
        <div :class="$style['service-item']" data-aos="fade-up" data-aos-delay="600">
          <img src="@/assets/clock.svg" alt="Relógio" :class="$style['service-icon']" width="42" height="41">
          <h4 :class="$style['service-title']">Front-end</h4>
          <div :class="$style['service-description']">
            <p>Código escrito utilizando frameworks como Vue JS e Nuxt. Soluções personalizadas para a interface do cliente e do administrador.</p>
          </div>
        </div>
      </div>
    </k-center>
  </div>
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
.services {
  margin-bottom: 205px;
}

.services-title {
  font-family: $font-primary;
  font-size: 30px;
  font-weight: 200;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: rgba(#5A223B, 0.8);
}

.services-list {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.service-item {
  flex: 1;
  max-width: 350px;
  padding: 35px 20px;
  box-shadow: 0px 10px 10px rgba(241, 232, 235, 0.5);
  border-radius: 6px;

  &:nth-child(1) .service-icon {
    transform: rotate(-45deg);
  }

  &:nth-child(3) .service-icon {
    transform: rotate(135deg);
  }
}

.service-icon {
  display: block;
  margin: 0 auto;
}

.service-title {
  font-family: $font-primary;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 15px;
  color: rgba(#5A223B, 0.8);
}

.service-description {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: rgba(#3E293D, 0.8);
  text-align: center;
}

@media (max-width: 1120px) {
  .service-item {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}

@media (max-width: 1023px) {
  .services {
    margin-bottom: 100px;
  }

  .services-list {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .service-item {
    margin-bottom: 20px;
    max-width: none;
    margin-right: 0;
  }
}

@media (max-width: 767px) {
  .services-title {
    height: auto;
    margin-bottom: 30px;
  }
}
</style>
