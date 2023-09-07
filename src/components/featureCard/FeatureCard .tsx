import { FeatureInfoProps } from "@/utils/models/types"
import Image from "next/image"

export default function FeatureCard ({ image_url, title, description} : FeatureInfoProps) {
  return (
    <div>
        <Image 
            src={image_url}
            alt=''
            width={300}
            height={300}
        />
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
  )
}