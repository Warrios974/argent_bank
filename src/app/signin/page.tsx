'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux"
import { connection } from "../GlobalRedux/Features/user/userSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { redirect } from 'next/navigation'

const INITIAL_STATE = {
  email: 'tony@stark.com',
  password: 'password123',
  remenbered: false
};

export default function SignInPage() {

    const connected = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch()

    const [dataForm, setDataForm] = useState(INITIAL_STATE)

    useEffect(() => {
      const redirectfunction = () => {
        if (connected) {
          redirect('/dashboard')
        }
      }
      redirectfunction()
    }, [connected])

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      console.log('====');
      console.log('dataForm',{
        "email": dataForm.email,
        "password": dataForm.password,
      });
      console.log('====');
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
          method: "POST", 
          headers: new Headers({ 'Content-Type': 'application/json'}),
          body: JSON.stringify({
            "email": dataForm.email,
            "password": dataForm.password,
          })
        })
        const data = await response.json()

        const token = data.body.token

        console.log('====');
        console.log('data',token);
        console.log('====');
        return dispatch(connection(token))
      } catch (error) {
        

        console.log('====');
        console.log('error',error);
        console.log('====');
      }

    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      
      const value = e.target.value
      const id = e.target.id

      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

      if (id === 'email' && !value.match(regexEmail)) return

      setDataForm({
        ...dataForm,
        [id]: value,
      })
    }

    const handleChangeCheckBox = () => {
      setDataForm({
        ...dataForm,
        remenbered: !dataForm.remenbered,
      })
      
    }

    console.log('====');
    console.log('connected',connected);
    console.log('====');
    
    return (
      <section className="h-full flex justify-center bg-background-primary">
        <div className="w-80 h-96 text-center bg-white mt-10 px-5 py-5">
          <FontAwesomeIcon icon={faCircleUser} className="text-lg" color="black"/>
          <h1 className="font-bold my-4 text-2xl">Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="Email">Email</label>
              <input className='border border-black h-9 w-full' type="email" name="email" id="email"
                onChange={(e) => handleChange(e)}
                value={dataForm.email}
              />
            </div>
            <div className="text-left font-bold mb-5">
              <label className='block' htmlFor="password">Password</label>
              <input className='border border-black h-9 w-full' type="text" name="password" id="password" 
                onChange={(e) => handleChange(e)}
                value={dataForm.password}
              />
            </div>
            <div className="text-left mb-5">
              <input type="checkbox" name="rememberMe" id="rememberMe" 
                onChange={() => handleChangeCheckBox()}
              />
              <label className='pl-3' htmlFor="rememberMe">Remember me</label>
            </div>
            <button className="bg-color-primary w-full text-white py-2 font-bold underline  underline-offset-1" type="submit">Sign In</button>
          </form>
        </div>
      </section>
    )
  }
  