// AddElement is an abstract class which does nothing from itself, and passes the 
// responsibility to the concrete classes (AddText and AddImage)
export abstract class AddElement {
  abstract add(content: string[], item: string): void
}

export class AddText extends AddElement {
  public add(content: string[], text: string): void {
    content.push(text)
    console.log(`Added text: "${text}"`)
  }
}

export class AddImage extends AddElement {
  public add(content: string[], imageSource: string): void {
    const imageEntry = `[Image: ${imageSource}]`
    content.push(imageEntry)
    console.log(`Added image: "${imageEntry}"`)
  }
}
