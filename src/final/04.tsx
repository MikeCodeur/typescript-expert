"use client"
// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

//Record
interface DevInfo {
  age: number
  xp: string
}

type DevName = 'mike' | 'dan' | 'kent'

const devs: Record<DevName, DevInfo> = {
  mike: {age: 20, xp: 'Junior'},
  dan: {age: 30, xp: 'senior'},
  kent: {age: 40, xp: 'Junior'},
}

displayText(`${devs.mike.xp}`)

//PICK

interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: 1615544252770
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

console.log('todo', todo)

//OMIT
type TodoPreview2 = Omit<Todo, 'description'>

const todo2: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
}

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;