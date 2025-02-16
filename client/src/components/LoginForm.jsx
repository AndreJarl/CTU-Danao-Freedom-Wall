import React from 'react'
import Dog from "../assets/dog.jpg"
import { useState } from 'react'

function LoginForm() {
       
    const [isClicked, setIsClicked] = useState(false);


  return (

    <div className='bg-white flex justify-center items-center m-8 px-6'>
        <div className='flex flex-col justify-center items-center mt-2 p-6 
         shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] 
         lg:flex lg:flex-row lg:gap-20 lg:p-8
        '> 
            <div>
                <img className='rounded-2xl w-[300px] lg:w-[400px]' src={Dog} alt="" srcset="" />
            </div>
            <div className='flex flex-col justify-center items-center m-1 font-semibold'>
                <div className='flex flex-col justify-center items-center w-[300px]'>
                <p className='text-3xl text-orange-500 font-bold text-center mt-4 pb-4 lg:w-[400px] lg:text-4xl'>Welcome to CTU Fredoom Wall!</p>
                <p className='text-center text-sm font-normal w-[300px]'>A safe space for students to share their thoughts, stories, and ideas.</p>
                </div>
                { isClicked ? (
                    <div className='shadow-2xl rounded-2xl mt-4 p-6 flex flex-col gap-4 w-[300px] md:w-[500px] lg:w-[300px]'>
                    <input className='font-light p-2 border-2 rounded-lg  border-gray outline-none text-sm' type="name" name="" id="" placeholder='name'/>
                    <input className='font-light p-2 border-2 rounded-lg  border-gray outline-none text-sm' type="email" name="" id="" placeholder='email'/>
                    <input className='font-light p-2 border-2 rounded-lg border-gray outline-none text-sm' type="password" name="" id="" placeholder='password'/>
                    <button className='px-4 py-2 bg-amber-200 rounded-lg'>Sign in</button>
                    <p className='text-xs text-center font-light'>Already have an account? <span onClick={()=> setIsClicked(false)} className=' cursor-pointer text-blue-800'>Log in</span></p>
            </div>
                ) 
                : (
                  <div className='shadow-2xl rounded-2xl mt-4 p-6 flex flex-col gap-4 w-[300px] md:w-[500px] lg:w-[300px]'>
                      <input className='font-light p-2 border-2 rounded-lg  border-gray outline-none text-sm' type="email" name="" id="" placeholder='email'/>
                      <input className='font-light p-2 border-2 rounded-lg border-gray outline-none text-sm' type="password" name="" id="" placeholder='password'/>
                      <button className='px-4 py-2 bg-amber-200 rounded-lg'>Log in</button>
                      <p className='text-xs text-center font-light'>Don't have an account? <span onClick={()=> setIsClicked(true)} className=' cursor-pointer text-blue-800'>Sign in</span></p>
                </div>
                )}
              
            </div>
        </div>
    </div>
  )
}

export default LoginForm