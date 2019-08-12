
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pages: {
        type: DataTypes.NUMBER,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      infoLink: {
        type: DataTypes.STRING,
      }
    },
  );

  Book.associate = (models) => {
    Book.belongsToMany(models.User, {
      as: "Books",
      foreignKey: "BookId",
      through: 'userBookList',
    });
  }

  Book.sync();

  return Book;
};