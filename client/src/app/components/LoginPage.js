// En tu-proyecto/src/components/LoginPage.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar la solicitud al backend y obtener la respuesta
    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();

        // Almacena la información del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        console.log('Inicio de sesión exitoso');
        // Redirige al usuario a la página principal
        router.push('/mainview');
      } else {
        console.error('Error al iniciar sesión');
        // Puedes manejar errores aquí
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Puedes manejar errores aquí
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
          disabled={!formData.usuario || !formData.contraseña}
        >
          Iniciar Sesión
        </button>
      </form>
      <p className={styles.bottomText}>
        ¿No tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
      <p>
        <a href="/">Volver</a>
      </p>
    </div>
  );
};

export default LoginPage;
