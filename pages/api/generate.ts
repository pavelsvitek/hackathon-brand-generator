// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Activity, ActivityKey, Style, allActivities } from '@/types'

// type ResponseData = {
//   status: string
// }

type RequestPayload = {
  name: string
  job: string
  activities: ActivityKey[]
  colors: string[]
  styles: Style[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.info(`${req.method} ${req.url}`)

  if (req.method === 'POST') {
    console.log(req.body)
    // console.log(process.env.STABILITY_API_KEY)
    // const style =

    const { name, job, colors, activities, styles } = req.body as RequestPayload

    const selectedActivities = allActivities.filter((activity) =>
      activities.includes(activity.key)
    )

    try {
      const textPrompts = [
        {
          text: `Photograph ${selectedActivities
            .map((a) => a.keywords)
            .join(' ')} backlight highly detailed`,
          weight: 2
        }
        // {
        //   text: 'wall wallpaper room couch person man woman people',
        //   weight: -2
        // }
      ]

      if (colors.length > 0) {
        textPrompts.push({
          text: colors.join(' '),
          weight: 0.1
        })
        // colors.forEach((color) => {
        //   textPrompts.push({
        //     text: color,
        //     weight: 0.1
        //   })
        // })
      }

      const mlQueryPayload = {
        height: 512,
        width: 512,
        // "cfg_scale": 7,
        // clip_guidance_preset: 'FAST_BLUE',
        // sampler: 'K_DPM_2_ANCESTRAL',
        samples: 3,
        steps: 100,
        style_preset: styles[0],
        text_prompts: textPrompts
        // style_preset: 'low-poly',
        // text_prompts: [
        //   {
        //     text: 'Books in Nature',
        //     weight: 1
        //   },
        //   {
        //     text: 'light blue orange',
        //     weight: 0.1
        //   }
        // ]
      }

      console.log(JSON.stringify(mlQueryPayload))

      const response = await axios.post(
        'https://api.stability.ai/v1/generation/stable-diffusion-xl-beta-v2-2-2/text-to-image',
        mlQueryPayload,
        {
          headers: {
            Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
            // 'Accept': 'image/png',
          }
        }
      )
      // console.log(response.headers)
      // console.log(response.data)

      return res.status(200).json({
        prompt: textPrompts,
        ...(response?.data || {})
      })
    } catch (err) {
      console.log(err)
      console.error(err)
      return res.status(500).json({ status: 'error' })
    }
  }

  return res.status(400).json({ status: 'Malformed API request!' })
}
