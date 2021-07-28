<template>
  <div :class="$style['design-sprint']">
    <k-center>
      <div :class="$style['design-sprint-content']">
        <div :class="$style['design-sprint-image-wrapper']">
          <img src="@/assets/design-sprint.png" alt="" :class="$style['design-sprint-image']">
          <p :class="$style['design-sprint-image-description']">Facilitação profissional pela Designer Bruna Ferencz, certificada por Jake Knapp e a agência AJ&Smart, baseada em Berlim.</p>
        </div>
        <div>
          <h3 :class="$style['design-sprint-title']">Design sprints</h3>
          <div :class="$style['design-sprint-description']">
            <p>Facilitamos o método Design Sprint 2.0 por sua capacidade de alcançar resultados de alta qualidade em apenas quatro dias. </p>
            <p>Durante a imersão com o time de especialistas do negócio, conduzimos da concepção, à construção e a validação de soluções para produtos e serviços digitais. </p>
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
  },
}
</script>

<style lang="scss" module>
.design-sprint-content {
  display: flex;
  align-items: center;
  margin-bottom: 125px;
}

.design-sprint-image-wrapper {
  margin-left: 25px;
  margin-right: 80px;
  max-width: 530px;
}

.design-sprint-image {
  display: block;
  margin-bottom: 25px;
}

.design-sprint-image-description {
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.1em;
  max-width: 420px;
  margin: 0 auto;
}

.design-sprint-title {
  font-weight: 300;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(#5A223B, 0.8);
  max-width: 400px;
  margin-bottom: 25px;
}

.design-sprint-description {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.1em;
  color: rgba(#5A223B, 0.8);
  max-width: 415px;

  p {
    margin-bottom: 20px;
  }
}

@media (max-width: 1120px) {
  .design-sprint-image {
    margin-left: -20px;
    margin-right: 20px;
  }
}

@media (max-width: 1023px) {
  .design-sprint-content {
    flex-direction: column;
    justify-content: center;
  }

  .design-sprint-description {
    max-width: 400px;
  }
}
</style>
