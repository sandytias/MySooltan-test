import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Button from '@/components/Button'
import UserList from '@/components/UserList'
import Header from '@/components/Header'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  const onSearch = (e) => {
    e.preventDefault()
    if(search) {
      setIsLoading(true)
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
      .then(res => res.json())
      .then(data => {
        const users = data.items
        setResult(users)
      }).finally(() => {
        setIsLoading(false)
      })
     }
  }

  return (
    <div className='space-y-5 py-10'>
      <Head>
        <title>Cari Orang Github</title>
      </Head>
      <Header />
      <form className='flex place-self-center space-x-3' onSubmit={onSearch}>
        <Form value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type='submit' isLoading={isLoading} />
      </form>
       <UserList result={result} /> 
    </div>
  )
}
