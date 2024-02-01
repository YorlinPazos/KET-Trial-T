// ChatComponent.js
import { useState } from 'react';

const ChatComponent = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { user, text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      {/* Visualización de mensajes */}
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user.username}:</strong> {message.text}
          </div>
        ))}
      </div>

      {/* Entrada de nuevo mensaje */}
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatComponent;
