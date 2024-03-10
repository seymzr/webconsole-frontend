import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='absolute top-0 z-10 left-0 w-full flex items-center justify-between px-[20px] py-[42px]'>
<div>
  <Image className='w-[128px] ' src="/images/logo.svg" alt='logo.svg' width={500} height={500} />
</div>
<div>
  <Link href="/men"  className='mx-3 text-[14px]' >Men's</Link>
  <Link href="/women" className='mx-3 text-[14px]'  >Women's</Link>
  <Link href="/kids"  className='mx-3 text-[14px]' >Kid's</Link>
  <Link href="/about"  className='mx-3 text-[14px]' >About Us</Link>
</div>
<div className='flex items-center justify-between'>
<Image className='w-6 ' src="/images/search.svg" alt='logo.svg' width={500} height={500} />
<Image className='w-6 mx-[32px]' src="/images/cart.svg" alt='logo.svg' width={500} height={500} />
<Image className='w-6 ' src="/images/profile.svg" alt='logo.svg' width={500} height={500} />
</div>

    </div>
  )
}

