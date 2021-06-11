import users from "./users.js"

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUserWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor.toLowerCase() === color.toLowerCase());

console.table(getUserWithEyeColor(users,"blue"));