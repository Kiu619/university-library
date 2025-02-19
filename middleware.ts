export { auth as middleware } from "@/auth";

// middleware/cors.ts
import Cors from 'cors'

// Initializing the cors middleware
export const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'], // Các phương thức HTTP được phép
  origin: 'https://university-library-f8ntcnh55-kiuus-projects.vercel.app', // Chỉ định nguồn cụ thể
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: any, res: any, fn: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export { runMiddleware }
