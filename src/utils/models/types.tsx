import { StaticImageData } from "next/image"

// Redux State
export interface UserState {
    id : string,
    name : string,
    isConnected : boolean
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