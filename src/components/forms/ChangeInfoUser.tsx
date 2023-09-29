import { updateUserData } from "@/app/GlobalRedux/Features/user/userSlice"
import { RootState } from "@/app/GlobalRedux/store"
import { ChangeInfoUserProps } from "@/utils/models/types"
import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function ChangeInfoUser({ displayForm } : ChangeInfoUserProps) {

    const firstName = useSelector((state: RootState) => state.user.firstName)
    const lastName = useSelector((state: RootState) => state.user.lastName)
    const token = useSelector((state: RootState) => state.user.token)
    
    const INITIAL_STATE_FORM = {
        firstName: firstName,
        lastName: lastName
    }
    
    const [dataForm, setDataForm] = useState(INITIAL_STATE_FORM)

    const dispatch = useDispatch()

    const handleCancelClick = () => {
        displayForm(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (dataForm !== INITIAL_STATE_FORM) {
            dispatch(updateUserData({
                firstName: dataForm.firstName,
                lastName: dataForm.lastName,
                token: token
            }))
            displayForm(false)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      
        const value = e.target.value
        const id = e.target.id
  
        setDataForm({
          ...dataForm,
          [id]: value,
        })
    }

  return (
    <form className="w-10/12 flex flex-col items-center gap-4" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="w-full flex flex-col md:flex-row md:justify-center gap-4">
            <input type="text" id="firstName" placeholder={firstName ? firstName : ''} pattern="[A-Za-z]{2,32}" minLength={2}
                className="input" onChange={(e) => handleChange(e)}
                />
            <input type="text" id="lastName" placeholder={lastName ? lastName : ''} pattern="[A-Za-z]{2,32}" minLength={2}
                className="input" onChange={(e) => handleChange(e)}
                />
        </fieldset>
        <div className="w-full flex justify-center flex-row gap-4">
            <div className="w-full text-right">
                <button className="btn-primary w-10" type="submit">Save</button>
            </div>
            <div className="w-full text-left">
                <button className="btn-primary" onClick={() => handleCancelClick()}>Cancel</button>
            </div>
        </div>
    </form>
  )
}