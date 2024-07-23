"use client"
// Décorateurs
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 implemente la fonction sealed qui sera utiliser comme decorateur de classe
function sealed(constructor: Function) {
  console.log('sealed()', constructor)
  // 🤖 utilise Object.seal pour interdire la redefinition du constructeur
  // 📝 doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
}

// 🐶 utilise le decorateur @sealed sur la classe Book
// et constate que le code : Book.constructor = () => {}
// génére une erreur : Cannot add property constructor, object is not extensible
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
Book.constructor = () => {}
const book = new Book('Harry Potter')

displayText(book.getName())

const book2 = new Book('La semaine de 4h')
displayText(book2.getName())

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;