<template>
  <k-center>  
    <div :class="$style['digital']" data-aos="fade-right">
      <h3 :class="$style['digital-title']">Interfaces digitais</h3>
      <div :class="$style['digital-description']">
        <p>Websites, Aplicativos, Portais, Sistemas e até cursos online, são alguns exemplos de interfaces digitais utilizadas para promover a interação com clientes por meio de diferentes dispositivos.</p>
        <p>Nós oferecemos serviços de design e desenvolvimento focados no projeto de interfaces intuitivas e únicas para cada objetivo de negócio.</p>
      </div>
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
  margin-bottom: 20px;
  text-transform: uppercase;
  max-width: 420px;
}

.digital-description {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.1em;
  color: rgba(#58223A, 0.8);
  max-width: 350px;

  p {
    margin-bottom: 20px;
  }
}

@media (max-width: 1120px) {
  .digital {
    background-size: 600px auto;
  }
}

@media (max-width: 1023px) {
  .digital {
    height: auto;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
      content: '';
      width: 100%;
      height: 400px;
      background: url('~@/assets/pc.png') no-repeat center/contain;
      margin-top: 40px;
    }
  }

  .digital-title {
    max-width: none;
    text-align: center;
    font-size: 50px;
  }

  .digital-description {
    max-width: none;
  }
}

@media (max-width: 767px) {
  .digital {
    margin-bottom: 100px;
  }
  
  .digital-title {
    font-size: 40px;
  }

  .digital-description {
    font-size: 16px;
  }
}

@media (max-width: 320px) {
  .digital {
    &::after {
      height: 250px;
    }
  }

  .digital-title {
    font-size: 30px;
    line-height: 50px;
  }
}
</style>
