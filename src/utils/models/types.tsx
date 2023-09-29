import { StaticImageData } from "next/image"

// Redux State
export interface UserState {
    firstName : string | null,
    lastName : string | null,
    token : string | null,
    remenberMe: boolean,
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