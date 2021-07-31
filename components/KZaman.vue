<template>
  <div :class="$style['zaman']">
    <k-center>
      <div :class="$style['zaman-content']">
        <img src="@/assets/chimp02.png" alt="Macaco" width="461" height="899">
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
  margin-bottom: 100px;
}

.zaman-content {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 110px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100px;
    transform: translateY(-50%);
    height: 580px;
    width: 440px;
    background: linear-gradient(180deg, #F0E2BB 0%, #F1E8EB 100%), #F0E2BB;
    z-index: -1;
  }
}

.zaman-content-inner {
  flex: 1;
  max-width: 350px;
  margin-left: 20px;
}

.zaman-title {
  font-size: 40px;
  font-weight: 200;
  line-height: 50px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.zaman-description {
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
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
