import { useRouter } from 'next/router'
import React from 'react'

const Detail  = () => {

    const router = useRouter()
    const {username} = router.query

  return (
    <div>Detail halaman untuk User : {username}</div>
  )
}

export default Detail