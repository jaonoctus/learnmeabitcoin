export default defineAppConfig({
  docus: {
    title: 'Learn me a Bitcoin',
    description: 'How does Bitcoin Work?',
    image: '',
    socials: {
      github: 'jaonoctus/learnmeabitcoin'
    },
    aside: {
      level: 1,
    },
    header: {
      logo: false,
    },
    footer: {
      textLinks: [
        {
          text: 'João Dias (@jaonoctus)',
          href: 'https://jaonoct.us'
        },
        {
          text: '/',
          href: ''
        },
        {
          text: 'Greg Walker (@in3rsha)',
          href: 'https://learnmeabitcoin.com'
        }
      ],
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    },
    github: {
      owner: 'jaonoctus',
      repo: 'learnmeabitcoin',
      branch: 'main',
      edit: true
    }
  }
})
