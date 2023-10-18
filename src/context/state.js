import { useState } from "react";
import Context from "./Context";

const GlobalContext = (props) => {

    const [user, setUser] = useState('')
    const [currentChat, setCurrentChat] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
 
    return (
        <Context.Provider value={{ isLogin,setIsLogin,user,setUser,loginModal,setLoginModal,currentChat,setCurrentChat }}>
            {props.children}
        </Context.Provider>
    )
}

export default GlobalContext