module.exports = (sequelize, DataTypes) => {
  const UserBookList = sequelize.define(
    "UserBookList",
    {
      bookId: {type: DataTypes.INTEGER}
    },
    {
      userId: {type: DataTypes.INTEGER}
    },
    {
      status: {type: DataTypes.BOOLEAN}
    }
  )

  UserBookList.sync();

  return UserBookList;
;}