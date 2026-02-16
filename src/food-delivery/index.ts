/**
 * FUNCTIONAL REQUIREMENTS:
 * -----------------------------------------
 * User can see the listing of all available restaurants
 * User can see the listing of all food items in a restaurant
 * User can add or remove food items from the cart
 * User able to place the order
 * User gets notification of order placed
 * 
 * NON FUNCTIONAL REQUIREMENTS:
 * -------------------------------------------
 * Codebase should be scalable and maintainable
 * 
 */

import { Cart } from "./cart"
import { MenuItem } from "./menu-item"
import { EmailNotification, SMSNotification, WhatsappNotification } from "./notification"
import { Restaurant } from "./restaurant"


async function main() {

  // CREATE A RESTAURANT WITH SOME MENU ITEMS

  // Creating menu items first
  const tofuBurger = new MenuItem({
    name: "Tofu burger",
    price: 10
  })

  const chickenBurger = new MenuItem({
    name: "Chicken burger",
    price: 12
  })

  const muttonBurger = new MenuItem({
    name: "Mutton burger",
    price: 15
  })

  const restaurant = new Restaurant({
    name: "Burger Fling",
    menu: [
      tofuBurger.getMenuItem(),
      chickenBurger.getMenuItem(),
      muttonBurger.getMenuItem()
    ],
  })

  console.log(restaurant.getRestaurant())

  const cart = new Cart()

  cart.addCartItem(tofuBurger.getMenuItem())
  cart.addCartItem(chickenBurger.getMenuItem())
  cart.addCartItem(muttonBurger.getMenuItem())

  console.log(cart.getCartItems())
  console.log(`---------------------------------`)
  console.log(`Total items: `, cart.getCartItemsCount())
  console.log(`---------------------------------`)
  console.log(`Total price: `, cart.getCartTotal())

  cart.placeOrder(cart.getCartItems())

  // ORDER PLACED, SEND NOTIFICATION
  cart.sendNotification(new EmailNotification())
  cart.sendNotification(new SMSNotification())
  cart.sendNotification(new WhatsappNotification())
}

main()
