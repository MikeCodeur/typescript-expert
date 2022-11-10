// Styling
// http://localhost:3000/alone/final/01.js

//https://www.typescriptlang.org/docs/handbook/decorators.html
export const a = ""

// UTILY TYPES BASIC 
//partial 
interface User {
  name: string;
  adress: string;
}
 
function updateUser(user: User, fieldsToUpdate: Partial<User>) {
  return { ...user, ...fieldsToUpdate };
}
 
const user1 = {
  name: "Mike",
  adress: "Paris",
};
 
const user2 = updateUser(user1, {
  adress: "Bali",
});

//required 
type Props = {
  title?: string;
  subtitle?: string;
}

const prop: Props = { title: "Welcome" };
//const prop2: Required<Props> = { title: "Welcome" };

//ReadOnly

const user3: Readonly<User> = {
  name: "Delete inactive users",
  adress: "Bali"
};
console.log(user3);

//user3.name = "toto"

//combinaison
const user4: Readonly<Partial<User>> = {
  name: "Delete inactive users"
};
console.log(user4);

 