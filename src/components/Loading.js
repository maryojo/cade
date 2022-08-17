import React from 'react'
import { Rings } from 'react-loader-spinner'


const Loading = () => {
  return (
    <div className='flex flex-col items-center space-y-10'>
      <Rings color="#3d63d2" height={100} width={100} /> 
      <h3>Loading...</h3>
    </div>
  )
}

export default Loading