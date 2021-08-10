<template>
  <component
    :is="tag"
    :class="[$style['btn'], computedClasses]"
    :disabled="disabled"
    :type="type"
    :to="to"
    :href="url"
    :target="target"
    :rel="target === '_blank' ? 'noreferrer' : null"
    @click="triggerClickEvent"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },

    tag: {
      type: String,
      default: 'button'
    },

    target: {
      type: String,
      default: null,
    },

    url: {
      type: String,
      default: null,
    },

    to: {
      type: Object,
      default: null,
    },

    color: {
      type: String,
      default: null,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedClasses() {
      return {
        [this.$style['btn-color-primary']]: this.color === 'primary',
        [this.$style['btn-disabled']]: this.disabled,
      }
    },
  },

  methods: {
    triggerClickEvent(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="scss" module>
.btn {
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  background: none;
  text-decoration: none;
  font-family: $font-primary;
  outline: 0;
}

.btn-disabled {
  cursor: default;
}

.btn-color-primary {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.3em;
  color: rgba(#58223A, 0.8);
  border: 1px solid #f0e2bb;
  border-radius: 2px;
  height: 50px;
  padding: 0 35px;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(#58223A, 0.8);
    color: #fff;
  }
}

@media (max-width: 767px) {
  .btn-color-primary {
    height: 40px;
    padding: 0 20px;
  }
}
</style>
