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

  const tokenInState = useSelector((state: RootState) => state.user.token);
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const lastName = useSelector((state: RootState) => state.user.lastName);
  const state = useSelector((state: RootState) => state.user);
  const [token, setToken] = useState(tokenInState)

  const dispatch = useDispatch()
  
  const [displayForm, setDisplayForm] = useState(false)
  
  useEffect(() => {
    const redirectfunction = () => {
      if (!token) {
        redirect('/signin')
      }
    }
    redirectfunction()
  }, [token])

  return (
    <>
      <section className="h-full flex flex-col items-center pt-10 bg-background-primary">
        <h1 className="text-4xl text-white mb-4 font-medium text-center">Welcome back <br/> {firstName + " " + lastName} !</h1>
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

