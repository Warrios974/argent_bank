import { StaticImageData } from "next/image"

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