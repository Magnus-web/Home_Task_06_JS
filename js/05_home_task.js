import users from "./users.js"

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, findEmail) => users.filter(({ email }) => email.toLowerCase() === findEmail.toLowerCase())[0];

console.dir(getUserWithEmail(users, 'elmahead@omatom.com'));