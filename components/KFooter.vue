<template>
  <footer :class="$style['footer']">
    <k-center>
      <div :class="$style['footer-content']">
        <div :class="$style['footer-logo-wrapper']">
          <k-svg
            name="logo"
            :class="$style['footer-logo']"
          />
        </div>
        <div :class="$style['footer-social-media']">
          <k-action
            tag="a"
            url="https://open.spotify.com/playlist/1AyhlPw1mGsdrDou0LeOyz?si=b663cfe38a794201"
            target="_blank"
            :class="$style['footer-social-link']"
          >
            <img src="@/assets/spotify.svg" alt="Spotify" width="27" height="26">
          </k-action>
          <k-action
            tag="a"
            url="https://www.instagram.com/kofe.design/"
            target="_blank"
            :class="$style['footer-social-link']"
          >
            <img src="@/assets/instagram.svg" alt="Instagram" width="26" height="26">
          </k-action>
          <k-action
            tag="a"
            url="https://www.facebook.com/kofe.design/"
            target="_blank"
            :class="$style['footer-social-link']"
          >
            <img src="@/assets/facebook.svg" alt="Facebook" width="26" height="26">
          </k-action>
          <k-action
            tag="a"
            url="https://www.linkedin.com/company/kofedesign/"
            target="_blank"
            :class="$style['footer-social-link']"
          >
            <img src="@/assets/linkedin.svg" alt="Linkedin" width="27" height="26">
          </k-action>
        </div>
        <div :class="$style['footer-info']">
          <div :class="$style['footer-address']">
            <k-action
              tag="a"
              url="https://goo.gl/maps/t7jo9jXGKzrxe7dE8"
              target="_blank"
            >
              <img src="@/assets/pin.svg" alt="Pin" width="23" height="27">
            </k-action>
            <span :class="$style['footer-address-text']">Rua Lauro Linhares, 2123. Sala 402 Torre B. <br>Trindade, Florianópolis, SC – Brasil.</span>
          </div>
          <div :class="$style['footer-mail']">
            <k-action
              tag="a"
              url="mailto:atelie@kofe.design"
              target="_blank"
            >
              <img src="@/assets/mail.svg" alt="Email" width="26" height="18">
            </k-action>
            <span :class="$style['footer-mail-text']">atelie@kofe.design</span>
          </div>
          <div :class="$style['footer-phone']">
            <k-action
              tag="a"
              url="https://api.whatsapp.com/send?phone=5548991409750&text=Ol%C3%A1!%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Kofe.%20Poderiam%20me%20ajudar%3F"
              target="_blank"
            >
              <img src="@/assets/whatsapp.svg" alt="Whatsapp" width="27" height="27">
            </k-action>
            <span :class="$style['footer-phone-text']">+55 48 99140-9750</span>
          </div>
        </div>
      </div>
    </k-center>
  </footer>
</template>

<script>
import KSvg from '@/components/KSvg'
import KCenter from '@/components/KCenter'
import KAction from '@/components/KAction'

export default {
  components: {
    KSvg,
    KCenter,
    KAction,
  }
}
</script>

<style lang="scss" module>
.footer {
  background: linear-gradient(180deg, rgba(255, 237, 243, 0) 0%, #FFEDF3 100%);
  margin-top: 30px;
}

.footer-content {
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer-logo-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 55px;
}

.footer-logo {
  color: #5A223B;
}

.footer-social-media {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.footer-social-link {
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
}

.footer-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-address {
  display: flex;
  align-items: center;
}

.footer-address-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.2em;
  margin-left: 25px;
}

.footer-mail {
  display: flex;
  align-items: center;
}

.footer-mail-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2em;
  margin-left: 25px;
}

.footer-phone {
  display: flex;
  align-items: center;
}

.footer-phone-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2em;
  margin-left: 25px;
}

@media (max-width: 1023px) {
  .footer-content {
    height: auto;
    padding: 30px 0;
  }

  .footer-logo-wrapper {
    margin-bottom: 40px;
  }

  .footer-social-media {
    margin-bottom: 40px;
  }

  .footer-info {
    flex-direction: column;
  }

  .footer-address {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .footer-mail {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .footer-address {
    flex-direction: column;
  }

  .footer-address-text {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }

  .footer-mail {
    flex-direction: column;
  }
  
  .footer-mail-text {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }

  .footer-phone {
    flex-direction: column;
  }
  
  .footer-phone-text {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
