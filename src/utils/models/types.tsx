import { StaticImageData } from "next/image"

// Redux State
export interface UserState {
    firstName : string | null,
    lastName : string | null,
    token : string | null,
    loading : boolean | null,
    error : string | undefined | null
    rememberMe : boolean
}

// Components
export type BannerProps = {
    title : string,
    description : string
}

export type FeatureInfoProps = {
    image_url : StaticImageData
    title : string,
    description : string
}

export type TransactionInfoProps = {
    type : string
    sum : number,
    state : string
}

export type ChangeInfoUserProps = {
    displayForm : React.Dispatch<React.SetStateAction<boolean>>
}

export type Connexion = {
    email : string,
    password: string,
    rememberMe : boolean
}