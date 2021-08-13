<template>
  <div>
    Teste
    <Nuxt />
    <k-footer />
  </div>
</template>

<script>
import KFooter from '@/components/KFooter'

export default {
  components: {
    KFooter,
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: $font-primary;
  font-size: 10px;
  color: rgba(#5A223B, 0.8);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: rgba(#89536B, 0.8) transparent;

  &::-webkit-scrollbar {
    z-index: 999;
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(#89536B, 0.8);
    border-radius: 6px;

    &:hover {
      background-color: rgba(#89536B, 0.8);
    }
  }
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

::-moz-selection {
  background: #5A223B;
  color: #fff;
  text-shadow: none;
}

::selection {
  background: #5A223B;
  color: #fff;
  text-shadow: none;
}

:focus {
  outline: none;
}

@media (max-width: 768px) {
  body {
    &::-webkit-scrollbar-thumb {
      background-color: #727a8a;
    }
  }
}
</style>
