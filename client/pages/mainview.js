// // En tu-proyecto/src/components/MainView.js
// import { useEffect, useState } from 'react';
// import styles from './MainView.module.css'; // Asegúrate de tener el archivo de estilos correspondiente

// const MainView = () => {
//   const [user, setUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       // Cargar mensajes al montar el componente
//       fetchMessages();
//     } else {
//       window.location.href = '/login';
//     }
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/chat/all-messages');
//       if (response.ok) {
//         const data = await response.json();
//         setMessages(data);
//       } else {
//         console.error('Error al obtener mensajes');
//       }
//     } catch (error) {
//       console.error('Error en la solicitud:', error);
//     }
//   };

//   const handleSendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const response = await fetch('http://localhost:3001/chat/send-message', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             contenido: newMessage,
//             remitenteId: user.id,
//           }),
//         });

//         if (response.ok) {
//           console.log('Mensaje enviado con éxito');
//           // Actualizar la lista de mensajes después de enviar el mensaje
//           fetchMessages();
//           // Limpiar el campo de nuevo mensaje
//           setNewMessage('');
//         } else {
//           console.error('Error al enviar el mensaje');
//         }
//       } catch (error) {
//         console.error('Error en la solicitud:', error);
//       }
//     }
//   };

//   return (
//     <div className={styles.mainViewContainer}>
//       {user && (
//         <div className={styles.chatContainer}>
//           <h2>
//           Bienvenido, {user.remitenteInfo ? user.remitenteInfo.nombre : ''} ({user.remitenteInfo ? user.remitenteInfo.tipoUsuario : ''})
//           </h2>
//           <div className={styles.messagesContainer}>
//             {messages.map((message) => (
//               <div key={message.id} className={styles.messageWrapper}>
//                 {message.remitenteId === user.id ? (
//                   <div className={styles.userMessage}>
//                     <p>{message.contenido}</p>
//                     <p>
//                       Enviado por: {message.remitenteInfo.nombre} ({message.remitenteInfo.tipoUsuario})
//                     </p>
//                   </div>
//                 ) : (
//                   <div className={styles.otherMessage}>
//                     <p>{message.contenido}</p>
//                     <p>
//                       Enviado por: {message.remitenteInfo.nombre} ({message.remitenteInfo.tipoUsuario})
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <textarea
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Escribe tu mensaje..."
//             rows={4}
//           />
//           <button onClick={handleSendMessage}>Enviar</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainView;





// En tu-proyecto/src/components/MainView.js
import { useEffect, useState } from 'react';
import styles from './MainView.module.css'; // Asegúrate de tener el archivo de estilos correspondiente
import YouTube from 'react-youtube';

const MainView = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      // Cargar mensajes al montar el componente
      fetchMessages();
    } else {
      window.location.href = '/login';
    }
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:3001/chat/all-messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error('Error al obtener mensajes');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        const response = await fetch('http://localhost:3001/chat/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contenido: newMessage,
            remitenteId: user.id,
          }),
        });

        if (response.ok) {
          console.log('Mensaje enviado con éxito');
          // Actualizar la lista de mensajes después de enviar el mensaje
          fetchMessages();
          // Limpiar el campo de nuevo mensaje
          setNewMessage('');
        } else {
          console.error('Error al enviar el mensaje');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/'; // Redirige al landing
  };

  // Configuración del video de YouTube
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  

  return (
    <div className={styles.mainViewContainer}>
      {user && (
        <div className={styles.chatContainer}>
          <h2>
            Bienvenido, {user.remitenteInfo ? user.remitenteInfo.nombre : ''} ({user.remitenteInfo ? user.remitenteInfo.tipoUsuario : ''})
          </h2>
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div key={message.id} className={styles.messageWrapper}>
                {message.remitenteId === user.id ? (
                  <div className={styles.userMessage}>
                    <p>{message.contenido}</p>
                    <p>
                      Enviado por: {message.remitenteInfo.nombre} ({message.remitenteInfo.tipoUsuario})
                    </p>
                  </div>
                ) : (
                  <div className={styles.otherMessage}>
                    <p>{message.contenido}</p>
                    <p>
                      Enviado por: {message.remitenteInfo.nombre} ({message.remitenteInfo.tipoUsuario})
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            rows={4}
          />
          <button onClick={handleSendMessage}>Enviar</button>
          <button onClick={handleLogout}>Logout</button>
          <div className={styles.youtubeContainer}>
          <YouTube videoId="jHB_EQkZSQE" opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainView;
