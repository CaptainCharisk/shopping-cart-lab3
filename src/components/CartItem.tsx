"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuantitySelector } from "@/components/QuantitySelector"
import { useCart, type CartLine } from "@/context/CartContext"
import { formatPrice } from "@/lib/products"

export function CartItem({ item }: { item: CartLine }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <li data-testid="cart-item" className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
          <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-medium">{item.name}</h3>
          <p className="text-sm text-muted-foreground">{formatPrice(item.price)} each</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
        <QuantitySelector value={item.quantity} min={0} onChange={(q) => updateQuantity(item.id, q)} />
        <p className="w-28 text-right font-semibold tabular-nums">{formatPrice(item.price * item.quantity)}</p>
        <Button
          data-testid="remove-cart-item-btn"
          variant="destructive"
          aria-label={`Remove ${item.name}`}
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 />
          Remove
        </Button>
      </div>
    </li>
  )
}
