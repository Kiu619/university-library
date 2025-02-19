import ImageKit from 'imagekit'
import config from '@/lib/config'
import { NextResponse } from 'next/server'
import { cors, runMiddleware } from '@/middleware'
import { NextApiRequest, NextApiResponse } from 'next'

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  }
} = config

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Rest of your API logic
  const authParams = imagekit.getAuthenticationParameters()
  res.status(200).json(authParams)
}
