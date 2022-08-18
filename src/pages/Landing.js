import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Landing = () => {
  return (
    <section className='flex flex-col lg:flex-row h-screen'>
      <section className="h-[20%] w-[100%] rotate-[0.2deg] lg:h-full  lg:w-[70%] bg-[url('https://i.ibb.co/v1DGg9c/simplegeometricshapesbackgroundpattern10-generated.jpg')] bg-cover bg-no-repeat bg-center">
      </section>
      <section className='p-[3em] w-full lg:w-[50%] flex flex-col lg:justify-center space-y-5 lg:space-y-10'>

        <div className='relative'>
          <img src={logo} alt="" className="-ml-2"/>
        </div>
        <h2 className='font-bold text-xl md:text-3xl'>Hi there!</h2>
        <p className=' text-gray-400 text-md md:text-lg'>No, you shouldn't be confused. Cade uses your personality, skills, etc to predict a great career for you</p>
        <Link to="/personality-test">
        <button className='px-5 py-2 bg-[#3d63d2] rounded-lg text-white'>Start Here</button>
        </Link>
      </section>
    </section>
  )
}

export default Landing