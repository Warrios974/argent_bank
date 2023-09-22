'use client'

import Image from "next/image";
import logo from '@/assets/images/argentBankLogo.png'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

export default function Header() {

  const firstName = useSelector((state: RootState) => state.user.firstName)
  const token = useSelector((state: RootState) => state.user.token);

  return (
    <header className="w-full flex flex-row justify-between items-center px-5 py-2">
      <Link href={'/'} className="flex-4">
        <Image 
            src={logo}
            alt=''
            width={200}
        />
      </Link>
      <div className="flex justify-around gap-5">
        {!token && <Link href={'/signin'} className="flex gap-2 items-center font-bold">
            <FontAwesomeIcon icon={faCircleUser} width={20}/>
            Sign In
        </Link>}
        <Link href={'/dashboard'} className="flex gap-2 items-center font-bold">
            <FontAwesomeIcon icon={faCircleUser} width={20}/>
            {firstName}
        </Link>
        {token && <Link href={'/'} className="flex gap-2 items-center font-bold">
            <FontAwesomeIcon icon={faRightFromBracket} width={20}/>
            Sign Out
        </Link>}
      </div>
    </header>
  )
}