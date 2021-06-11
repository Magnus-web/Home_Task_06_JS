import users from "./users.js"

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

console.table(getInactiveUsers(users));