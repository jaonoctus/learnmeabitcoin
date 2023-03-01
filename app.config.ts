export default defineAppConfig({
  docus: {
    title: 'Learn me a Bitcoin',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
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
