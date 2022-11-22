// Styling
// http://localhost:3000/alone/final/01.js

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

//Exclude
type SomeLanguage = 'js' | 'ts' | 'java'
type GoodLanguage = Exclude<SomeLanguage, 'java'>

const lang: GoodLanguage = 'js'
displayText(`good lang ${lang}`)

type TypeSpecial = string | number | Function
type Writable = Exclude<TypeSpecial, Function>

const ts: TypeSpecial = () => {}
//const w : Writable = ()=>{}

//Extract
type OldLangage = Extract<SomeLanguage, 'java'>
type F = Extract<TypeSpecial, Function>

//NOnNull
type Age = string | number | undefined | null
type NonNullAge = NonNullable<Age>

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
