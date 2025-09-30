export type UnitData = {
  id: string
  type: string
  floor: string
  layout: string
  orientation: string
  floorArea: string
  totalSaleArea: string
  balconyTerrace: string
  energyLabel: string
  status: string
  price: string
  priceExcl: string
}

export const unitsData: Record<string, UnitData> = {
  a101: {
    id: "A101",
    type: "2+kk, ateliér",
    floor: "1. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,5 m²",
    totalSaleArea: "41,5 m²",
    balconyTerrace: "- / -",
    energyLabel: "B (very efficient)",
    status: "Reserved",
    price: "Reserved",
    priceExcl: "Reserved",
  },
  a102: {
    id: "A102",
    type: "2+kk, ateliér",
    floor: "1. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,5 m²",
    totalSaleArea: "41,5 m²",
    balconyTerrace: "- / -",
    energyLabel: "B (very efficient)",
    status: "Reserved",
    price: "Reserved",
    priceExcl: "Reserved",
  },
  a103: {
    id: "A103",
    type: "1+kk, byt",
    floor: "1. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "28,1 m²",
    totalSaleArea: "36,5 m²",
    balconyTerrace: "- / 8.4 m²",
    energyLabel: "B (very efficient)",
    status: "Available",
    price: "Upon request",
    priceExcl: "Upon request",
  },
  a106: {
    id: "A106",
    type: "1+kk, byt",
    floor: "1. NP",
    layout: "1+kk",
    orientation: "J",
    floorArea: "30,2 m²",
    totalSaleArea: "37,7 m²",
    balconyTerrace: "- / 7.5 m²",
    energyLabel: "B (very efficient)",
    status: "Available",
    price: "Upon request",
    priceExcl: "Upon request",
  },
  a201: {
    id: "A201",
    type: "2+kk, ateliér",
    floor: "2. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,9 m²",
    totalSaleArea: "41,9 m²",
    balconyTerrace: "- / -",
    energyLabel: "B (very efficient)",
    status: "Reserved",
    price: "Reserved",
    priceExcl: "Reserved",
  },
  a202: {
    id: "A202",
    type: "2+kk, ateliér",
    floor: "2. NP",
    layout: "2+kk",
    orientation: "S",
    floorArea: "41,5 m²",
    totalSaleArea: "41,5 m²",
    balconyTerrace: "- / -",
    energyLabel: "B (very efficient)",
    status: "Reserved",
    price: "Reserved",
    priceExcl: "Reserved",
  },
  a301: {
    id: "A301",
    type: "4+kk, byt",
    floor: "3. NP",
    layout: "4+kk",
    orientation: "JZ",
    floorArea: "106,5 m²",
    totalSaleArea: "112,5 m²",
    balconyTerrace: "- / 6.0 m²",
    energyLabel: "B (very efficient)",
    status: "Available",
    price: "Upon request",
    priceExcl: "Upon request",
  },
}

export function getUnitData(id: string): UnitData | null {
  return unitsData[id.toLowerCase()] || null
}
