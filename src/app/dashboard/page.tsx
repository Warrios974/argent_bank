'use client'

import ChangeInfoUser from "@/components/forms/ChangeInfoUser"
import TransactionCard from "@/components/transactionCard/TransactionCard"
import { useState } from "react"

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

  const [displayForm, setDisplayForm] = useState(false)

  return (
    <>
      <section className="h-full flex flex-col items-center pt-10 bg-background-primary">
        <h1 className="text-4xl text-white mb-4 font-medium">Welcome back</h1>
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
