import { BsFillPersonFill, BsSendFill } from 'react-icons/bs'
import ChatMessages from '../styled/chat-messages'
import { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import io from 'socket.io-client'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const socket = io.connect(process.env.REACT_APP_URL)

const Chat = () => {

    const { user, currentChat } = useContext(Context)

    const [message, setMessage] = useState('')

    const [messageList, setMessageList] = useState([])

    const data = {
        room: currentChat,
        user: user,
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    }

    const sendMessage = async () => {
        if (message !== '') {
            await socket.emit('message', data)
            setMessageList([...messageList, data])
            sendMessage('')
        } else {
            toast.error('can not send empty message',{position:'top-center',theme:'dark'})
        }
    }

    useEffect(() => {
        console.log('receiving...')
        socket.on('receive', (data) => {
            setMessageList([...messageList, data])
        })
        // eslint-disable-next-line
    }, [messageList,socket]);

    return (
        <div className='bg-secondary vh-100'>
            <ToastContainer autoClose={1500}/>
            <div className="d-flex px-3 py-2 bg-dark justify-content-between align-items-center">
                <span className='mx-2 fw-bold text-light fst-italic fs-5'>D/<span className='text-danger '>Chat...</span></span>
                <div className='d-flex text-light align-items-center'> <BsFillPersonFill color='#fff' size={20} className='mx-2' /> {user}</div>
            </div>
            <ChatMessages className="d-flex flex-column">
                {
                    messageList.map((element,index) => {
                        return <div key={index} className={`d-flex ${user === element.user ? "justify-content-end" : ""}`}>
                            <div className={`${user === element.user ? "user-message" : "message"} d-flex`}>
                                <div className="content d-flex flex-column rounded">
                                    <span className='user'>{user === element.user ? 'You' : element.user}</span>
                                    <span className='message-content'>{element.message}</span>
                                    <span className='time'>{element.time}</span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </ChatMessages>
            <div className="d-flex  py-3  my-2 align-items-center fixed-bottom">
                <input className='form-control  mx-2' type="text" placeholder='Write a message' value={message} onChange={(e) => setMessage(e.target.value)} />
                <span className='bg-light p-2 mx-2 ' onClick={sendMessage} style={{ borderRadius: '50%' }}><BsSendFill size={20} className='m-1' /></span>
            </div>
        </div>
    )
}

export default Chat