// export default function Error() {
//   return (
//     <main className='flex justify-center my-4'>
//       <h1 className='text-2xl text-primary text-center'>Error</h1>
//     </main>
//   )
// }

"use client"

import { Button } from "./button"

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <span className="text-xl font-bold">Error</span>
      <Button onClick={reset}>Retry</Button>
    </>
  )
}
