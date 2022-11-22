// Styling
// http://localhost:3000/alone/final/01.js

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()
//Intrinsic String Manipulation Types

type UPPER = Uppercase<string>
const name: UPPER = 'MIKE'
//const nameLower: UPPER = 'mike'

type LOWER = Lowercase<string>
const username: LOWER = 'mike'
//const usernameUpper: LOWER = 'MIKE'

type CAP = Capitalize<string>
const gender: CAP = 'Mr'
//const gender2: CAP = 'mr'

type UNCAP = Uncapitalize<string>
const title: UNCAP = 'iiiL'

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
