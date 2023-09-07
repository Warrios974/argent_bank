import { FeatureInfoProps } from "@/utils/models/types"
import Image from "next/image"

export default function FeatureCard ({ image_url, title, description} : FeatureInfoProps) {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center text-center px-10 pb-20 md:pb-0">
        <div className="w-40 h-40 flex justify-center items-center border-8 border-color-primary rounded-full p-4 mb-5">
          <Image 
            className="block"
            src={image_url}
            alt=''
          />
        </div>
        <h5 className="font-bold text-xl mb-3">{title}</h5>
        <p className="text-base">{description}</p>
    </div>
  )
}