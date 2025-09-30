"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUp, ArrowDown } from "lucide-react"

type Unit = {
  number: string
  type: string
  floor: string
  layout: string
  orientation: string
  floorArea: string
  balconyTerrace: string
  totalSaleArea: string
  price: string
  status: "available" | "reserved" | "sold"
}

const units: Unit[] = [
  {
    number: "A101",
    type: "ateliér",
    floor: "1. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,5 m²",
    balconyTerrace: "- / -",
    totalSaleArea: "41,5 m²",
    price: "Reserved",
    status: "reserved",
  },
  {
    number: "A102",
    type: "ateliér",
    floor: "1. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,5 m²",
    balconyTerrace: "- / -",
    totalSaleArea: "41,5 m²",
    price: "Reserved",
    status: "reserved",
  },
  {
    number: "A103",
    type: "byt",
    floor: "1. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "28,1 m²",
    balconyTerrace: "- / 8.4 m²",
    totalSaleArea: "36,5 m²",
    price: "Upon request",
    status: "available",
  },
  {
    number: "A104",
    type: "byt",
    floor: "1. NP",
    layout: "2+kk",
    orientation: "J",
    floorArea: "40,4 m²",
    balconyTerrace: "- / 11.3 m²",
    totalSaleArea: "51,7 m²",
    price: "Sold",
    status: "sold",
  },
  {
    number: "A105",
    type: "byt",
    floor: "1. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "31,3 m²",
    balconyTerrace: "- / 8.1 m²",
    totalSaleArea: "39,4 m²",
    price: "Sold",
    status: "sold",
  },
  {
    number: "A106",
    type: "byt",
    floor: "1. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "30,2 m²",
    balconyTerrace: "- / 7.5 m²",
    totalSaleArea: "37,7 m²",
    price: "Upon request",
    status: "available",
  },
  {
    number: "A201",
    type: "ateliér",
    floor: "2. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,9 m²",
    balconyTerrace: "- / -",
    totalSaleArea: "41,9 m²",
    price: "Reserved",
    status: "reserved",
  },
  {
    number: "A202",
    type: "ateliér",
    floor: "2. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,5 m²",
    balconyTerrace: "- / -",
    totalSaleArea: "41,5 m²",
    price: "Reserved",
    status: "reserved",
  },
  {
    number: "A203",
    type: "byt",
    floor: "2. NP",
    layout: "2+kk",
    orientation: "J",
    floorArea: "40,8 m²",
    balconyTerrace: "- / 9.0 m²",
    totalSaleArea: "49,8 m²",
    price: "Sold",
    status: "sold",
  },
  {
    number: "A204",
    type: "byt",
    floor: "2. NP",
    layout: "2+kk",
    orientation: "J",
    floorArea: "40,4 m²",
    balconyTerrace: "- / 9.0 m²",
    totalSaleArea: "49,4 m²",
    price: "Sold",
    status: "sold",
  },
  {
    number: "A205",
    type: "byt",
    floor: "2. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "31,2 m²",
    balconyTerrace: "- / 6.5 m²",
    totalSaleArea: "37,7 m²",
    price: "Sold",
    status: "sold",
  },
  {
    number: "A206",
    type: "byt",
    floor: "2. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "30,2 m²",
    balconyTerrace: "- / 6.0 m²",
    totalSaleArea: "36,2 m²",
    price: "Sold",
    status: "sold",
  },
  {
    number: "A301",
    type: "byt",
    floor: "3. NP",
    layout: "4+kk",
    orientation: "JZ",
    floorArea: "106,5 m²",
    balconyTerrace: "- / 6.0 m²",
    totalSaleArea: "112,5 m²",
    price: "Upon request",
    status: "available",
  },
]

type SortField = keyof Unit
type SortDirection = "asc" | "desc"

export function UnitsTable() {
  const [selectedFloor, setSelectedFloor] = useState<string>("All")
  const [sortField, setSortField] = useState<SortField | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const floors = ["All", "1. NP", "2. NP", "3. NP", "4. NP", "5. NP", "6. NP", "7. NP", "8. NP"]

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const filteredUnits = units.filter((unit) => {
    if (selectedFloor === "All") return true
    return unit.floor === selectedFloor
  })

  const sortedUnits = [...filteredUnits].sort((a, b) => {
    if (!sortField) return 0

    const aValue = a[sortField]
    const bValue = b[sortField]

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return (
        <span className="inline-flex flex-col ml-1 opacity-30">
          <ArrowUp className="w-3 h-3 -mb-1" />
          <ArrowDown className="w-3 h-3" />
        </span>
      )
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="w-3 h-3 ml-1 inline" />
    ) : (
      <ArrowDown className="w-3 h-3 ml-1 inline" />
    )
  }

  return (
    <div className="space-y-8">
      {/* Header with close button */}
      <div className="flex items-center justify-between border-b border-foreground/10 pb-6">
        <h1 className="font-serif text-4xl md:text-5xl">Unit overview and price list</h1>
        <button className="text-2xl hover:opacity-70 transition-opacity">×</button>
      </div>

      {/* Floor filter tabs */}
      <div className="flex flex-wrap gap-3">
        {floors.map((floor) => (
          <button
            key={floor}
            onClick={() => setSelectedFloor(floor)}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              selectedFloor === floor
                ? "bg-foreground text-background"
                : "bg-background border border-foreground/20 hover:border-foreground/40"
            }`}
          >
            {floor}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-foreground/10">
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("number")}
              >
                Number
                <SortIcon field="number" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("type")}
              >
                Type
                <SortIcon field="type" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("floor")}
              >
                Floor
                <SortIcon field="floor" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("layout")}
              >
                Layout
                <SortIcon field="layout" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("orientation")}
              >
                Orientation
                <SortIcon field="orientation" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("floorArea")}
              >
                Floor Area
                <SortIcon field="floorArea" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("balconyTerrace")}
              >
                Balcony/Terrace
                <SortIcon field="balconyTerrace" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("totalSaleArea")}
              >
                Total Sale Area
                <SortIcon field="totalSaleArea" />
              </th>
              <th
                className="text-left py-4 px-3 text-xs font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                onClick={() => handleSort("price")}
              >
                Price Incl. VAT
                <SortIcon field="price" />
              </th>
              <th className="text-left py-4 px-3"></th>
            </tr>
          </thead>
          <tbody>
            {sortedUnits.map((unit) => (
              <tr
                key={unit.number}
                className={`border-b border-foreground/5 transition-colors ${
                  unit.status === "available"
                    ? "bg-muted/30 hover:bg-muted/50"
                    : unit.status === "sold"
                      ? "opacity-40"
                      : "hover:bg-muted/20"
                }`}
              >
                <td className="py-4 px-3 font-medium">{unit.number}</td>
                <td className="py-4 px-3">{unit.type}</td>
                <td className="py-4 px-3">{unit.floor}</td>
                <td className="py-4 px-3">{unit.layout}</td>
                <td className="py-4 px-3">{unit.orientation}</td>
                <td className="py-4 px-3">{unit.floorArea}</td>
                <td className="py-4 px-3">{unit.balconyTerrace}</td>
                <td className="py-4 px-3">{unit.totalSaleArea}</td>
                <td className="py-4 px-3">{unit.price}</td>
                <td className="py-4 px-3">
                  <Link
                    href={`/unit/${unit.number.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                  >
                    Go to detail
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
