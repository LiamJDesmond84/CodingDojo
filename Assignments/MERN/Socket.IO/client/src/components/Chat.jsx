import { useEffect, useState } from "react";
import axios from "axios";

const ChatRoom = (props) => {
    const [messageList, setMessageList] = useState([]);
    const [content, setContent] = useState("");
    const [username] = useState(props.location.state.username)
    const { socket } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/new", 
                {username, content}
            )
            .then((res) => {
                console.log(res.data);
                socket.emit("Update_chat", {username, content });
                setContent("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(()=>{
        socket.emit("newUser", username);
        socket.on("newUser", (data)=>{
            document.getElementById("display").innerHTML = "Welcome " + data;
                    setTimeout(
                        () =>
                            (document.getElementById("display").innerHTML = ""),
                        1500,
                    );
        })
    },[])



    useEffect(()=>{
        socket.on("Update_chat", data => {
            console.log("here on line 51");
            setMessageList(messageList=>{return [data, ...messageList]
            });
        });

    },[])


    const styled = (isCurrentUser) =>{
        if(isCurrentUser === username){
            return "currentUserStyle"
        }
        else{
            return "notCurrentUserStyle"
        }
    }

    return (
        <div>
            <h1
                style={{
                    border: "2px solid black",
                    margin: "10px auto",
                    width: "70vw",
                }}
            >
                MERN Chat
            </h1>

            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                <div
                    style={{
                        border: "2px solid black",
                        margin: "10px auto",
                        width: "70vw",
                        height: "70vh",
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "scroll",
                        overflowAnchor: "none"
                    }}
                >
                    <p id="display"></p>

                    {messageList.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={styled(message.username)}
                            >
                                <h4
                                    style={{
                                        margin: "2px",
                                        padding: "0px",
                                        textAlign: "left",
                                    }}
                                >
                                    {message.username === username ? (
                                        <span>You</span>
                                    ) : (
                                        <span>{message.username}</span>
                                    )}{" "}
                                    said
                                </h4>
                                <p
                                    style={{
                                        marginLeft: "12px",
                                        padding: "0px",
                                        textAlign: "left",
                                    }}
                                >
                                    {message.content}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ChatRoom;
