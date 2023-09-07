'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function SignInPage() {

    const handleSubmit = () => {
      
    }

    return (
      <section>
        <div>
          <FontAwesomeIcon icon={faCircleUser} width={30} color="black"/>
          <h1>Sign In</h1>
          <form onSubmit={() => handleSubmit()}>
            <div>
              <label htmlFor="username">username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input type="text" name="password" id="password" />
            </div>
            <div>
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </section>
    )
  }
  