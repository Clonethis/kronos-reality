import Image from "next/image"
import { Button } from "@/components/ui/button"

interface FloorPlanProps {
  imageUrl: string
  alt: string
}

export function FloorPlan({ imageUrl, alt }: FloorPlanProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-10">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          CHOOSE UNIT
        </Button>
      </div>

      <div className="relative aspect-square w-full bg-muted rounded-sm overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt={alt} fill className="object-contain" priority />
      </div>
    </div>
  )
}
