import { Cart } from "./cart"

export class SaveCart {
  saveCart(cart: Cart): void {
    console.log("Saving cart:", cart.getCartItems())
  }
}