export type Product = {
  id: string
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  { id: "p1", name: "Wireless Headphones", price: 150000, image: "https://picsum.photos/seed/headphones/600/400" },
  { id: "p2", name: "Mechanical Keyboard", price: 450000, image: "https://picsum.photos/seed/keyboard/600/400" },
  { id: "p3", name: "Smart Watch", price: 890000, image: "https://picsum.photos/seed/watch/600/400" },
  { id: "p4", name: "Bluetooth Speaker", price: 320000, image: "https://picsum.photos/seed/speaker/600/400" },
  { id: "p5", name: "Running Shoes", price: 650000, image: "https://picsum.photos/seed/shoes/600/400" },
  { id: "p6", name: "Leather Backpack", price: 780000, image: "https://picsum.photos/seed/backpack/600/400" },
  { id: "p7", name: "Coffee Mug", price: 60000, image: "https://picsum.photos/seed/mug/600/400" },
  { id: "p8", name: "Desk Lamp", price: 210000, image: "https://picsum.photos/seed/lamp/600/400" },
]

export const CURRENCY_SYMBOL = "₫"

export function formatAmount(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value)
}

export function formatPrice(value: number) {
  return `${formatAmount(value)} ${CURRENCY_SYMBOL}`
}
