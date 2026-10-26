"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/CartContext"

export function CartIcon() {
  const { totalItems, hydrated } = useCart()

  return (
    <Link
      href="/cart"
      className="relative inline-flex size-10 items-center justify-center rounded-lg hover:bg-muted"
      aria-label={`Cart with ${totalItems} items`}
    >
      <ShoppingCart className="size-6" />
      {hydrated && totalItems > 0 && (
        <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full px-1 tabular-nums">
          {totalItems > 99 ? "99+" : totalItems}
        </Badge>
      )}
    </Link>
  )
}
