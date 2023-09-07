import TransactionCard from "@/components/transactionCard/TransactionCard"

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
  return (
    <>
      <section>
        <h1>Welcome back</h1>
        <button>Edit Name</button>
      </section>
      <section>
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
      </section>
    </>
  )
}
