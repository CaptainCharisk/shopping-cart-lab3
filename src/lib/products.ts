export type Product = {
  id: string
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  { id: "p1", name: "Wireless Headphones", price: 89.99, image: "https://picsum.photos/seed/headphones/600/400" },
  { id: "p2", name: "Mechanical Keyboard", price: 129.0, image: "https://picsum.photos/seed/keyboard/600/400" },
  { id: "p3", name: "Smart Watch", price: 199.5, image: "https://picsum.photos/seed/watch/600/400" },
  { id: "p4", name: "Bluetooth Speaker", price: 59.99, image: "https://picsum.photos/seed/speaker/600/400" },
  { id: "p5", name: "Running Shoes", price: 74.95, image: "https://picsum.photos/seed/shoes/600/400" },
  { id: "p6", name: "Leather Backpack", price: 109.0, image: "https://picsum.photos/seed/backpack/600/400" },
  { id: "p7", name: "Coffee Mug", price: 14.5, image: "https://picsum.photos/seed/mug/600/400" },
  { id: "p8", name: "Desk Lamp", price: 39.99, image: "https://picsum.photos/seed/lamp/600/400" },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)
}
