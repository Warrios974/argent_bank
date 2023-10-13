'use client'

import Image from "next/image";
import logo from '@/assets/images/argentBankLogo.png'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import { addToken, fetchUserData, logOut } from "@/app/GlobalRedux/Features/user/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {

  const firstName = useSelector((state: RootState) => state.user.firstName)
  const error = useSelector((state: RootState) => state.user.error)
  const token = useSelector((state: RootState) => state.user.token);

  const dispatch =  useDispatch<AppDispatch>()
  const router = useRouter()

  function handleLogOut(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    dispatch(logOut());
    router.push('/')
  }
  
  useEffect(() => {
    const tokenInSessionStorage = sessionStorage.getItem("connexion") ? sessionStorage.getItem("connexion") : null;
    const tokenInlocalStorage = localStorage.getItem("connexion") ? localStorage.getItem("connexion") : null;
    const connexionFunction = () => {
      if (tokenInlocalStorage) {
        const connexionData = JSON.parse(tokenInlocalStorage)
        dispatch(addToken(connexionData))
        dispatch(fetchUserData(connexionData.token))
      }
      if (tokenInSessionStorage) {
        const connexionData = JSON.parse(tokenInSessionStorage)
        dispatch(addToken(connexionData))
        dispatch(fetchUserData(connexionData.token))
      }
    }
    connexionFunction()
  }, [])

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
        {(token && firstName) && 
        <>
          <Link href={'/dashboard'} className="flex gap-2 items-center font-bold">
              <FontAwesomeIcon icon={faCircleUser} width={20}/>
              {firstName}
          </Link>
          <Link href={'/'} passHref legacyBehavior>
            <a onClick={(e) => handleLogOut(e)} className="flex gap-2 items-center font-bold">
              <FontAwesomeIcon icon={faRightFromBracket} width={20}/>
              Sign Out
            </a>
          </Link>
        </>}
      </div>
    </header>
  )
}