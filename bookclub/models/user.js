//TODO: add authentication

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
  );

  User.associate = (models) => {
    User.belongsToMany(models.Book, {
      foreignKey: "userId",
      through: models.UserBookList,
      }
   )
  };

  return User;
};