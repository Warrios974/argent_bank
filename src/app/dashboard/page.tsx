'use client'

import ChangeInfoUser from "@/components/forms/ChangeInfoUser"
import TransactionCard from "@/components/transactionCard/TransactionCard"
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { connection, initUserData } from "../GlobalRedux/Features/user/userSlice";
import { redirect } from "next/navigation";

const dataTransactionCard = [
  {
    type : 'Argent Bank Checking (x8349)',
    sum: 2082.79,
    state: 'Available Balance'
  },
  {
    type : 'Argent Bank Savings (x6712)',
    sum: 10928.42,
    state: 'Available Balance'
  },
  {
    type : 'Argent Bank Credit Card (x8349)',
    sum: 184.30,
    state: 'Current Balance'
  }
]

export default function DashboardPage() {

  const token = useSelector((state: RootState) => state.user.token);
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const dispatch = useDispatch()
  
  const [displayForm, setDisplayForm] = useState(false)
  const connexionInLocalStorage = localStorage.getItem("connexion");
  const connexion = connexionInLocalStorage && JSON.parse(connexionInLocalStorage)

  useEffect(() => {
    if (connexionInLocalStorage) {
      dispatch(connection(connexion))
    }
  }, [dispatch, connexionInLocalStorage, connexion])

  const { data, isLoading, error } = useQuery('userInfos', async () => {
      const currentToken = token !== '' ? token : connexion.token
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: new Headers({ 'Authorization' : `Bearer ${currentToken}`}),
      })
      const data = await response.json()
      return data
  })
  

  useEffect(() => {
    const updateUserData = async () => {
      console.log('====');
      console.log('error',error);
      console.log('====');
      if (data && !isLoading) {
        const firstName = data.body.firstName
        const lastName = data.body.lastName
        
        const args = {
          firstName : firstName,
          lastName : lastName
        }

        await dispatch(initUserData(args))
      }
    }

    updateUserData()
  }, [data, dispatch, isLoading])

  return (
    <>
      <section className="h-full flex flex-col items-center pt-10 bg-background-primary">
        <h1 className="text-4xl text-white mb-4 font-medium text-center">Welcome back <br/> {firstName} </h1>
        {displayForm && <ChangeInfoUser displayForm={setDisplayForm}/>}
        {!displayForm && <button
          className="bg-color-primary text-sm text-white py-2 px-4 border-r-2 border-b-2 border-gray-600 font-bold w-auto"
          onClick={() => setDisplayForm(true)}
          >

          Edit Name
        </button>}
        <div className="w-10/12 mt-10">
          {
            dataTransactionCard.map((data, index) => (
              <TransactionCard
                key={index}
                type={data.type}
                sum={data.sum}
                state={data.state}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

