import { Cart } from "./cart"
import { SaveCart } from "./save-cart"
import { PrintInvoice } from "./print-invoice"

function index() {
  const cart = new Cart()

  cart.addItem("item 1")
  cart.addItem("item 2")

  const totalItemsCount = cart.getTotalItemsCount()
  console.log("Total items count:", totalItemsCount)
  console.log(`---------------------------------------`)

  const totalItems = cart.getCartItems()
  console.log("Total items:", totalItems)
  console.log(`---------------------------------------`)

  const invoice = new PrintInvoice()
  invoice.printInvoice(cart)

  const saveCart = new SaveCart()
  saveCart.saveCart(cart)
}

index()