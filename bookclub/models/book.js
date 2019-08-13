
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
        type: DataTypes.INTEGER,
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
      foreignKey: "bookId",
      through: models.UserBookList,
    });
  }

  return Book;
};