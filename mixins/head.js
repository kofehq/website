import ogImage from '@/assets/kofe-avatar.jpg'

export default {
  data () {
    const facebookMeta = [
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Kofe Design',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Kofe é um estúdio de design e desenvolvimento com sede em Florianópolis, Santa Catarina. Atende remotamente clientes de diferentes cidades do mundo, projetando interfaces para produtos digitais, como sistemas, plataformas, aplicativos e sites.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ogImage,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: this.$route.fullPath,
      },
    ]
    
    const twitterMeta = [
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Kofe Design',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Kofe é um estúdio de design e desenvolvimento com sede em Florianópolis, Santa Catarina. Atende remotamente clientes de diferentes cidades do mundo, projetando interfaces para produtos digitais, como sistemas, plataformas, aplicativos e sites.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: ogImage,
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ]
    
    return {
      meta: [
        ...facebookMeta,
        ...twitterMeta,
      ],
    }
  }
}
