import { TransactionInfoProps } from "@/utils/models/types"
import Link from "next/link"

export default function TransactionCard({ type, sum, state} : TransactionInfoProps) {
  return (
    <div className="w-full flex flex-col justify-between items-center bg-white p-5 mb-6 md:flex-row">
        <div className="w-full flex flex-col">
            <span>{type}</span>
            <span className="font-bold text-5xl">${sum}</span>
            <span>{state}</span>
        </div>
        <div className="w-full mt-5 text-right md:mt-O">
            <button className="btn-primary">View transactions</button>
        </div>
    </div>
  )
}