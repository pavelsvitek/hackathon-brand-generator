import Image from 'next/image'
import { Inter, Source_Sans_3 } from 'next/font/google'
import TopBar from '@/components/TopBar'
import Heading from '@/components/Heading'
import TextInput from '@/components/TextInput'
import ActionButton from '@/components/ActionButton'
import React from 'react'
import ImageTile from '@/components/ImageTile'
import useAutoFocus from '@/utils/hooks'

const inter = Inter({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

type Step = 1 | 2 | 3 | 4 | 'loading'
type Style = (typeof allStyles)[number]

const allStyles = [
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
] as const

const enabledStyles: Style[] = [
  //
  'enhance',
  'low-poly',
  'line-art',
  'origami'
]

const isStyleEnabled = (style: Style) => enabledStyles.includes(style)

const allActivities = [
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
    keywords: 'city lanscape, urban'
  },
  {
    key: 'photography',
    image: '/images/image-4.png',
    keywords: 'photography, camera'
  },
  {
    key: 'beach',
    image: '/images/image-5.png',
    keywords: 'beach, ocean, vacation'
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

type Activity = (typeof allActivities)[number]
type ActivityKey = Activity['key']

const enabledActivityKeys: ActivityKey[] = [
  'writing',
  'books',
  'city',
  'photography',
  'beach'
]
const enabledActivities = allActivities.filter((activity) =>
  enabledActivityKeys.includes(activity.key)
)

export default function Home() {
  const [step, setStep] = React.useState<Step>(1)
  const [name, setName] = React.useState('')
  const [job, setJob] = React.useState('')
  const [activities, setActivities] = React.useState<ActivityKey[]>([])
  const [colors, setColors] = React.useState<string[]>([])
  const [styles, setStyles] = React.useState<Style[]>([])

  function handleSetActivity(activity: ActivityKey) {
    if (activities.length === 2 && !activities.includes(activity)) {
      return
    }
    if (activities.includes(activity)) {
      setActivities(activities.filter((a) => a !== activity))
    } else {
      setActivities([...activities, activity])
    }
  }

  function handleSetColor(color: string) {
    if (colors.length === 3 && !colors.includes(color)) {
      return
    }
    if (colors.includes(color)) {
      setColors(colors.filter((c) => c !== color))
    } else {
      setColors([...colors, color])
    }
  }

  function handleToggleStyle(style: Style) {
    setStyles([style])
  }

  return (
    <div className=''>
      <TopBar />

      <main
        className={`mx-auto min-h-screen max-w-screen-xl border-zinc-700 px-24 py-5 ${sourceSans3.className}`}
      >
        {/* Step 3 - Name and occupation */}
        {step === 1 && (
          <div className='mt-8'>
            <Heading>Nice to meet you!</Heading>
            {/*  */}
            <div className='text-2xl mt-2'>
              Introduce yourself and we can get started
            </div>

            <div className='text-xl mt-8'>What’s your name?</div>
            <TextInput value={name} onChange={setName} />

            <div className='text-xl mt-8'>
              Now tell me in a few words what you do for a living
            </div>
            <TextInput value={job} onChange={setJob} />

            <div className='text-xl mt-8'>
              <ActionButton onClick={() => setStep(2)}>Next</ActionButton>
            </div>
          </div>
        )}

        {/* Step 3 - Mood images */}
        {step === 2 && (
          <div className='text-xl mt-8'>
            <Heading>Hi {name}! Let’s get to know each other</Heading>
            <div className='text-2xl mt-2'>
              Choose images of things you like and do, for both work and fun
            </div>

            <div className='flex flex-wrap justify-between mt-8'>
              {allActivities.map((activity) => (
                <ImageTile
                  key={activity.key}
                  disabled={!enabledActivityKeys.includes(activity.key)}
                  src={activity.image}
                  selected={activities.includes(activity.key)}
                  onClick={() => handleSetActivity(activity.key)}
                />
              ))}
              {/* <hr /> */}
              {/* <ImageTile src='/images/image-1.png' />
              <ImageTile src='/images/image-2.png' />
              <ImageTile src='/images/image-3.png' />
              <ImageTile src='/images/image-4.png' />
              <ImageTile src='/images/image-5.png' />
              <ImageTile src='/images/image-6.png' />
              <ImageTile src='/images/image-7.png' />
              <ImageTile src='/images/image-8.png' />
              <ImageTile src='/images/image-9.png' />
              <ImageTile src='/images/image-10.png' />
              <ImageTile src='/images/image-11.png' />
              <ImageTile src='/images/image-12.png' />
              <ImageTile src='/images/image-13.png' />
              <ImageTile src='/images/image-14.png' />
              <ImageTile src='/images/image-15.png' />
              <ImageTile src='/images/image-16.png' /> */}
            </div>

            <div className='mt-8'>
              <ActionButton onClick={() => setStep(1)}>Back</ActionButton>
              <ActionButton onClick={() => setStep(3)} className='ml-2'>
                Next
              </ActionButton>
            </div>
          </div>
        )}

        {/* Step 3 - Colors */}
        {step === 3 && (
          <div className='text-xl mt-8'>
            <Heading>Great! Now choose some colours</Heading>
            <div className='text-2xl mt-2'>Choose up to 3 colours</div>

            <div className='flex flex-wrap justify-between mt-8'>
              <ImageTile
                src='/images/color-blue.png'
                selected={colors.includes('blue')}
                onClick={() => handleSetColor('blue')}
              />
              <ImageTile
                src='/images/color-yellow.png'
                selected={colors.includes('yellow')}
                onClick={() => handleSetColor('yellow')}
              />
              <ImageTile
                src='/images/color-red.png'
                selected={colors.includes('red')}
                onClick={() => handleSetColor('red')}
              />
              <ImageTile
                src='/images/color-green.png'
                selected={colors.includes('green')}
                onClick={() => handleSetColor('green')}
              />
              <ImageTile
                src='/images/color-pink.png'
                selected={colors.includes('pink')}
                onClick={() => handleSetColor('pink')}
              />
              <ImageTile
                src='/images/color-orange.png'
                selected={colors.includes('orange')}
                onClick={() => handleSetColor('orange')}
              />
              <ImageTile
                src='/images/color-purple.png'
                selected={colors.includes('purple')}
                onClick={() => handleSetColor('purple')}
              />
              <ImageTile
                src='/images/color-brown.png'
                selected={colors.includes('brown')}
                onClick={() => handleSetColor('brown')}
              />
              <ImageTile
                src='/images/color-white.png'
                selected={colors.includes('white')}
                onClick={() => handleSetColor('white')}
              />
              <ImageTile
                src='/images/color-grey.png'
                selected={colors.includes('grey')}
                onClick={() => handleSetColor('grey')}
              />
              <ImageTile
                src='/images/color-black.png'
                selected={colors.includes('black')}
                onClick={() => handleSetColor('black')}
              />
              <ImageTile
                src='/images/color-aqua.png'
                selected={colors.includes('aqua')}
                onClick={() => handleSetColor('aqua')}
              />
            </div>

            <div className='mt-8'>
              <ActionButton onClick={() => setStep(2)}>Back</ActionButton>
              <ActionButton onClick={() => setStep(4)} className='ml-2'>
                Next
              </ActionButton>
            </div>
          </div>
        )}

        {/* Step 4 - Style */}
        {step === 4 && (
          <div className='text-xl mt-8'>
            <Heading>Excellent! Now choose a style</Heading>
            <div className='text-2xl mt-2'>
              We’ll combine everything to make your custom design
            </div>

            <div className='flex flex-wrap justify-between mt-8'>
              {allStyles.map((style) => (
                <ImageTile
                  key={style}
                  src={`/images/style-${style}.png`}
                  disabled={!isStyleEnabled(style)}
                  selected={styles.includes(style)}
                  onClick={() => handleToggleStyle(style)}
                />
              ))}
            </div>

            <div className='mt-8'>
              <ActionButton onClick={() => setStep(2)}>Back</ActionButton>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
