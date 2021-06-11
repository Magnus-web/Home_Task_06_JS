import users from "./users.js"

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);

console.table(getUsersWithAge(users,20,30));