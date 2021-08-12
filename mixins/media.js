export default {
  computed: {
    $media() {
      return {
        mobile: this.$mq === 'mobile',
        tablet: this.$mq === 'tablet',
        desktop: this.$mq === 'desktop',
      }
    },
  },
}
