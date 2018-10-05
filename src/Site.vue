<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Site',
  data () {
    return {
      email: '',
      emailFocus: false,
      loading: false,
      success: false,
      fail: false
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    addFocus () {
      this.emailFocus = true
      this.$v.$reset()
    },
    removeFocus () {
      this.emailFocus = false
    },
    resetForm () {
      this.loading = false
      this.success = false
      this.fail = false
    },
    sendEmail () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      let promise = axios.post('https://formcarry.com/s/q_rggj-D2P8', {
        email: this.email
      })

      setTimeout(() => {
        promise.then(() => {
          this.success = true
        })

        promise.catch(() => {
          this.fail = true
        })
      }, 500)
    }
  }
}
</script>

<template>
  <main>
    <section class="section section-01">
      <div class="center">
        <h1 class="logo">Kofe</h1>
        <img src="@/assets/images/chimp-pc.png" alt="Chimp no pc" class="chimp">
        <h2 class="title">
          <span>It is about</span>
          <span>making</span>
          <span>things</span>
          <span>work better</span>
        </h2>
      </div>
    </section>
    <section class="section section-02">
      <div class="center">
        <div class="highlight-text">
          <h3>We are engaged to make it easy to build solutions that are delightful to use.</h3>
          <p>Having good ideas is not an easy task, but put them in practice could be even more complicated. Using the
            right technology and a specialized team, we can turn your ideas into something real.</p>
        </div>
        <div class="highlight-image">
          <img src="@/assets/images/image-01.jpg" class="image">
          <img src="@/assets/images/image-02.jpg" class="image">
          <img src="@/assets/images/image-03.jpg" class="image">
          <ul class="list">
            <li class="list-item">Systems</li>
            <li class="list-item">Platforms</li>
            <li class="list-item">Applications</li>
          </ul>
        </div>
      </div>
      <img src="@/assets/images/chimp-cube.png" alt="Chimp resolvendo cubo mágico" class="chimp-cube">
    </section>
    <footer class="footer">
      <div class="contact">
        <h4 class="contact-title">Subscribe to our news:</h4>
        <form class="contact-form" @submit.prevent="sendEmail()" novalidate>
          <div class="form-item" :class="{'has-value': email !== '', 'has-focus': emailFocus, 'has-error': $v.$error}">
            <input type="email" name="contact-email" id="contact-email" v-model="email" class="form-input" @focus="addFocus()" @blur="removeFocus()">
            <label for="contact-email" class="form-label">E-mail</label>
          </div>
          <button type="submit" class="btn">Ok</button>
          <div class="form-response" :class="{'is-loading': loading, 'is-success': success, 'has-failed': fail}" @click="resetForm()">
            <span class="form-response-text" v-if="success">Enviado com sucesso</span>
            <span class="form-response-text" v-if="fail">Ocorreu um erro</span>
          </div>
        </form>
      </div>
      <div class="email-wrapper">
        <a href="mailto:hello@kofe.com" class="email">hello@kofe.com</a>
      </div>
      <span class="copyright">Kofe | 2018</span>
    </footer>
  </main>
</template>

<style src="@/assets/styles/global.css"></style>
