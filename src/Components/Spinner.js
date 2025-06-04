import React from 'react'
import loading from './Spinner.gif'
export default function Spinner() {
  return (
    <div className='text-center'><img src={loading} width="50px" alt="loading"/></div>
  )
}
