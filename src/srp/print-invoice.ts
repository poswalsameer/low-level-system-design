import { Cart } from "./cart"

export class PrintInvoice {
  printInvoice(cart: Cart): void {
    console.log("Printing Invoice:")
    console.log("----------------")
    console.log("Total:", cart.getTotalItemsCount())
  }
}