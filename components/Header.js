 import Image from 'next/image'
import React from 'react'
 
 const Header = () => {
   return (
     <div className='flex flex-row items-center space-x-5'>
        <Image alt='github' src={"/github.png"} width={100} height={100} />
        <div>
            <p className='text-5xl'>Cari orang</p>
            <p className='text-4xl font-bold '>Github</p>
        </div>
     </div>
   )
 }
 
 export default Header