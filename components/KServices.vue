<template>
  <div :class="$style['services']">
    <k-center>
      <h3 :class="$style['services-title']">Nossos serviços</h3>
      <div :class="$style['services-list']">
        <div :class="$style['service-item']">
          <img src="@/assets/clock.svg" alt="" :class="$style['service-icon']">
          <h4 :class="$style['service-title']">Design</h4>
          <div :class="$style['service-description']">
            <p>Design de Interação, User Experience, User Interface, Usabilidade e Design Visual para interfaces digitais.</p>
          </div>
        </div>
        <div :class="$style['service-item']">
          <img src="@/assets/clock.svg" alt="" :class="$style['service-icon']">
          <h4 :class="$style['service-title']">Sprints</h4>
          <div :class="$style['service-description']">
            <p>Organização e facilitação do método <strong>Design Sprint 2.0</strong>. Sucesso escrito pelo Google e aplicado em 4 dias.</p>
          </div>
        </div>
        <div :class="$style['service-item']">
          <img src="@/assets/clock.svg" alt="" :class="$style['service-icon']">
          <h4 :class="$style['service-title']">Code</h4>
          <div :class="$style['service-description']">
            <p>Desenvolvimento Front-end em</p>
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
  max-width: 340px;
  padding: 20px 40px 25px;
  box-shadow: 0px 10px 10px rgba(241, 232, 235, 0.5);
  border-radius: 6px;

  &:nth-child(1) .service-icon {
    transform: rotate(-45deg);
  }

  &:nth-child(3) .service-icon {
    transform: rotate(135deg);
  }
}

.service-title {
  font-family: $font-primary;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-top: 15px;
  margin-bottom: 20px;
  color: rgba(#5A223B, 0.8);
}

.service-description {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2em;
  color: rgba(#3E293D, 0.8);
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
  .services-list {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .service-item {
    margin-bottom: 20px;
  }
}
</style>
