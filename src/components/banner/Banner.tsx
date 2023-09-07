import { BannerProps } from "@/utils/models/types"
import Image from "next/image"
import backgroundBanner from '@/assets/images/bank-tree.jpeg'

export default function Banner({ title, description} : BannerProps) {
  return (
    <div className="w-full h-96 flex relative">
      <Image 
        className="w-full h-full object-cover"
        src={backgroundBanner}
        alt=""
      />
      <div className="absolute top-10 right-20 bg-white p-10 w-96">
          <h1 className="block text-2xl font-bold mb-3">{title}</h1>
          <p>{description}</p>
      </div>
    </div>
  )
}