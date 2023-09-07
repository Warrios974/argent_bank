import Image from "next/image";
import logo from '@/assets/images/argentBankLogo.png'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <Link href={'/'} >
        <Image 
            src={logo}
            alt=''
            width={300}
        />
      </Link>
      <Link href={'/signin'}>
          <FontAwesomeIcon icon={faCircleUser} width={30} color="black"/>
          Sign In
      </Link>
      <Link href={'/dashboard'}>
          <FontAwesomeIcon icon={faCircleUser} width={30} color="black"/>
          Tony
      </Link>
      <Link href={'/'}>
          <FontAwesomeIcon icon={faRightFromBracket} width={30} color="black"/>
          Sign Out
      </Link>
    </header>
  )
}