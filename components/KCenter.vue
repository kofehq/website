<template>
  <div :class="$style['center']">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.center {
  max-width: 1080px;
  margin: 0 auto;
}

@media (max-width: 1120px) {
  .center {
    margin: 0 20px;
  }
}
</style>
