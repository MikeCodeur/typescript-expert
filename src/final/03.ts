// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// UTILITY TYPES PARTIAL
interface User {
  name: string
  adress: string
}

function updateUser(user: User, fieldsToUpdate: Partial<User>) {
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

//required
type Props = {
  title?: string
  subtitle?: string
}

const prop: Props = {title: 'Welcome'}
//const prop2: Required<Props> = { title: "Welcome" };

//ReadOnly

const user3: Readonly<User> = {
  name: 'Delete inactive users',
  adress: 'Bali',
}
//user3.name= "Mike"
console.log(user3)

//user3.name = "toto"

//combinaison
const user4: Readonly<Partial<User>> = {
  name: 'Delete inactive users',
}
console.log(user4)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
