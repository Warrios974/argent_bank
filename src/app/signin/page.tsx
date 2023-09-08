'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux"
import { connection, logout } from "../GlobalRedux/Features/user/userSlice";
import { useEffect } from "react";
import { redirect } from 'next/navigation'

export default function SignInPage() {

    const connected = useSelector((state: RootState) => state.user.isConnected);
    const dispatch = useDispatch()

    useEffect(() => {
      const redirectfunction = () => {
        if (connected) {
          redirect('/dashboard')
        }
      }
      redirectfunction()
    }, [connected])

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      dispatch(connection())
    }
    
    return (
      <section className="h-full flex justify-center bg-background-primary">
        <div className="w-80 h-96 text-center bg-white mt-10 px-5 py-5">
          <FontAwesomeIcon icon={faCircleUser} className="text-lg" color="black"/>
          <h1 className="font-bold my-4 text-2xl">Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="username">Username</label>
              <input className='border border-black h-9 w-full' type="text" name="username" id="username" />
            </div>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="password">Password</label>
              <input className='border border-black h-9 w-full' type="text" name="password" id="password" />
            </div>
            <div className="text-left mb-5">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label className='pl-3' htmlFor="rememberMe">Remember me</label>
            </div>
            <button className="bg-color-primary w-full text-white py-2 font-bold underline  underline-offset-1" type="submit">Sign In</button>
          </form>
        </div>
      </section>
    )
  }
  