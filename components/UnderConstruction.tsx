'use client'

import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'

const UnderConstruction = () => {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <div className='border p-4 mt-4 rounded-lg bg-yellow-400 flex items-center justify-between transition-all'>
        <div className='flex gap-2'>
          <AlertTriangle />
          Site is still under reconstruction (September 2024)
        </div>
        <X className='cursor-pointer' onClick={() => setShow(false)} />
      </div>
    )
  }

  return null
}

export default UnderConstruction
