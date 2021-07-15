<template>
  <div :class="$style['projects']">
    <k-center>
      <div :class="$style['projects-list']">

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
.projects {
  margin-bottom: 125px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 460px;
    background: radial-gradient(100% 100% at 50% 0%, #F1E8EB 0%, #F8F9F9 100%), #F8F9F9;
  }
}

.projects-list {
  background: url('~@/assets/computer.svg') no-repeat center bottom;
  height: 600px;
}
</style>
