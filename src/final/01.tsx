"use client"
// Iterator
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

type Student = {
  name: string
}

class MikeSchool implements Iterable<Student> {
  private done: boolean
  private index: number
  constructor(private values: Student[]) {
    this.index = 0
    this.done = false
  }
  [Symbol.iterator](): Iterator<Student> {
    let index = 0
    let values = this.values

    return {
      next(): IteratorResult<Student> {
        if (index < values.length) {
          return {
            done: false,
            value: values[index++],
          }
        } else {
          return {
            done: true,
            value: null,
          }
        }
      },
    }
  }
}

const mikeSchool = new MikeSchool([{name: 'mike'}, {name: 'john'}])
for (const value of mikeSchool) {
  console.log('of', value)
  displayText(value.name)
}

for (const value in mikeSchool) {
  console.log('in', value)
}

let iterator = mikeSchool[Symbol.iterator]()
while (true) {
  const {value, done} = iterator.next()
  if (done) break
  displayText(`${value.name}`)
}
};
export default () => <App exercice={exercice} />;