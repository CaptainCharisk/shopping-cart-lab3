"use client"

import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CartItem } from "@/components/CartItem"
import { useCart } from "@/context/CartContext"
import { CURRENCY_SYMBOL, formatAmount } from "@/lib/products"

export default function CartPage() {
  const { items, totalItems, totalPrice, hydrated, clearCart } = useCart()

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Continue shopping
      </Link>
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Your Cart</h1>

      {!hydrated ? (
        <p className="text-muted-foreground">Loading cart…</p>
      ) : items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed py-16 text-center">
          <ShoppingBag className="size-12 text-muted-foreground" />
          <p data-testid="empty-cart-msg" className="text-muted-foreground">Your cart is empty</p>
          <Link href="/" className={buttonVariants()}>
            Browse products
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent>
              <ul className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Items</span>
                <span className="tabular-nums">{totalItems}</span>
              </div>
              <div className="flex justify-between border-t pt-2 text-base font-semibold">
                <span>Total</span>
                <span className="tabular-nums">
                  <span data-testid="cart-total">{formatAmount(totalPrice)}</span> {CURRENCY_SYMBOL}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full">Checkout</Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </main>
  )
}
