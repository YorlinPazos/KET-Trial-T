const { getAllUsers,createUser, authenticateUser } = require('../controllers/userController');
const { sendMessage, getAllMessages } = require('../controllers/chatController');



const getAllUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Crear un usuario
const registerUserHandler = async (req, res) => {
  const { nombre, usuario, contraseña, tipoUsuario } = req.body;

  try {
    const newUser = await createUser(nombre, usuario, contraseña, tipoUsuario);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// logearse
const loginHandler = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const user = await authenticateUser(usuario, contraseña);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};


// enviar un mensaje en el chat.
const sendMessageHandler = async (req, res) => {
  const {  remitenteId, contenido, tipoUsuario } = req.body;

  try {
    const newMessage = await sendMessage( remitenteId, contenido, tipoUsuario);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// obtener todos los mensajes del chat. 
const getAllMessagesHandler = async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
  getAllUsersHandler,
  registerUserHandler,
  loginHandler,
  sendMessageHandler,
  getAllMessagesHandler,
};
