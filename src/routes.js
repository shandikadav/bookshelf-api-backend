const {
  addBookHandler,
  getAllBookHandler,
  getAllBookByIdHandler,
  editBooksByIdHandler,
  deleteBooksByIdHandler,
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
    handler: editBooksByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBooksByIdHandler,
  },
];

module.exports = routes;
