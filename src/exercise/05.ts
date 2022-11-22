// exo
// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// partie 1
type SomeLanguage = 'js' | 'ts' | 'java'
// 🐶 change 'any' : exclue 'java' du type 'SomeLanguage'
type GoodLanguage = any

const lang: GoodLanguage = 'js'
displayText(`good lang ${lang}`)

type TypeSpecial = string | number | Function
// 🐶 change 'any' : exclue 'Function' du type 'TypeSpecial'
type Writable = any

const ts: TypeSpecial = () => {}
const w: Writable = () => {} //constate erreur de compile

//partie 2
// 🐶 change 'any' : prend que 'java' de 'SomeLanguage'
type OldLangage = any
// 🐶 change 'any' : prend que 'Function' de 'TypeSpecial'
type F = any

//partie
type Age = string | number | undefined | null
// 🐶 change 'any' : supprime les 'null' et 'undefined' de 'Age'
type NonNullAge = any

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
