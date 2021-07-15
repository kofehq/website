<template>
  <div :class="$style['design-sprint']">
    <k-center>
      <div :class="$style['design-sprint-content']">
        <img src="@/assets/design-sprint.png" alt="" :class="$style['design-sprint-image']">
        <div>
          <h3 :class="$style['design-sprint-title']">Design sprints</h3>
          <p :class="$style['design-sprint-description']">Método escrito no Google por Jake Knapp, utilizado para inovar, solucionando grandes desafios em poucos dias. Bruna Ferencz é nossa facilitadora de Design Sprints certificada por Jake Knapp e AJ&Smart.</p>
        </div>
      </div>
      <k-testimonial />
    </k-center>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'
import KTestimonial from '@/components/KTestimonial'

export default {
  components: {
    KCenter,
    KTestimonial,
  }
}
</script>

<style lang="scss" module>
.design-sprint {
  height: 1285px;
  background: linear-gradient(180deg, rgba(240, 226, 187, 0) 0%, #F0E2BB 35.94%, #F1E8EB 73.44%, rgba(241, 232, 235, 0) 100%);
}

.design-sprint-content {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  position: relative;
  z-index: 2;
}

.design-sprint-image {
  margin-left: -62px;
  margin-right: 95px;
}

.design-sprint-title {
  font-weight: 300;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(#5A223B, 0.8);
  max-width: 400px;
  margin-bottom: 10px;
  }

.design-sprint-description {
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.1em;
  color: rgba(#5A223B, 0.8);
  max-width: 300px;
}
</style>
