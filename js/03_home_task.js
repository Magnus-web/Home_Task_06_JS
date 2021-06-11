import users from "./users.js"

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, findGender) => users.filter(({ gender }) => gender.toLowerCase() === findGender.toLowerCase());
console.table(getUsersWithGender(users,"male"));
