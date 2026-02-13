// Cart class only handles properties related to the items
// All other things are delegated to other classes
// They are not child class but they have "has-a" relation with Cart class
export class Cart {
  private _cartItems: string[]

  constructor() {
    this._cartItems = []
  }

  addItem(item: string) {
    this._cartItems.push(item)
  }

  removeItem(item: string) {
    this._cartItems = this._cartItems.filter((i) => i !== item)
  }

  getCartItems(): string[] {
    return this._cartItems
  }

  getTotalItemsCount(): number {
    return this._cartItems.length
  }
}