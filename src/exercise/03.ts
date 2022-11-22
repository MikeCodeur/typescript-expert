// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// partie 1
interface User {
  name: string
  adress: string
}

// 🐶 Change le type 'Any' en utilisant User et un utility Types
function updateUser(user: User, fieldsToUpdate: any) {
  return {...user, ...fieldsToUpdate}
}

const user1 = {
  name: 'Mike',
  adress: 'Paris',
}

const user2 = updateUser(user1, {
  adress: 'Bali',
})
displayText(`${user2.name} habite ${user2.adress}`)

// partie 2
// 🐶 Nous avons props avec 2 propriétés optionnelles
type Props = {
  title?: string
  subtitle?: string
}

const prop: Props = {title: 'Welcome'}
displayText(`prop : ${prop.title}`)

// 🐶 change Props pour avoir props avec toutes les proprités obligatoire
const prop2: Props = {title: 'Welcome'}
displayText(`prop2 : ${prop2.title} : ${prop2.subtitle}`)

// partie 3
// 🐶 Modfifie User pour que l'on puisse pas faire : user3.name= "Mike"
const user3: User = {
  name: 'Delete inactive users',
  adress: 'Bali',
}
user3.name = 'Mike'
console.log(user3)

// partie 3 - bis
// 🐶 Modfifie le type 'any' de user4 pour que l'on puisse pas faire : user4.name= "Mike"
// et que addreese soit optionnelle
const user4: any = {
  name: 'Delete inactive users',
}
user4.name = 'Mike'
console.log(user4)
