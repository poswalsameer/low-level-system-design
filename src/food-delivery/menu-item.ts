import { randomUUID } from 'node:crypto'

export class MenuItem {
  private itemId: string
  private itemName: string
  private itemPrice: number

  constructor({ name, price }: { name: string, price: number }) {
    this.itemId = randomUUID()
    this.itemName = name
    this.itemPrice = price
  }

  public getMenuItem() {
    return {
      itemId: this.itemId,
      itemName: this.itemName,
      itemPrice: this.itemPrice
    }
  }
}