import Vue from 'vue'
import VueMq from 'vue-mq'
import mediaMixin from '@/mixins/media'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: Infinity,
  },
  defaultBreakpoint: 'desktop',
})

Vue.mixin(mediaMixin)
