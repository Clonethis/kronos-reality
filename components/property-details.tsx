import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyDetail {
  label: string
  value: string
  superscript?: string
}

interface PropertyDetailsProps {
  unitId: string
  unitType: string
  details: PropertyDetail[]
  priceLabel: string
  priceValue: string
  priceExclLabel: string
  priceExclValue: string
  status: string
}

export function PropertyDetails({
  unitId,
  unitType,
  details,
  priceLabel,
  priceValue,
  priceExclLabel,
  priceExclValue,
  status,
}: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="font-serif text-7xl font-light tracking-tight text-balance">{unitId}</h1>
        <p className="font-serif text-2xl text-muted-foreground">{unitType}</p>
      </div>

      {/* Details Table */}
      <div className="space-y-3 border-t border-border pt-6">
        {details.map((detail, index) => (
          <div key={index} className="flex items-baseline justify-between py-2 border-b border-border/50">
            <span className="text-sm text-muted-foreground">{detail.label}</span>
            <span className="text-sm font-medium">
              {detail.value}
              {detail.superscript && <sup className="text-xs">{detail.superscript}</sup>}
            </span>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-lg font-medium">
            {priceLabel} <sup className="text-sm">*</sup>
          </span>
          <span className="text-2xl font-semibold">{priceValue}</span>
        </div>
        <div className="flex items-baseline justify-between text-muted-foreground">
          <span className="text-sm">{priceExclLabel}</span>
          <span className="text-sm">{priceExclValue}</span>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="space-y-3 pt-6">
        <Button variant="outline" className="w-full justify-start gap-3 h-12 text-sm font-medium bg-transparent">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-current">
            <Download className="h-4 w-4" />
          </div>
          UNIT CARD
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 h-12 text-sm font-medium bg-transparent">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-current">
            <Download className="h-4 w-4" />
          </div>
          BUILDING STANDARD
        </Button>
      </div>

      {/* Additional Section */}
      <div className="pt-8">
        <h3 className="font-serif text-xl mb-4">Appurtenances available for a surcharge</h3>
      </div>
    </div>
  )
}
