// Styling
// http://localhost:3000/alone/final/01.js

//https://www.typescriptlang.org/docs/handbook/decorators.html
export const a = ""

// UTILY TYPES COLLECTION 
//Record

interface DevInfo {
  age: number;
  xp: string;
}
 
type DevName = "mike" | "dan" | "kent";
 
const devs: Record<DevName, DevInfo> = {
  mike: { age: 20, xp: "Junior" },
  dan: { age: 30, xp: "senior" },
  kent: { age: 40, xp: "Junior" },
};

console.log("devs",devs.mike);

//PICK

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: 1615544252770,
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
console.log("todo",todo);

//OMIT 
type TodoPreview2 = Omit<Todo, "description">;
 
const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
