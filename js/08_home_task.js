import users from "./users.js"

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName)).map(({ name }) => name);

console.log(getUsersWithFriend(users,'Briana Decker'))