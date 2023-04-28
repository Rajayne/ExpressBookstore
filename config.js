/** Common config for bookstore. */
const { user, password } = require("../dbPassword");

let base = `postgresql://`;
let DB_URI =
  process.env.NODE_ENV === "test"
    ? `${base}${user}:${password}@localhost:5432/books_test`
    : `${base}${user}:${password}@localhost:5432/books`;

module.exports = { DB_URI };
