"use client"
// Iterator
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

type Student = {
  name: string
}

// 🐶 Transorme MikeSchool en Iterable en impelementant l'interface 'Iterable<Student>'
class MikeSchool {
  // 🤖 implements Iterable<Student> {

  // 🐶 créé la champs privé 'done' et 'index' il serviront pour l'iterator
  // 🤖 private done: boolean
  // 🤖 private index: number
  constructor(private values: Student[]) {
    // 🐶 initialise 'index' à 0 et 'done' a false
  }
  // 🐶 Utilise la correction rapide pour automatiquement implementer
  // [Symbol.iterator](): Iterator<Student> {
  //   throw new Error('Method not implemented.')
  // 🐶 créé 2 variables internes 'index' et 'values'
  // 🤖 let index = 0
  // 🤖 let values = this.values
  // 🐶 retourne la fonction next(): IteratorResult<Student>
  // implementation :
  // if (index < values.length) {
  //   return {
  //     done: false,
  //     value: values[index++],
  //   }
  // } else {
  //   return {
  //     done: true,
  //     value: null,
  //   }
  // }
  // }
}

const mikeSchool = new MikeSchool([{name: 'mike'}, {name: 'john'}])

// 🐶 decommente pour faire fonctionner l'iterator
// for (const value of mikeSchool) {
//   console.log('of', value)
//   displayText(value.name)
// }

// 🐶 Fais la meme chose en appelant explicitement un 'iterator' 'while' et 'next'
// 🤖 let iterator = mikeSchool[Symbol.iterator]()

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;