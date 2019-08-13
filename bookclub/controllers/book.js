const db = require('../models');
// TODO: figure out how to find books from jump table and get info from book table
module.exports = {
  findAll: (request, response) => {
    db.Book
      .findAll()
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
    },
  findById: (request, response ) => {
    db.Book
      .findById(request.params.id)
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findByTitle: (request, response) => {
    db.Book
      .findOne({
        where: {
          title: request.params.title,
         }
        })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findByAuthor: (request, response) => {
    db.Book
      .findAll({
        where: {author: request.params.author}
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findByNumberOfPages: (request, response) => {
    db.Book
      .findAll({
        where: {pages: request.params.pages}
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  findByGenre: (request, response) => {
    db.Book
      .findAll({
        where: {genre: request.params.genre}
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  create: (request, response) => { 
    db.Book
      .create({
        title: request.params.title,
        author: request.params.author,
        genre: request.params.genre,
        pages: request.params.pages,
        status: request.params.status,
        description: request.params.description,
        image: request.params.image,
        infoLink: request.params.infoLink,
      })
      .then(data => response.json(data))
      .catch(err => response.status(422).json(err));
  },
  markAsRead: (request, response) => {
    db.Book
      .update(
        {
          staus: true,
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
  remove: (request, response) =>{
    db.Book
      .destroy({
        where: {
          id: request.params.id
        }
      })
      .then(response => response.json(response))
      .catch(err => response.status(422).json(err));
  }
}