import { Save } from "./save"
import { AddElement } from "./add-element"

export class DocumentEditor {
  private _content: string[]

  constructor() {
    this._content = []
  }


  public addElement(adder: AddElement, item: string): void {
    adder.add(this._content, item)
  }

  public saveDocument(saver: Save): void {
    saver.save(this._content)
  }

  // Allowing read only access to the current content
  public get content(): ReadonlyArray<string> {
    return this._content
  }
}