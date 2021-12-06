import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        socket.on("new_message_from_server", msg => 
            setMessages(prevMessages => {
                return [msg, ...prevMessages];
            })

        );
    },[])

    const messageHandler = (e,name) => {
        e.preventDefault();
        setMessages([...messages, name])

    }

    return (
        <div>
            <form onSubmit={messageHandler}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button>Message</button>
            </form>
        </div>
    )
}

export default Chat
