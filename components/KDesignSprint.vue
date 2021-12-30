<template>
  <div :class="$style['design-sprint']">
    <k-center>
      <div :class="$style['design-sprint-content']">
        <div :class="$style['design-sprint-image-wrapper']" data-aos="fade-right">
          <img src="@/assets/design-sprint.png" alt="Bruna Ferencz" :class="$style['design-sprint-image']" width="530" height="483">
          <p :class="$style['design-sprint-image-description']"><strong>Bruna Ferencz</strong> formada por <strong>Jake Knapp</strong> e <strong>AJ&Smart</strong> em facilitação e liderança de Design Sprints.</p>
        </div>
        <div data-aos="fade-left">
          <h3 :class="$style['design-sprint-title']">Design sprints</h3>
          <div :class="$style['design-sprint-description']">
            <p>Método de trabalho utilizado para projetar soluções de design em apenas quatro dias.</p>
            <p>Utilizamos Design Sprints para ajudar especialistas a obterem melhores resultados, mais rápido.</p>
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
}

.design-sprint-title {
  font-size: 60px;
  font-weight: 200;
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
    margin-bottom: 100px;
  }

  .design-sprint-image-wrapper {
    margin-right: 0;
    margin-left: 0;
    max-width: none;
  }

  .design-sprint-image {
    margin: 0 auto;
  }

  .design-sprint-image-description {
    max-width: none;
  }

  .design-sprint-description {
    max-width: none;
  }

  .design-sprint-title {
    font-size: 50px;
    max-width: none;
    text-align: center;
    margin-top: 30px;
  }
}

@media (max-width: 767px) {
  .design-sprint-image {
    max-width: 100%;
    height: auto;
  }

  .design-sprint-image-description {
    font-size: 16px;
  }

  .design-sprint-title {
    font-size: 35px;
    letter-spacing: 0.2em;
  }

  .design-sprint-description {
    font-size: 16px;
  }
}

@media (max-width: 320px) {
  .design-sprint-title {
    font-size: 30px;
    letter-spacing: 0.1em;
  }
}
</style>
