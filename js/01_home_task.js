import users from "./users.js"


// Задание 1
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(({ name }) => name);
console.table((getUserNames(users)));