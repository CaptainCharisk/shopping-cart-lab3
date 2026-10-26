# Lab 3 – Shopping Cart with Local Storage

A shopping cart built with **Next.js (App Router)**, **Tailwind CSS** and **shadcn/ui** (Button, Card, Badge).
Cart data is persisted in the browser's **Local Storage**.

## Features
- Product list (name, image, price) with a quantity selector and **Add to Cart** button
- Adding an existing product increases its quantity
- Cart saved to Local Storage and restored on reload (also synced across tabs)
- Header cart icon with total item count badge
- Cart page: name, price, quantity, subtotal, increase/decrease, remove, cart total
- Responsive layout for mobile and desktop

## Structure
- `src/context/CartContext.tsx` – cart state (`useState`) + Local Storage sync (`useEffect`)
- `src/components/ProductCard.tsx`, `CartItem.tsx`, `CartIcon.tsx` – reusable components
- `src/app/page.tsx` – product list, `src/app/cart/page.tsx` – cart page

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.
