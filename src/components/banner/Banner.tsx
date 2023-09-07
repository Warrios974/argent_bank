import { BannerProps } from "@/utils/models/types"
import Image from "next/image"
import backgroundBanner from '@/assets/images/bank-tree.jpeg'

export default function Banner({ title, description} : BannerProps) {
  return (
    <div className="w-full h-96 flex justify-center items-center relative">
      <Image 
        className="absolute top-0 w-full h-full object-cover"
        src={backgroundBanner}
        alt=""
      />
      <div className="z-10 md:absolute md:top-10 md:right-20 bg-white p-10 md:w-96 w-72 h-52">
          <h1 className="block md:text-2xl text-xl font-bold mb-3">{title}</h1>
          <p>{description}</p>
      </div>
    </div>
  )
}