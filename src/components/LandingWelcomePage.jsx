import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'


const LandingWelcomePage = () => {

  const [onHover, setOnHover] = useState(false);
  const [toggle, setToggle] = useState(false)
  const emailRef = useRef()
  const passRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [laoding, setLoading] = useState(false)
  let navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      await login(emailRef.current.value, passRef.current.value)
      navigate("/home")
    }
    catch{
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  return (

    <div className="relative w-full">

          <div className={`${toggle ? 'toggleOn' : 'toggleOff'} absolute z-30 w-[400px] h-[500px] bg-navbar bg-opacity-90
                           text-primary top-14 right-20 rounded-3xl border-fontColor border-2 sidebar`}>

                            <div className="flex gap-8 w-full relative flex-col items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                                    className="rounded-full h-14 w-14 border-2 border-fontColor
                                    -translate-y-3 scale-110 stroke-fontColor relative top-10">

                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                                <div className=" flex flex-row gap-4 w-full justify-center relative top-16">

                                    <div className="shrink-0 flex gap-14 flex-col">

                                          <div className="sign-up-text">

                                              <label>
                                                Email
                                              </label>   

                                          </div>

                                          <div className="sign-up-text">

                                              <label>
                                              Password
                                              </label>   

                                          </div>

                                          
                                 

                                    </div>
  
                                    <div className="flex gap-11 flex-col">

                                          <input className="sign-up-input" type="email" ref={emailRef} required />

                                          <input className="sign-up-input" type="password" ref={passRef} required />


                                    </div>
  


                                </div>
                                <div className= "text-red-600 font-poppins relative top-10 text-xl m-4 h-10 w-60">
                                      {error}
                                </div> 

                                <div className="bg-fontColor w-24 h-10 flex items-center 
                                                  justify-center rounded-2xl hover:scale-110
                                                  transition-all duration-300 ease-in-out 
                                                  relative">

                                    <button onClick={handleSubmit}
                                            disabled= {laoding}
                                            className="font-poppins text-white font-semibold
                                                        text-lg hover:font-semibold
                                                        transition-all duration-300 ease-in-out">
                                      Confirm
                                    </button>   

                                </div>

                                <div className="absolute bottom-3 left-3 flex flex-row gap-2">

                                  <h1 className="text-md font-poppins text-fontColor ">
                                    Don't have an account?
                                  </h1>
                                  <a className="text-md font-poppins text-white hover:scale-110 hover:-translate-y-1
                                                transition-all duration-300 ease-in-out" 
                                     href="/signup">
                                    Click here!
                                  </a>
                                </div>
          </div>
            
          </div>

          <div className="relative w-full mt-16 z-0">
          
            <div className="flex flex-row">

                <div className="relative flex flex-col ml-20">


                  <div className="flex flex-auto">
                    <h1 className="text-white text-4xl font-poppins font-semibold
                                    transition-all duration-500 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Welcome to Ezperanza
                    </h1>
                  </div>
                  
                  <div>
                    <h2 className="text-white text-lg font-poppins
                                    transition-all duration-300 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Enjoy every moment spent here
                    </h2>
                  </div>
                  
                </div>

                <div className="absolute flex right-20 gap-6 items-center">


                      <h1 className={`${toggle ? 'hover-text-landing' : 'normal-text-landing'} cursor-pointer`}
                          onPointerEnter={() => setOnHover (true)}
                          onPointerLeave={() => setOnHover (false)}
                          onClick={() => setToggle((prev) => !prev)}
                        >Login here!
                      </h1>              





                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                          className={`${toggle ? 'hover-icon-landing' : 'normal-icon-landing'} flex items-center cursor-pointer`}
                          onPointerEnter={() => setOnHover (true)}
                          onPointerLeave={() => setOnHover (false)}
                          onClick={() => setToggle((prev) => !prev)}>

                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>


          

                </div>

                
            </div>



          </div>

    </div>
  )
}

export default LandingWelcomePage