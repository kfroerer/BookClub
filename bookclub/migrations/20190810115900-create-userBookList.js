'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserBookList', {
      bookId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserBookList');
  }
};