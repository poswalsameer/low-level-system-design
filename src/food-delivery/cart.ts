import type { CartItem, MenuItem } from "./types"

export class Cart {
  private cartItems: Map<string, CartItem>

  constructor() {
    this.cartItems = new Map()
  }

  public getCartItems() {
    return Array.from(this.cartItems.values())
  }

  public getCartTotal() {
    let total = 0
    for (const item of this.cartItems.values()) {
      total += item.itemPrice * item.quantity
    }
    return total
  }

  public getCartItemsCount() {
    return this.cartItems.size
  }

  public addCartItem(item: MenuItem) {
    const existingItem = this.cartItems.get(item.itemId)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.cartItems.set(item.itemId, { ...item, quantity: 1 })
    }
  }

  public removeCartItem(itemId: string) {
    this.cartItems.delete(itemId)
  }

  public clearCart() {
    this.cartItems.clear()
  }
}

