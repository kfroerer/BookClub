module.exports = (sequelize, DataTypes) => {
  const UserBookList = sequelize.define(
    "UserBookList", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    bookId: {type: DataTypes.UUID},
    userId: {type: DataTypes.UUID},
    status: {type: DataTypes.BOOLEAN}
    });

  UserBookList.sync();

  return UserBookList;
;}