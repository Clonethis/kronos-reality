import Link from "next/link"

interface PropertyBreadcrumbProps {
  floor: string
  unitId: string
}

export function PropertyBreadcrumb({ floor, unitId }: PropertyBreadcrumbProps) {
  return (
    <div className="flex items-center justify-between text-sm mb-12">
      <div className="flex items-center gap-2">
        <Link href="/units" className="hover:underline">
          {floor}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium">{unitId}</span>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground">
        <Link href="/units" className="hover:underline hover:text-foreground transition-colors">
          Unit overview and price list
        </Link>
        <span>/</span>
        <Link href="/purchase-guide" className="hover:underline hover:text-foreground transition-colors">
          Real estate purchase step by step
        </Link>
      </div>
    </div>
  )
}
