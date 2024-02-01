const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ChatMessage', {
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    remitenteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
