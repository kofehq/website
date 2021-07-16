<template>
  <div :class="$style['zaman']">
    <k-center>
      <div :class="$style['zaman-content']">
        <div :class="$style['zaman-content-inner']">
          <h3 :class="$style['zaman-title']">Aplicativo Zaman</h3>
          <p :class="$style['zaman-description']">Um APP para facilitar a gestão do seu ponto. Pode ser utilizado com diferentes serviços de controle, confira!</p>
          <k-action
            tag="a"
            url="https://play.google.com/store/apps/details?id=com.zaman&hl=pt"
            target="_blank"
            color="primary"
          >
            Baixe grátis para android
          </k-action>
        </div>
        <img src="@/assets/chimp02.png" alt="">
      </div>
    </k-center>
  </div>
</template>

<script>
import KCenter from '@/components/KCenter'
import KAction from '@/components/KAction'

export default {
  components: {
    KCenter,
    KAction,
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

@media (max-width: 1023px) {
  .zaman-content {
    flex-direction: column;
  }

  .zaman-content-inner {
    margin-right: 0;
    margin-bottom: 40px;
  }
}
</style>
