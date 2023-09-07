import { TransactionInfoProps } from "@/utils/models/types"
import Link from "next/link"

export default function TransactionCard({ type, sum, state} : TransactionInfoProps) {
  return (
    <div className="w-full flex justify-between items-center bg-white p-5 mb-6">
        <div className="flex flex-col ">
            <span>{type}</span>
            <span className="font-bold text-4xl">${sum}</span>
            <span>{state}</span>
        </div>
        <div>
            <button className="btn-primary">View transactions</button>
        </div>
    </div>
  )
}