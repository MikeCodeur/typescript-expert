"use client"
// exo
// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 change 'any' : pour que
// 'name' compile
// 'nameLower' ne compile pas
type UPPER = any
const name: UPPER = 'MIKE' // ok
const nameLower: UPPER = 'mike' // ko

// 🐶 change 'any' : pour que
// 'username' compile
// 'usernameUpper' ne compile pas
type LOWER = any
const username: LOWER = 'mike' // ok
const usernameUpper: LOWER = 'MIKE' // ko

// 🐶 change 'any' : pour que
// 'gender' compile
// 'gender2' ne compile pas
type CAP = any
const gender: CAP = 'Mr' // ok
const gender2: CAP = 'mr' // ko

// 🐶 change 'any' : pour que
// 'title' compile
// 'title2' ne compile pas
type UNCAP = any
const title: UNCAP = 'iiiL' // ok
const title2: UNCAP = 'Liii' // ko

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;