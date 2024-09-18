const {
  addBookHandler,
  getAllBookHandler,
  getAllBookByIdHandler,
  EditBooksByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getAllBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: EditBooksByIdHandler,
  },
];

module.exports = routes;
