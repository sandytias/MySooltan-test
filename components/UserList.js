import React from 'react'
import UserItem from './UserItem'

const UserList = ({result}) => {
  return (
    <div className='border rounded-[8px] w-full space-y-3 pb-10'>
        <p className='text-center p-[20px]'>Hasil pencarian :</p>
        {result.map((user, index) => {
            return (
                <UserItem key={index} user={user } />
            )
        })}
    </div>
  )
}

export default UserList