import Link from "next/link"
import { Volume2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PropertyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider">RESIDENCE</span>
            <span className="text-xs tracking-widest">PROPERTIES</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Volume2 className="h-4 w-4 mr-2" />
            SOUND
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Menu className="h-5 w-5 mr-2" />
            MENU
          </Button>
        </div>
      </div>
    </header>
  )
}
