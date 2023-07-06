import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full h-16 bg-black text-white'>
      <div className='h-full flex justify-between py-2 px-4'>
        <div className='flex items-center'>
          <Image src={'/logo.png'} width={40} height={20} alt='' />
        </div>
        <div className='flex items-center font-semibold text-sm'>
          <div className='p-3 mx-1'>
            <Link href={''}>page1</Link>
          </div>
          <div className='p-3 mx-1'>
            <Link href={''}>page2</Link>
          </div>
          <div className='p-3 mx-1'>
            <Link href={''}>page3</Link>
          </div>
          <div className='p-3 mx-1'>
            <Link href={''}>page4</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
