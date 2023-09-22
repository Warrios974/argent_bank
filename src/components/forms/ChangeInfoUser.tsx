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

    const regex = "/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u"

    const handleCancelClick = () => {
        displayForm(false)
    }

    const handleSubmit = async () => {
        await dispatch(updateUserData({
            firstName: dataForm.firstName,
            lastName: dataForm.lastName,
            token: token
        }))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      
        const value = e.target.value
        const id = e.target.id
  
        setDataForm({
          ...dataForm,
          [id]: value,
        })
    }

    console.log('====');
    console.log('dataForm',dataForm);
    console.log('====');

  return (
    <form className="flex items-center gap-4" onSubmit={() => handleSubmit()}>
        <fieldset className="flex flex-col gap-4">
            <input type="text" id="firstName" placeholder={firstName} pattern={regex}
                className="input" onChange={(e) => handleChange(e)}
                />
                <div className="text-right">
                    <button className="btn-primary w-10" type="submit">Save</button>
                </div>
        </fieldset>
        <div className="w-full flex flex-col gap-4">
            <input type="text" id="lastName" placeholder={lastName} pattern={regex}
                className="input" onChange={(e) => handleChange(e)}
                />
            <div className="text-left">
                <button className="btn-primary" onClick={() => handleCancelClick()}>Cancel</button>
            </div>
        </div>
    </form>
  )
}