'use client'
import { ChevronUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
// import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          {'Footer.Back to top'}
        </Button>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto'>
          <div>
            <h3 className='font-bold mb-2'>{'Footer.Get to Know Us'}</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/careers'>{'Footer.Careers'}</Link>
              </li>
              <li>
                <Link href='/page/blog'>{'Footer.Blog'}</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center text-sm'>
            <p>2000-2024,{APP_NAME},Inc. or its affiliates</p>
          </div>
          <div className='mt-8 flex justify-center text-sm text-gray-400'>
            123,Main Street, Anytown, CA, Zip 12345 | +1-123-456-7890
          </div>
        </div>
      </div>
    </footer>
  )
}
