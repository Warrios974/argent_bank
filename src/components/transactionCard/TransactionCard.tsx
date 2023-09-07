import { TransactionInfoProps } from "@/utils/models/types"
import Link from "next/link"

export default function TransactionCard({ type, sum, state} : TransactionInfoProps) {
  return (
    <div>
        <div>
            <span>{type}</span>
            <span>{sum}</span>
            <span>{state}</span>
        </div>
        <div>
            <Link href={'/dashboard'}>View transactions</Link>
        </div>
    </div>
  )
}