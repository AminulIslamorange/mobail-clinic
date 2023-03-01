import React, { useContext } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { createUser, updateName, verifyEmail, signInWithGoogle } =
    useContext(AuthContext)

  // Signup using Email & Pass
  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value


    //1. Create Account
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        //2. Update Name
        updateName(name)
          .then(() => {
            toast.success('Name Updated')
            fetch('https://dr-aminul-backend.vercel.app/login', {
              method: 'POST',
              body: JSON.stringify({email, password}),
            })
              .then((response) => response.json())
              .then((json) =>{
                if (json.token) {
                  localStorage.setItem('token' , json.token)
                }
                console.log();
              });

            // 3. Email verification
            verifyEmail()
              .then(() => {
                toast.success('Please check your email for verification link')
                navigate(from, { replace: true })
              })
              .catch(error => {
                toast.error(error.message)
              })
          })
          .catch(error => {
            toast.error(error.message)
          })
      })
      .catch(error => console.log(error))
  }

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }

  return (
    <div className='flex justify-center items-center pt-8 mb-20'>
       
      <div className='lg:grid grid-cols-2 gap-10 items-center  rounded-xl'>
        <div className='img hidden lg:block'>
          <img src="https://i.pinimg.com/originals/02/fc/da/02fcda11cbfb2a84537f9d059b4c81b2.gif" alt="" />
        </div>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-orange-400'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Register</h1>
            <p className='text-sm text-gray-400'>Create a new account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-12 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 bg-white focus:border-gray-900 text-gray-900'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <div>
                <button
                  type='submit'
                  className='w-full px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-orange-500 hover:text-white text-gray-100'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Signup with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div className='flex justify-center space-x-4'>
            <button
              onClick={handleGoogleSignin}
              aria-label='Log in with Google'
              className='p-3 rounded-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fill-current'
              >
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
            </button>
            <button aria-label='Log in with Twitter' className='p-3 rounded-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fill-current'
              >
                <path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'></path>
              </svg>
            </button>
           
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Already have an account yet?{' '}
            <Link to='/login' className='hover:underline text-gray-600'>
              Sign In
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
