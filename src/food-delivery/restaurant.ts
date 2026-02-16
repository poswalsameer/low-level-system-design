import type { MenuItem } from "./types"
import { randomUUID } from "node:crypto"

export class Restaurant {
  private restaurantId: string
  private name: string
  private menu: MenuItem[]

  constructor({ name, menu }: { name: string, menu: MenuItem[] }) {
    this.restaurantId = randomUUID()
    this.name = name
    this.menu = menu
  }

  public getRestaurant() {
    return {
      restaurantId: this.restaurantId,
      name: this.name,
      menu: this.menu
    }
  }
}