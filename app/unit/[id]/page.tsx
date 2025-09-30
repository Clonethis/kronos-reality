import { notFound } from "next/navigation"
import { PropertyHeader } from "@/components/property-header"
import { PropertyBreadcrumb } from "@/components/property-breadcrumb"
import { PropertyDetails } from "@/components/property-details"
import { FloorPlan } from "@/components/floor-plan"
import { getUnitData } from "@/lib/units-data"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const unit = getUnitData(params.id)

  if (!unit) {
    notFound()
  }

  const propertyDetails = [
    { label: "Floor", value: unit.floor },
    { label: "Orientation", value: unit.orientation },
    { label: "Unit floor area", value: unit.floorArea },
    { label: "Total sale area", value: unit.totalSaleArea },
    { label: "Building energy label", value: unit.energyLabel },
    { label: "Condition", value: unit.status },
  ]

  return (
    <div className="min-h-screen">
      <PropertyHeader />

      <main className="container mx-auto px-6 pt-24 pb-16">
        <PropertyBreadcrumb floor={unit.floor} unitId={unit.id} />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Property Details */}
          <div className="lg:sticky lg:top-24">
            <PropertyDetails
              unitId={unit.id}
              unitType={unit.type}
              details={propertyDetails}
              priceLabel="Price incl. VAT"
              priceValue={unit.price}
              priceExclLabel="Price excl. VAT"
              priceExclValue={unit.priceExcl}
              status={unit.status}
            />
          </div>

          {/* Right Column - Floor Plan */}
          <div>
            <FloorPlan imageUrl="/apartment-floor-plan-with-numbered-rooms.jpg" alt={`${unit.id} Floor Plan`} />
          </div>
        </div>
      </main>
    </div>
  )
}
