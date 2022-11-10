// Styling
// http://localhost:3000/alone/final/01.js

export const a = ""

type Student = {
  name : string
}

class MikeSchool implements Iterable<Student>{
  private done : boolean
  private index : number
  constructor(private values :Student[]){
    this.index = 0
    this.done = false

  }
  [Symbol.iterator](): Iterator<Student, any, undefined> {
    let index = 0;
    let values = this.values;

    return {
      next(): IteratorResult<Student> {
        if (index < values.length) {
          return {
            done: false,
            value: values[index++]
          }
        } else {
          return {
            done: true,
            value: null
          }
        }
      }
    }
  }
  
  
}

const mikeSchool = new MikeSchool([{name:"mike"},{name:"mijackke"}])
for (const value of mikeSchool) {
  console.log("of",value)
}

for (const value in mikeSchool) {
  console.log("in", value)
}