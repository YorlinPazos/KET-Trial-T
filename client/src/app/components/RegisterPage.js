// En tu-proyecto/src/components/RegisterPage.js
import { useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter desde next/router
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const router = useRouter(); // Obtener el objeto router
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    tipoUsuario: 'estudiante',
    contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Usuario registrado exitosamente');

        // Obtener el usuario registrado (si es necesario)
        const user = await response.json();

        // Guardar el usuario en localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Redirigir al usuario a MainView después del registro
        router.push('/mainview');
      } else {
        console.error('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          Usuario:
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          Tipo de Usuario:
          <select
            name="tipoUsuario"
            value={formData.tipoUsuario}
            onChange={handleChange}
            className={styles.formInput}
          >
            <option value="estudiante">Estudiante</option>
            <option value="moderador">Moderador</option>
          </select>
        </label>
        <label className={styles.formLabel}>
          Contraseña:
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <button
          type="submit"
          className={styles.formButton}
          disabled={!formData.nombre || !formData.usuario || !formData.contraseña}
        >
          Registrarse
        </button>
      </form>
      <p className={styles.bottomText}>
        ¿Ya estás registrado? <a href="/login">Inicia Sesión</a>
      </p>
      <p>
        <a href="/">Volver</a>
      </p>
    </div>
  );
};

export default RegisterPage;
