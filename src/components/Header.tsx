import Link from "next/link"
import { Store } from "lucide-react"
import { CartIcon } from "@/components/CartIcon"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Store className="size-6" />
          ShopEasy
        </Link>
        <CartIcon />
      </div>
    </header>
  )
}
