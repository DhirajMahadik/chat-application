
import { useState, useContext } from 'react'
import { CiCircleRemove } from 'react-icons/ci'
import Context from '../context/Context'
import { toast ,ToastContainer} from 'react-toastify'

const Login = ({socket}) => {

    const [username, setUsername] = useState('')
    const [chat, setChat] = useState('')
 
    const {setUser,setIsLogin, setCurrentChat,setLoginModal} = useContext(Context)

    const SignInHandler = (e) => {
        e.preventDefault()
        if(username !== ''){
            socket.emit('join',chat)
            setUser(username)
            setCurrentChat(chat)
            setIsLogin(true)
        }else{
            toast.error('Name required',{position:'top-left', theme:'light'})
        }
    }
 
    return (
        <>
        <ToastContainer autoClose={1500}/>
           <div className='container-fluid position-absolute d-flex z-1 vh-100 ' style={{ backgroundColor: '#00000099' }}>
                <div className="d-flex p-3 flex-column bg-light m-auto position-sticky bg-secondary rounded">
                    <div className='d-flex justify-content-end'><CiCircleRemove role='button' onClick={() =>setLoginModal(false)} size={25} /></div>
                    <form className='m-auto ' onSubmit={SignInHandler}>
                        <div className="d-flex justify-content-center py-2">
                        </div>
                        <div className="py-2">
                            <label className='form-lable' htmlFor="username">Name</label>
                            <input required className='form-control' type="text" name='username' id='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
                        </div>
                        <div className="py-2">
                            <label className='form-lable' htmlFor="chat">Chat ID</label>
                            <input required className='form-control' type="text" name='chat' id='chat' value={chat} onChange={(e)=> setChat(e.target.value)} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center py-2">
                            <button type="submit" className='btn btn-success my-2' > Sing IN</button>
                        </div>
                    </form>
                </div>
            </div> 
        </>
    )
}

export default Login