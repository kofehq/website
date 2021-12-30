import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const botRegex =
  /bot|googlebot|crawler|spider|robot|crawling|Chrome-Lighthouse/i
const isBot = navigator.userAgent && botRegex.test(navigator.userAgent)

const aosPlugin = {
  install: () => {
    AOS.init({
      disable: () => {
        return window.innerWidth < 768 || isBot
      },
    })
  },
}

if (process.client) {
  Vue.use(aosPlugin)
}
