import { useContext } from "react"
import Context from "../context/Context"
import Login from "../components/Login"
import io from 'socket.io-client'
import Chat from "./Chat"

const socket = io.connect(process.env.REACT_APP_URL,{
    "transports": ['websocket']
 })

const Home = () => {

    const { isLogin } = useContext(Context)

    return (
        <>
            {!isLogin && <Login socket={socket} />}
            {isLogin && <Chat />}
        </>
    )
}

export default Home