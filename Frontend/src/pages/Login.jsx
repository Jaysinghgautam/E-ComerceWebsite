import React, { useState } from 'react'

function Login() {

  const [currentState, setCurrentState] =  useState('Sign Up');

  const onsubmithandler =  async (e) => {
    e.preventDefault();
  }

  return (
   <form onSubmit={onsubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800  ' action="">
<div className="inline-flex items-center gap-2 mb-2 mt-10">
  <p className='prata-regular text-3xl' > {currentState} </p>
  <hr className='border-none h-[1.5px]w-8 bg-gray-800 '/>
</div>
   {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Username' required />}
   <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='gmail' required />
   <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />  
   <div className="w-full flex justify-between text-sm mt-[-80]"> 
    <p className='curosr-pointer' >Forgot your password?</p>
    {
      currentState === 'Login' ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')} >Create account</p>
      : <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}  >Login Here</p>
    }
   </div>
   <button>{currentState === 'Login' ? 'Sign In' : 'Sign Up'} </button>
   </form>
  )
}

export default Login