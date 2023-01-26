import Footer from '@/components/Footer'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <div className='flex min-h-screen '>
            <main className='m-auto w-1/3'>
                {children}
            </main>
        </div>
        <Footer />
    </>
  )
}

export default Layout