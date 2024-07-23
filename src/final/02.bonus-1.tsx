"use client"
// Décorateurs
// http://localhost:3000/alone/final/01.ts
// 🚀 Décorateur de méthodes avec param
// ❌ NE PAS MODIFIER
/* eslint-disable @typescript-eslint/no-unused-vars */
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

//https://www.typescriptlang.org/docs/handbook/decorators.html

function sealed(constructor: Function) {
  console.log('sealed()', constructor)
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@sealed
class Book {
  type = 'pdf'
  title: string

  constructor(t: string) {
    this.title = t
  }

  @enumerable(true)
  getName() {
    return this.title
  }
}

//Book.constructor = () => {}
const book = new Book('Harry Potter')

displayText(book.getName())

const book2 = new Book('La semaine de 4h')
displayText(book2.getName())

//Bonus 1
function enumerable(value: boolean) {
  console.log('enumerable(): factory evaluated')
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('target', target)
    console.log('propertyKey', propertyKey)
    console.log('descriptor', descriptor)

    descriptor.enumerable = value
  }
}

for (let key in book2) {
  console.log('key Book', key)
  displayText(`key Book ${key}`)
}
};
export default () => <App exercice={exercice} />;