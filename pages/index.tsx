/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter, Source_Sans_3 } from 'next/font/google'
import TopBar from '@/components/TopBar'
import Heading from '@/components/Heading'
import TextInput from '@/components/TextInput'
import ActionButton from '@/components/ActionButton'
import React from 'react'
import ImageTile from '@/components/ImageTile'
import useAutoFocus from '@/utils/hooks'
import axios from 'axios'
import { ActivityKey, Style, allActivities, allStyles } from '@/types'
import Spinner from '@/components/Spinner'
import { imagesBase64 } from '@/images'

// const inter = Inter({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

type Step = 1 | 2 | 3 | 4 | 'loading' | 'error' | 'result'

const enabledStyles: Style[] = [
  //
  'enhance',
  'low-poly',
  'line-art',
  'origami'
]

const isStyleEnabled = (style: Style) => enabledStyles.includes(style)

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

  function handleReset() {
    setGeneratedImages([])
    setColors([])
    setActivities([])
    setStyles([])
    setStep(1)
  }

  const [generatedImages, setGeneratedImages] = React.useState<string[]>([])

  async function handleGenerate() {
    setStep('loading')

    try {
      type Response = {
        prompt: string
        artifacts: {
          base64: string
          finishReason: 'SUCCESS' | 'ERROR'
          seed: number
        }[]
      }
      const response = await axios.post<Response>('/api/generate', {
        name,
        job,
        activities,
        colors,
        styles
      })

      setGeneratedImages([
        ...generatedImages,
        ...response.data.artifacts
          .filter((a) => a.finishReason === 'SUCCESS')
          .map((a) => a.base64)
      ])

      setStep('result')
    } catch (err) {
      console.error(err)
      setStep('error')
    }
  }

  return (
    <div className=''>
      {/* <TopBar /> */}

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
              <ActionButton disabled={!name} onClick={() => setStep(2)}>
                Next
              </ActionButton>
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
            </div>

            <div className='mt-8'>
              <ActionButton onClick={() => setStep(1)}>Back</ActionButton>
              <ActionButton
                disabled={activities.length === 0}
                onClick={() => setStep(3)}
                className='ml-2'
              >
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
              <ActionButton
                disabled={colors.length === 0}
                onClick={() => setStep(4)}
                className='ml-2'
              >
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
              <ActionButton
                disabled={styles.length === 0}
                onClick={() => handleGenerate()}
                className='ml-2'
              >
                Generate!
              </ActionButton>
            </div>
          </div>
        )}

        {/* Step - Loading */}
        {step === 'loading' && (
          <div className='text-xl mt-8'>
            <Heading>Generating suggestions .. </Heading>
            <div className='text-2xl mt-2'>
              Please, wait. This process can take up to 1 minute.
            </div>

            <div className='flex flex-wrap justify-between mt-8'>
              <Spinner />
            </div>

            {/* <div className='mt-8'>
              <ActionButton onClick={() => setStep(3)}>Back</ActionButton>
            </div> */}
          </div>
        )}

        {/* Step - Error */}
        {step === 'error' && (
          <div className='text-xl mt-8'>
            <Heading>Something went wrong :-( </Heading>
            <div className='text-2xl mt-2'>Let’s try again!</div>

            <div className='flex flex-wrap justify-between mt-8'>
              <ActionButton onClick={() => handleGenerate()}>
                Try again!
              </ActionButton>
            </div>

            <div className='mt-8'>
              <ActionButton onClick={() => setStep(3)}>Back</ActionButton>
            </div>
          </div>
        )}

        {/* Step - Result */}
        {step === 'result' && (
          <div className='text-xl mt-8'>
            <Heading> Choose your favorite</Heading>
            <div className='text-2xl mt-2'>
              Click on ‘variation’ to generate variations of a design or
              generate more designs.
            </div>

            <div className='flex flex-wrap mt-8'>
              {generatedImages.map((image, index) => (
                <div key={index} className='mx-5 my-5'>
                  <img
                    src={`data:image/png;base64,${image}`}
                    width={300}
                    height='auto'
                    alt='Generated design'
                  />
                </div>
              ))}
            </div>
            <div className='flex justify-center'>
              <ActionButton onClick={() => handleGenerate()}>
                Generate 3 more suggestions!
              </ActionButton>
            </div>

            <div className='mt-8'>
              <ActionButton onClick={() => handleReset()}>
                Start again!
              </ActionButton>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
