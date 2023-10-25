import { useContext } from "react"
import Context from "../context/Context"
import Login from "../components/Login"
import io from 'socket.io-client'
import Chat from "./Chat"

const socket = io(process.env.REACT_APP_URL,{
    withCredentials: true,
    transports:['websocket','polling']
})

const Home = () => {

    const { isLogin } = useContext(Context)

    return (
        <>
            {!isLogin && <Login socket={socket} />}
            {isLogin && <Chat  socket={socket}/>}
        </>
    )
}

export default Home