import Link from 'next/link'
import { BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='w-full h-20 bg-black font-semibold text-white py-2'>
      <div className='flex justify-center'>
        <div className='p-2'>
          <Link href={'https://github.com/fffk10'}>
            <BsGithub />
          </Link>
        </div>
        <div className='p-2'>
          <Link href={'https://twitter.com/warafffk10'}>
            <BsTwitter />
          </Link>
        </div>
      </div>
      <div className='flex justify-center text-sm'>
        <div>© Copyright 2023 fffk10, All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
