const { User } = require('../db');


const getAllUsers = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  };
  

const createUser = async ( nombre, usuario, contraseña, tipoUsuario) => {
  try {
    const newUser = await User.create({ nombre, usuario, contraseña, tipoUsuario });
    return newUser;
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async (usuario, contraseña) => {
  try {
    const user = await User.findOne({ where: { usuario, contraseña } });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      attributes: ['nombre', 'tipoUsuario', 'usuario'],
    });
    return user;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getAllUsers,  
  createUser,
  authenticateUser,
  getUserById
};
