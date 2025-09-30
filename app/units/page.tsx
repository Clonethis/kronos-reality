import { PropertyHeader } from "@/components/property-header"
import { UnitsTable } from "@/components/units-table"

export default function UnitsOverviewPage() {
  return (
    <div className="min-h-screen">
      <PropertyHeader />

      <main className="container mx-auto px-6 pt-24 pb-16">
        <UnitsTable />
      </main>
    </div>
  )
}
