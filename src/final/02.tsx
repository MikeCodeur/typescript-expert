"use client"
// Décorateurs
// http://localhost:3000/alone/final/01.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
// ❌ NE PAS MODIFIER
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

  getName() {
    return this.title
  }
}
//Book.constructor = () => {}
const book = new Book('Harry Potter')
displayText(book.getName())

const book2 = new Book('La semaine de 4h')
displayText(book2.getName())
};
export default () => <App exercice={exercice} />;