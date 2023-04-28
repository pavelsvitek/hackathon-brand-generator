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

const fineTuneExtensions = [
  //
  'realistic',
  'high quality, 8k'
]

export const allActivities = [
  {
    key: 'writing',
    image: '/images/image-1.png',
    keywords: 'writing, laptop',
    variations: ['home office']
  },
  {
    key: 'books',
    image: '/images/image-2.png',
    keywords: 'books, reading',
    variations: []
  },
  {
    key: 'coffee',
    image: '/images/image-coffee.png',
    keywords: 'coffee, drinking',
    variations: ['espresso', 'cappuccino', 'iced coffee']
  },
  {
    key: 'city',
    image: '/images/image-3.png',
    keywords: 'city, skyline, landscape',
    variations: ['panoramic view']
  },
  {
    key: 'photography',
    image: '/images/image-4.png',
    keywords: 'camera', // camera, photograph
    variations: ['SLR', 'photorealistic, 8k']
  },
  {
    key: 'beach',
    image: '/images/image-5.png',
    keywords: 'beach, ocean',
    variations: []
  },
  {
    key: 'technology',
    image: '/images/image-6.png',
    keywords: 'internet, computers, technology',
    variations: []
  },
  {
    key: 'pets',
    image: '/images/image-7.png',
    keywords: 'pets, dogs, cats',
    variations: ['puppies', 'kittens']
  },
  {
    key: 'painting',
    image: '/images/image-8.png',
    keywords: 'painting, art',
    variations: ['canvas', 'mural', 'paint pallete']
  },
  {
    key: 'music',
    image: '/images/image-12.png',
    keywords: 'music, instruments, guitar',
    variations: ['piano', 'microphone', 'electric guitar', 'drumset']
  },
  {
    key: 'travel',
    image: '/images/image-9.png',
    keywords: 'travel, world',
    variations: ['plane', 'train', 'car', 'vw van']
  },
  {
    key: 'cooking',
    image: '/images/image-11.png',
    keywords: 'cooking, kitchen, food',
    variations: ['vegetable', 'meat', 'steaks', 'pasta']
  },
  {
    key: 'games',
    image: '/images/image-10.png',
    keywords: 'games, gaming',
    variations: []
  },
  {
    key: 'sport',
    image: '/images/image-13.png',
    keywords: 'sport, excercise, workout',
    variations: []
  },
  {
    key: 'nature',
    image: '/images/image-14.png',
    keywords: 'nature, hiking, mountains',
    variations: []
  },
  {
    key: 'night-sky',
    image: '/images/image-15.png',
    keywords: 'night-sky, stars, moon',
    variations: []
  }
  // {
  //   key: 'universe',
  //   image: '/images/image-16.png',
  //   keywords: 'universe, sun, planets',
  //   variations: []
  // }
] as const

export type Activity = (typeof allActivities)[number]
export type ActivityKey = Activity['key']

const allColors = [
  {
    key: 'blue',
    keywords: 'blue'
  },
  {
    key: 'yellow',
    keywords: 'yellow'
  },
  {
    key: 'red',
    keywords: 'red'
  },
  {
    key: 'green',
    keywords: 'green'
  },
  {
    key: 'pink',
    keywords: 'pink'
  },
  {
    key: 'orange',
    keywords: 'orange'
  },
  {
    key: 'purple',
    keywords: 'purple'
  },
  {
    key: 'brown',
    keywords: 'brown'
  },
  {
    key: 'white',
    keywords: 'white'
  },
  {
    key: 'grey',
    keywords: 'grey'
  },
  {
    key: 'black',
    keywords: 'black'
  },
  {
    key: 'aqua',
    keywords: 'aqua'
  }
] as const

export type Color = (typeof allColors)[number]
export type ColorKey = Color['key']
