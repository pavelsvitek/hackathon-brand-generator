export type Style = (typeof allStyles)[number]

export const allStyles = [
  'enhance',
  'line-art',
  'low-poly',
  'origami',
  'digital-art',
  'anime',
  'photographic',
  'comic-book',
  'fantasy-art',
  'analog-film',
  'isometric',
  'craft-clay',
  'cinematic',
  '3d-model'
  // 'modeling-compound',
  // 'neon-punk',
  // 'pixel-art',
  // 'tile-texture',
] as const

export const allActivities = [
  {
    key: 'writing',
    image: '/images/image-1.png',
    keywords: 'writing, journaling'
  },
  {
    key: 'books',
    image: '/images/image-2.png',
    keywords: 'books, reading'
  },
  {
    key: 'city',
    image: '/images/image-3.png',
    keywords: 'city lanscape'
  },
  {
    key: 'photography',
    image: '/images/image-4.png',
    keywords: 'photography, camera'
  },
  {
    key: 'beach',
    image: '/images/image-5.png',
    keywords: 'beach, ocean'
  },
  {
    key: 'technology',
    image: '/images/image-6.png',
    keywords: 'internet, computers, technology'
  },
  {
    key: 'pets',
    image: '/images/image-7.png',
    keywords: 'pets, dogs, cats'
  },
  {
    key: 'painting',
    image: '/images/image-8.png',
    keywords: 'painting, brunshing, art'
  },
  {
    key: 'music',
    image: '/images/image-9.png',
    keywords: 'music, instruments, guitar'
  },
  {
    key: 'travel',
    image: '/images/image-10.png',
    keywords: 'travel, world'
  },
  {
    key: 'cooking',
    image: '/images/image-11.png',
    keywords: 'cooking, kitchen, food'
  },
  {
    key: 'games',
    image: '/images/image-12.png',
    keywords: 'games, gaming'
  },
  {
    key: 'sport',
    image: '/images/image-13.png',
    keywords: 'sport, excercise, workout'
  },
  {
    key: 'nature',
    image: '/images/image-14.png',
    keywords: 'nature, hiking, mountains'
  },
  {
    key: 'night-sky',
    image: '/images/image-15.png',
    keywords: 'night-sky, stars, moon'
  },
  {
    key: 'universe',
    image: '/images/image-16.png',
    keywords: 'universe, sun, planets'
  }
] as const

export type Activity = (typeof allActivities)[number]
export type ActivityKey = Activity['key']
