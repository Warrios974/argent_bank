import { BannerProps } from "@/utils/models/types"

export default function Banner({ title, description} : BannerProps) {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}