const db = require('../models');

module.exports = {
  findAll: (request, response) => {
    db.User
      .findAll()
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findById: (request, response) => {
    db.User
      .findById(request.params.id)
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findUsersBooks: (request, response) => {
    db.User
      .getBooks()
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findUsersUnreadBooks: (request, response) => {
    db.User
      .getBooks({
        where: {status: 0}
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findUsersReadBooks: (request, response) => {
    db.User
      .getBooks({
        where: {status: 1}
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  deleteUserBook: (request, response) => {
    db.User 
      .removeBook({
        where: {
          bookId: request.params.id
       }
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  create: (request, response) => {
    db.User
      .create({
        username: request.body.username,
        password: request.body.password,
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  update: function(request, response) {
    db.User
      .update(
        {
          username: request.params.username,
          password: request.params.password
        },
        {
          where: {
            id: request.params.id
          }
        }
      )
      .then(response => response.json(response))
      .catch(err => response.status(422).json(err));
  },
  remove: function(request, response) {
    db.User
      .destroy({
        where: {
          id: request.params.id
        }
      })
      .then(response => response.json(response))
      .catch(err => response.status(422).json(err));
  }
};