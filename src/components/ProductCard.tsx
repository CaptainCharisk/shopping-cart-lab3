"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { QuantitySelector } from "@/components/QuantitySelector"
import { useCart } from "@/context/CartContext"
import { formatPrice, type Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product, quantity)
    setQuantity(1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative aspect-[3/2] bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
      </CardHeader>
      <CardContent>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAdd}>
          {added ? <Check /> : <ShoppingCart />}
          {added ? "Added!" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
