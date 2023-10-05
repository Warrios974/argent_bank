'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch, RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux"
import { connexion, fetchConnexionUser, fetchUserData } from "../GlobalRedux/Features/user/userSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import animation from './animation.module.css'

const INITIAL_STATE = {
  email: 'tony@stark.com',
  password: 'password123',
  remenberMe: false
};

export default function SignInPage() {

    const token = useSelector((state: RootState) => state.user.token);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);
  
    const dispatch = useDispatch<AppDispatch>()

    const [dataForm, setDataForm] = useState(INITIAL_STATE)
    const [emailError, setEmailError] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)

    useEffect(() => {
      const redirectfunction = () => {
        if (token) {
          redirect('/dashboard')
        }
      }
      redirectfunction()
    }, [token])

    useEffect(() => {
      const redirectfunction = () => {
        if (token) {
          redirect('/dashboard')
        }
      }
      redirectfunction()
    }, [error])

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    const timeout = () => {return new Promise(resolve => setTimeout(resolve, 2000));}

    const updateFrom = () => {
      setBtnDisable(false)
      setServerError(true)
    }

    const wait = async () => {
      await timeout
      return updateFrom()
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setServerError(false)
      setBtnDisable(true)
      
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

      if (!dataForm.email.match(regexEmail)) {
        setEmailError(true)
        return
      }

      setEmailError(false)

      const args = {
        email: dataForm.email,
        password: dataForm.password
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
        remenberMe: !dataForm.remenberMe,
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
              {emailError && <span className="block border border-red-600 bg-red-700 text-white text-center p-4 mt-2">Email incorrect</span>}
            </div>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="password">Password</label>
              <input className='border border-black h-9 w-full' type="password" name="password" id="password" 
                onChange={(e) => handleChange(e)}
                value={dataForm.password}
              />
              {serverError && <span className="block border border-red-600 bg-red-700 text-white text-center p-4 mt-2">Votre mot de passe ou votre email est incorrect, veillez vérifier ces informations</span>}
            </div>
            <div className="text-left mb-5">
              <input type="checkbox" name="rememberMe" id="rememberMe" 
                onChange={() => handleChangeCheckBox()}
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
  