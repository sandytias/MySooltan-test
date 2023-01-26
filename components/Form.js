import React from 'react'

const Form = ({value, onChange}) => {
  return (
    <input 
        placeholder='Cari User Github' 
        className='border border-zinc-100 p-[20px] rounded-[8px]' 
        value={value}
        onChange={onChange}
    /> 
  )
} 

export default Form