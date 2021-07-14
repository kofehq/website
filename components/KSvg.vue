<template>
  <component
    :is="iconSvg"
    :class="$style['svg']"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
  },

  computed: {
    iconSvg () {
      if (!this.name) return
      return require(`~/assets/${this.name}.svg?inline`)
    },
  },
}
</script>

<style lang="scss" module>
.svg {
  display: inline-flex;
  fill: currentColor;
}
</style>
