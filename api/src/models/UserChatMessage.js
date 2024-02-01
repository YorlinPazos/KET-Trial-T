// Modelo encargado de hacer de tabla intermedia, y de almacenar info extra pero relevante.
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserChatMessage = sequelize.define('UserChatMessage', {
    leido: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fechaLeido: {
      type: DataTypes.DATE,
    }
  });

  return UserChatMessage;
};
