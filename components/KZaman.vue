<template>
  <div :class="$style['zaman']">
    <k-center>
      <div :class="$style['zaman-content']">
        <div :class="$style['zaman-content-inner']">
          <h3 :class="$style['zaman-title']">Aplicativo Zaman</h3>
          <p :class="$style['zaman-description']">Um APP para facilitar a gestão do seu ponto. Pode ser utilizado com diferentes serviços de controle, confira!</p>
          <button
            :class="$style['zaman-button']"
          >
            Baixe grátis para android
          </button>
        </div>
        <img src="@/assets/chimp02.png" alt="">
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
.zaman {
  margin-bottom: 125px;
}

.zaman-content {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100px;
    transform: translateY(-50%);
    height: 620px;
    width: 100px;
    background: linear-gradient(180deg, #F0E2BB 0%, #F1E8EB 100%), #F0E2BB;
  }
}

.zaman-content-inner {
  flex: 1;
  max-width: 425px;
  margin-right: 45px;
}

.zaman-title {
  font-weight: 200;
  font-size: 44px;
  line-height: 69px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.zaman-description {
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
}

.zaman-button {
  border: 1px solid #89536B;
  border-radius: 2px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.3em;
  background: none;
  color: rgba(#89536B, 0.8);
  padding: 0 45px;
  cursor: pointer;
}
</style>
