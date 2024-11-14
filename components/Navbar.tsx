import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src='/icons/logo.svg' alt='Logo' width={32} height={32} className='max-sm:size-10' />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Zync</p>
      </Link>

      <div className='flex-between gap-5'>
        {/* Clerk User Profile  */}
        <MobileNavbar />
      </div>
    </nav>
  )
}

export default Navbar