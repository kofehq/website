<template>
  <div :class="$style['testimonial']">
    <div :class="$style['testimonial-nav']">
      <button
        type="button"
        :class="$style['testimonial-nav-button']"
        @click="prevSlide"
      >
        <img src="@/assets/btn-prev.svg" alt="">
      </button>
      <div :class="$style['testimonial-nav-list']">
        <div :class="[$style['testimonial-nav-item'], {[$style['is-current']]: currentIndex === 0}]"></div>
        <div :class="[$style['testimonial-nav-item'], {[$style['is-current']]: currentIndex === 1}]"></div>
        <div :class="[$style['testimonial-nav-item'], {[$style['is-current']]: currentIndex === 2}]"></div>
      </div>
      <button
        type="button"
        :class="$style['testimonial-nav-button']"
        @click="nextSlide"
      >
        <img src="@/assets/btn-next.svg" alt="">
      </button>
    </div>
    <div :class="$style['testimonial-list']">
      <transition
        name="slide"
        :duration="1500"
        :enter-active-class="$style[`${slideDirectionClass}-enter-active`]"
        :leave-active-class="$style['slide-leave-active']"
      >
        <div v-if="currentIndex === 0" :class="$style['testimonial-item']">
          <div :class="$style['testimonial-user']">
            <img src="@/assets/testimonial-1.png" alt="" :class="$style['testimonial-user-image']">
            <span :class="$style['testimonial-user-name']">Raquel Ramos</span>
            <span :class="$style['testimonial-user-company']">Mobiliza</span>
          </div>
          <p :class="$style['testimonial-text']">”Antes de experienciar o método, tinha algumas dúvidas sobre a eficiência e qualidade das ideias resultantes. Principalmente por ser um processo muito rápido e com pouca profundidade de reflexão. Me surpreendi bastante e positivamente! Com essa análise final de resultados deu pra perceber que funciona! =) ”</p>
        </div>
      </transition>
      <transition
        name="slide"
        :duration="1500"
        :enter-active-class="$style[`${slideDirectionClass}-enter-active`]"
        :leave-active-class="$style['slide-leave-active']"
      >
        <div v-if="currentIndex === 1" :class="$style['testimonial-item']">
          <div :class="$style['testimonial-user']">
            <img src="@/assets/testimonial-2.png" alt="" :class="$style['testimonial-user-image']">
            <span :class="$style['testimonial-user-name']">Raquel Ramos</span>
            <span :class="$style['testimonial-user-company']">Mobiliza</span>
          </div>
          <p :class="$style['testimonial-text']">”O Design Sprint facilitado por Bruna foi um processo muito intenso e que otimizou nosso tempo gerando resultados bem precisos enquanto grupo e ideias diversas. Em todo processo era possível enxergar os caminhos que foram sendo conduzidos ao encontro dos nossos objetivos principais. A metodologia permite uma participação responsável e colaborativa de todos e que no final encontra-se de maneira harmoniosa uma solução para os desafios. Além disso um momento de avaliação externa por quem não participou do processo nos fez descobrir mais soluções para realização do projeto.”</p>
        </div>
      </transition>
      <transition
        name="slide"
        :duration="1500"
        :enter-active-class="$style[`${slideDirectionClass}-enter-active`]"
        :leave-active-class="$style['slide-leave-active']"
      >
        <div v-if="currentIndex === 2" :class="$style['testimonial-item']">
          <div :class="$style['testimonial-user']">
            <img src="@/assets/testimonial-3.png" alt="" :class="$style['testimonial-user-image']">
            <span :class="$style['testimonial-user-name']">Raquel Ramos</span>
            <span :class="$style['testimonial-user-company']">Mobiliza</span>
          </div>
          <p :class="$style['testimonial-text']">”Aprendizado! Penso que representa uma oportunidade de solução para muitos clientes, especialmente os que precisam sintetizar suas ideias, quando são muitas e dispõem de um grande volume de conteúdo. Contar com especialistas ajuda. Ainda mais quando o objeto ou coisa do site ainda precisam ser melhor compreendidos pelos próprios gestores. Outra percepção é a importância de uma imersão, com comunicação direta em tempo real para compartilhar as sugestões, possibilidades e agilizar a tomada de decisão.”</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      totalItems: 3,
      direction: null,
    }
  },

  computed: {
    slideDirectionClass () {
      if (this.direction === 'top') {
        return 'slide-top'
      }
      return 'slide-bottom'
    },
  },

  methods: {
    nextSlide () {
      this.direction = 'bottom'
      if (this.currentIndex < this.totalItems - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },

    prevSlide () {
      this.direction = 'top'
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.totalItems - 1
      }
    }
  }
}
</script>

<style lang="scss" module>
.testimonial {
  width: 870px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.testimonial-nav {
  position: absolute;
  top: 50%;
  left: 235px;
  z-index: 20;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-nav-button {
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 0;
}

.testimonial-nav-list {
  margin: 55px 0;
}

.testimonial-nav-item {
  width: 2px;
  height: 30px;
  background: rgba(#FFBE2E, 0.3);
  border-radius: 2px;
  margin: 7px 0;
  transition: background-color 0.5s;

  &.is-current {
    background: #89536B;
  }
}

.testimonial-list {
  height: 100%;
}

.testimonial-item {
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
}

.testimonial-user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 200px;
  margin-right: 95px;
}

.testimonial-user-image {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.testimonial-user-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.2em;
}

.testimonial-user-company {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0.2em;
}

.testimonial-text {
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.2em;
  max-width: 580px;
}

.slide-top-enter-active {
  animation-name: slide-top-in;
  animation-duration: 0.3s;
}

@keyframes slide-top-in {
  0%, 20% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-bottom-enter-active {
  animation-name: slide-bottom-in;
  animation-duration: 0.3s;
}

@keyframes slide-bottom-in {
  0%, 20% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-leave-active {
  animation-name: slide-leave;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes slide-leave {
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
</style>
