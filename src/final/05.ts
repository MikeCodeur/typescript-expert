// Styling
// http://localhost:3000/alone/final/01.js

//https://www.typescriptlang.org/docs/handbook/decorators.html
export const a = ""

// UTILY TYPES COLLECTION 
//Exclude
type SomeLanguage = "js" | "ts" | "java"
type GoodLanguage = Exclude<SomeLanguage, "java">;

const l:GoodLanguage = "js"

type TypeSpecial = string | number| Function
type Writable = Exclude<TypeSpecial, Function>;

const ts : TypeSpecial = ()=>{}
//const w : Writable = ()=>{}

//Extract 
type OldLangage = Extract<SomeLanguage , "java">;
type F = Extract<TypeSpecial ,Function>;

//NOnNull
type Age = string | number | undefined | null
type NonNullAge = NonNullable<Age>

type UPPER = Uppercase<string>

const name : UPPER = "MMM"