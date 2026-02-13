// Save is an abstract class which does nothing from itself, and passes the 
// responsibility to the concrete classes (SaveToDb and SaveToFile)
export abstract class Save {
  abstract save(content: string[]): void
}

export class SaveToDb extends Save {
  public save(content: string[]): void {
    console.log(`Inserting document with ${content} elements.`)
    console.log("--------------------------")
  }
}

export class SaveToFile extends Save {
  public save(content: string[]): void {
    console.log(`Writing to file path: ${content}`)
    console.log("----------------------")
  }
}