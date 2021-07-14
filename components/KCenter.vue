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
</style>
