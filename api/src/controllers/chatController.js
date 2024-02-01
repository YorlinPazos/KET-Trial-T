const { ChatMessage, User } = require('../db');

const sendMessage = async (remitenteId, contenido, tipoUsuario) => {
  try {
    const newMessage = await ChatMessage.create({ remitenteId, contenido, tipoUsuario });
    return newMessage;
  } catch (error) {
    throw error;
  }
};



// En tu archivo chatController.js

const { getUserById } = require('./userController');

const getAllMessages = async () => {
  try {
    const messages = await ChatMessage.findAll({
      attributes: ['id', 'contenido', 'remitenteId'],
    });

    const messagesWithSenderInfo = await Promise.all(messages.map(async (message) => {
      const senderInfo = await getUserById(message.remitenteId);
      return {
        id: message.id,
        contenido: message.contenido,
        remitenteId: message.remitenteId,
        remitenteInfo: senderInfo,
        createdAt: message.createdAt,
        updatedAt: message.updatedAt,
      };
    }));

    return messagesWithSenderInfo;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  sendMessage,
  getAllMessages
};
