//TODO: add authentication

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );

  User.associate = (models) => {
    User.belongsToMany(models.Books, {
      foreignKey: {
        as: "User",
        foreignKey: "UserId",
        through: 'userBookList'
      }
    });
  }

  User.sync();

  return User;
};