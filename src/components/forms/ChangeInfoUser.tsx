import { ChangeInfoUserProps } from "@/utils/models/types"

export default function ChangeInfoUser({ displayForm } : ChangeInfoUserProps) {

    const regex = "/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u"

    const handleCancelClick = () => {
        displayForm(false)
    }
  return (
    <form className="flex items-center gap-4">
        <fieldset className="flex flex-col gap-4">
            <input type="text" id="firstName" placeholder="firstName" pattern={regex}
                className="input"
                />
                <div className="text-right">
                    <button className="btn-primary w-10" type="submit">Save</button>
                </div>
        </fieldset>
        <div className="w-full flex flex-col gap-4">
            <input type="text" id="lastName" placeholder="firstName" pattern={regex}
                className="input"
                />
            <div className="text-left">
                <button className="btn-primary" onClick={() => handleCancelClick()}>Cancel</button>
            </div>
        </div>
    </form>
  )
}