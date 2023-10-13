'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch, RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux"
import { fetchConnexionUser, fetchUserData } from "../GlobalRedux/Features/user/userSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import animation from './animation.module.css'

const INITIAL_STATE = {
  email: 'tony@stark.com',
  password: 'password123',
  rememberMe: false
};

export default function SignInPage() {

    const token = useSelector((state: RootState) => state.user.token);
    const rememberMe = useSelector((state: RootState) => state.user.rememberMe);
    const error = useSelector((state: RootState) => state.user.error);
  
    const dispatch = useDispatch<AppDispatch>()

    const [dataForm, setDataForm] = useState(INITIAL_STATE)
    const [emailError, setEmailError] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)

    const ERROR_LOGIN = () => {
      setBtnDisable(false)
      setServerError(true)
    }
    const ERROR_SERVER = () => {
      setBtnDisable(false)
      setLoginError(true)
    }

    const ERROR_EMAIL = () => {
      setBtnDisable(false)
      setEmailError(true)
    }

    const timeout = (fn: () => void) => {
      return new Promise(() => setTimeout(() => {
        fn()
      }, 2000));
    }

    const wait = async (fn: () => void) => {
      return await timeout(fn)
    }

    useEffect(() => {
      const redirectfunction = () => {
        if (token) {
          redirect('/dashboard')
        }
      }
      redirectfunction()
    }, [token])
    
    useEffect(() => {
      const errorState = () => {
        if (error === '400') {
          wait(ERROR_LOGIN)
        }
        if (error === 'Failed to fetch') {
          wait(ERROR_SERVER)
        }
      }
      errorState()
    }, [error])

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setServerError(false)
      setBtnDisable(true)
      
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

      if (!dataForm.email.match(regexEmail)) {
        wait(ERROR_EMAIL)
        return
      }

      setEmailError(false)

      const args = {
        email: dataForm.email,
        password: dataForm.password,
        rememberMe: dataForm.rememberMe
      }

      dispatch(fetchConnexionUser(args))

    }

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      
      const value = e.target.value
      const id = e.target.id

      setDataForm({
        ...dataForm,
        [id]: value,
      })
    }

    const handleChangeCheckBox = () => {
      setDataForm({
        ...dataForm,
        rememberMe: !dataForm.rememberMe,
      })
      
    }
    
    if(isClient) return (
      <section className="h-full flex justify-center bg-background-primary">
        <div className="w-80 h-fit text-center bg-white mt-10 px-5 py-5">
          <FontAwesomeIcon icon={faCircleUser} className="text-lg" color="black"/>
          <h1 className="font-bold my-4 text-2xl">Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="Email">Email</label>
              <input className={`border border-black h-9 w-full`} type="email" name="email" id="email"
                onChange={(e) => handleChange(e)}
                value={dataForm.email}
              />
              {emailError && <span className="block border border-red-600 bg-red-700 text-white text-center p-4 mt-2">Incorrect email</span>}
            </div>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="password">Password</label>
              <input className='border border-black h-9 w-full' type="password" name="password" id="password" 
                onChange={(e) => handleChange(e)}
                value={dataForm.password}
              />
              {serverError && <span className="block border border-red-600 bg-red-700 text-white text-center p-4 mt-2">Your password or email is incorrect, please check this information</span>}
              {loginError && <span className="block border border-red-600 bg-red-700 text-white text-center p-4 mt-2">We had a problem contacting the server, please try again later</span>}
            </div>
            <div className="text-left mb-5">
              <input type="checkbox" name="rememberMe" id="rememberMe" 
                onChange={() => handleChangeCheckBox()}
                defaultChecked={rememberMe}
              />
              <label className='pl-3' htmlFor="rememberMe">Remember me</label>
            </div>
            <button className={`${btnDisable ? 'bg-gray-300' : 'bg-color-primary'} w-full text-white py-2 font-bold underline  underline-offset-1`} type="submit" disabled={btnDisable}>
              {!btnDisable && 'Sign In'}
              {btnDisable && <span className={animation.ldsRing}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>}
            </button>
          </form>
        </div>
      </section>
    )
  }
  