// exo
// Utility Types
// http://localhost:3000/alone/final/03.ts

// â NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// âï¸ DÃ©but de l'exercice

// partie 1
type SomeLanguage = 'js' | 'ts' | 'java'
// ð¶ change 'any' : exclue 'java' du type 'SomeLanguage'
type GoodLanguage = any

const lang: GoodLanguage = 'js'
displayText(`good lang ${lang}`)

type TypeSpecial = string | number | Function
// ð¶ change 'any' : exclue 'Function' du type 'TypeSpecial'
type Writable = any

const ts: TypeSpecial = () => {}
const w: Writable = () => {} //constate erreur de compile

//partie 2
// ð¶ change 'any' : prend que 'java' de 'SomeLanguage'
type OldLangage = any
// ð¶ change 'any' : prend que 'Function' de 'TypeSpecial'
type F = any

//partie
type Age = string | number | undefined | null
// ð¶ change 'any' : supprime les 'null' et 'undefined' de 'Age'
type NonNullAge = any

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
