import { SaveToDb, SaveToFile } from "./save"
import { AddImage, AddText } from "./add-element"
import { DocumentEditor } from "./document-editor"

const editor = new DocumentEditor()

// ADDING ELEMENTS
console.log("1. Editing Document...")
const textAdder = new AddText()
const imageAdder = new AddImage()

console.log(textAdder)
console.log(imageAdder)

editor.addElement(textAdder, "Hello, this is my first document.")
editor.addElement(textAdder, "I am learning System Design.")
editor.addElement(imageAdder, "https://example.com/diagram.png")
editor.addElement(textAdder, "End of document.")

console.log("Current Document Content:", editor.content)

// SAVING
// ------------------------------ 
// Choosing to save to file
const fileSaver = new SaveToFile()
editor.saveDocument(fileSaver)

// Choosing to save to DB
const dbSaver = new SaveToDb()
editor.saveDocument(dbSaver)
